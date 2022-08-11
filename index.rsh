'reach 0.1';
'use strict';

const [isTransferOption, GIFT, SALE] = makeEnum(2);

const SaleInterface = {
  buy: Fun([UInt], Null),
  salePrice: Fun([], UInt),
};

export const main = Reach.App(() => {
  const Creator = Participant('Creator', {
    getId: Fun([], UInt),
    name: Bytes(128),
    url: Bytes(256),
    royalty: UInt,
  });
  const Owner = ParticipantClass('Owner', {
    transferOption: Fun([], UInt),
    newOwner: Fun([], Address),
    ...SaleInterface,
  });

  const vNFT = View('NFT', {
    id: UInt,
    name: Bytes(128),
    url: Bytes(256),
    royalty: UInt,
    option: UInt,
    owner: Address,
  });

  const vSell = View('Sell', {
    price: UInt,
  })

  const Logger = Events('Logger', {
    change: [],
  });

  init();

  Creator.only(() => {
    const id = declassify(interact.getId());
    const nftName = declassify(interact.name);
    const url = declassify(interact.url);
    const royalty = declassify(interact.royalty) % 100;
    assert(royalty <= 100);
  });
  Creator.publish(id, nftName, url, royalty);
  require(royalty <= 100);
  vNFT.id.set(id);
  vNFT.name.set(nftName);
  vNFT.url.set(url);
  vNFT.royalty.set(royalty);

  const royaltyTransfer = (salePrice, owner) => {
    const royaltyPrice = salePrice * royalty / 100;
    assert(royalty <= 100);
    assert(royaltyPrice <= salePrice);

    transfer(royaltyPrice).to(Creator);
    transfer(salePrice - royaltyPrice).to(owner);
  };

  var owner = Creator;
  { vNFT.owner.set(owner); };
  invariant(balance() == 0);
  while (true) {
    vNFT.option.set(GIFT);
    Logger.change();
    commit();
    
    Owner.only(() => {
      const amOwner = this == owner;
      const transferOption = amOwner ? declassify(interact.transferOption()) % 2 : 0;
      assert(isTransferOption(transferOption));
    });
    Owner.publish(transferOption)
      .when(amOwner)
      .timeout(false);
    require(this == owner);
    commit();

    fork()
      .case(Owner,
        (() => {
          const isGift = this == owner && transferOption == GIFT;
          const newOwner = isGift ? declassify(interact.newOwner()) : owner;
          return {
            msg: newOwner,
            when: isGift,
          };
        }),
        (newOwner) => {
          require(this == owner);
          require(transferOption == GIFT);
          owner = newOwner;
          continue;
        })
      .case(Owner,
        (() => {
          const isSale = this == owner && transferOption == SALE;
          const salePrice = isSale ? declassify(interact.salePrice()) : 0;
          return {
            msg: salePrice,
            when: isSale,
          };
        }),
        (salePrice) => {
          require(this == owner);
          vNFT.option.set(SALE);
          vSell.price.set(salePrice);
          Logger.change();
          commit();

          Owner.only(() => {
            const notOwner = this != owner;
            notOwner ? interact.buy(salePrice) : null;
            const newOwner = this;
          });
          Owner.publish(newOwner)
            .when(notOwner)
            .pay(salePrice)
            .timeout(false);

          royaltyTransfer(salePrice, owner);
          owner = newOwner;
          continue;
        })
    .timeout(false);
  }
  commit();

  assert(false);
});
