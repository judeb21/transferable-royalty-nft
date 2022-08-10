// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    Logger: {
      change: []
      }
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  const NFT_id = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v184, v185, v186, v190] = svs;
      return (await ((async () => {
        
        
        return v185;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v184, v185, v186, v190, v207] = svs;
      return (await ((async () => {
        
        
        return v185;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v184, v185, v186, v190, v283] = svs;
      return (await ((async () => {
        
        
        return v185;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const NFT_owner = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v184, v185, v186, v190] = svs;
      return (await ((async () => {
        
        
        return v190;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v184, v185, v186, v190, v207] = svs;
      return (await ((async () => {
        
        
        return v190;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v184, v185, v186, v190, v283] = svs;
      return (await ((async () => {
        
        
        return v190;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      NFT: {
        id: {
          decode: NFT_id,
          ty: ctc1
          },
        owner: {
          decode: NFT_owner,
          ty: ctc0
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc0],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    Owner0_55: ctc1,
    Owner1_55: ctc0
    });
  
  
  const v178 = stdlib.protect(ctc0, interact.royalty, 'for Creator\'s interact field royalty');
  
  const v181 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:34:41:application',
    fs: ['at ./index.rsh:33:15:application call to [unknown function] (defined at: ./index.rsh:33:19:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  const v182 = stdlib.mod(v178, stdlib.checkedBigNumberify('./index.rsh:35:52:decimal', stdlib.UInt_max, '100'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v181, v182],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v185, v186], secs: v188, time: v187, didSend: v31, from: v184 } = txn1;
      
      ;
      const v190 = v184;
      const v191 = v187;
      
      if (await (async () => {
        
        return true;})()) {
        null;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v185, v186], secs: v188, time: v187, didSend: v31, from: v184 } = txn1;
  ;
  const v189 = stdlib.le(v186, stdlib.checkedBigNumberify('./index.rsh:39:22:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v189, {
    at: './index.rsh:39:10:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  let v190 = v184;
  let v191 = v187;
  
  while (await (async () => {
    
    return true;})()) {
    null;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v207], secs: v209, time: v208, didSend: v53, from: v206 } = txn2;
    ;
    const v210 = stdlib.addressEq(v206, v190);
    stdlib.assert(v210, {
      at: './index.rsh:66:12:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v244], secs: v246, time: v245, didSend: v129, from: v243 } = txn3;
    switch (v244[0]) {
      case 'Owner0_55': {
        const v247 = v244[1];
        ;
        const v254 = stdlib.addressEq(v243, v190);
        stdlib.assert(v254, {
          at: './index.rsh:80:18:application',
          fs: [],
          msg: null,
          who: 'Creator'
          });
        const v255 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        stdlib.assert(v255, {
          at: './index.rsh:81:18:application',
          fs: [],
          msg: null,
          who: 'Creator'
          });
        const cv190 = v247;
        const cv191 = v245;
        
        v190 = cv190;
        v191 = cv191;
        
        continue;
        break;
        }
      case 'Owner1_55': {
        const v283 = v244[1];
        ;
        const v293 = stdlib.addressEq(v243, v190);
        stdlib.assert(v293, {
          at: './index.rsh:95:18:application',
          fs: [],
          msg: null,
          who: 'Creator'
          });
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc1],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v300], secs: v302, time: v301, didSend: v148, from: v299 } = txn4;
        ;
        const v305 = stdlib.mul(v283, v186);
        const v306 = stdlib.div(v305, stdlib.checkedBigNumberify('./index.rsh:43:47:decimal', stdlib.UInt_max, '100'));
        ;
        const v313 = stdlib.sub(v283, v306);
        ;
        const cv190 = v300;
        const cv191 = v301;
        
        v190 = cv190;
        v191 = cv191;
        
        continue;
        
        
        break;
        }
      }
    
    
    
    }
  return;
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    Owner0_55: ctc1,
    Owner1_55: ctc0
    });
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v185, v186], secs: v188, time: v187, didSend: v31, from: v184 } = txn1;
  ;
  const v189 = stdlib.le(v186, stdlib.checkedBigNumberify('./index.rsh:39:22:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v189, {
    at: './index.rsh:39:10:application',
    fs: [],
    msg: null,
    who: 'Owner'
    });
  let v190 = v184;
  let v191 = v187;
  
  while (await (async () => {
    
    return true;})()) {
    null;
    const v197 = ctc.selfAddress();
    const v199 = stdlib.addressEq(v197, v190);
    let v200;
    if (v199) {
      const v201 = stdlib.protect(ctc0, await interact.transferOption(), {
        at: './index.rsh:60:74:application',
        fs: ['at ./index.rsh:58:15:application call to [unknown function] (defined at: ./index.rsh:58:19:function exp)'],
        msg: 'transferOption',
        who: 'Owner'
        });
      const v202 = stdlib.mod(v201, stdlib.checkedBigNumberify('./index.rsh:60:80:decimal', stdlib.UInt_max, '2'));
      v200 = v202;
      }
    else {
      v200 = stdlib.checkedBigNumberify('./index.rsh:60:84:decimal', stdlib.UInt_max, '0');
      }
    
    const txn2 = await (ctc.sendrecv({
      args: [v184, v185, v186, v190, v200],
      evt_cnt: 1,
      funcNum: 2,
      lct: v191,
      onlyIf: v199,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:63:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v207], secs: v209, time: v208, didSend: v53, from: v206 } = txn2;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc0, ctc1, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v207], secs: v209, time: v208, didSend: v53, from: v206 } = txn2;
    ;
    const v210 = stdlib.addressEq(v206, v190);
    stdlib.assert(v210, {
      at: './index.rsh:66:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v211 = ctc.selfAddress();
    const v213 = stdlib.addressEq(v211, v190);
    const v214 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v215 = v213 ? v214 : false;
    let v216;
    if (v215) {
      const v217 = stdlib.protect(ctc1, await interact.newOwner(), {
        at: './index.rsh:73:65:application',
        fs: ['at ./index.rsh:71:9:application call to [unknown function] (defined at: ./index.rsh:71:9:function exp)', 'at ./index.rsh:69:9:application call to "runOwner0_55" (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:9:function exp)'],
        msg: 'newOwner',
        who: 'Owner'
        });
      v216 = v217;
      }
    else {
      v216 = v190;
      }
    const v219 = ['Owner0_56', null];
    const v220 = ['Owner0_55', v216];
    let v222;
    if (v215) {
      const v225 = {
        _local: v219,
        msg: v220,
        when: true
        };
      v222 = v225;
      }
    else {
      const v227 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v228 = v213 ? v227 : false;
      let v229;
      if (v228) {
        const v230 = stdlib.protect(ctc0, await interact.salePrice(), {
          at: './index.rsh:88:67:application',
          fs: ['at ./index.rsh:86:9:application call to [unknown function] (defined at: ./index.rsh:86:9:function exp)', 'at ./index.rsh:69:9:application call to "runOwner1_55" (defined at: ./index.rsh:85:12:function exp)', 'at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:9:function exp)'],
          msg: 'salePrice',
          who: 'Owner'
          });
        v229 = v230;
        }
      else {
        v229 = stdlib.checkedBigNumberify('./index.rsh:88:73:decimal', stdlib.UInt_max, '0');
        }
      const v232 = ['Owner1_56', null];
      const v233 = ['Owner1_55', v229];
      const v234 = {
        _local: v232,
        msg: v233,
        when: v228
        };
      v222 = v234;
      }
    const v238 = v222.msg;
    const v239 = v222.when;
    
    const txn3 = await (ctc.sendrecv({
      args: [v184, v185, v186, v190, v207, v238],
      evt_cnt: 1,
      funcNum: 3,
      lct: v208,
      onlyIf: v239,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:70:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v244], secs: v246, time: v245, didSend: v129, from: v243 } = txn3;
        
        switch (v244[0]) {
          case 'Owner0_55': {
            const v247 = v244[1];
            ;
            const cv190 = v247;
            const cv191 = v245;
            
            await (async () => {
              const v190 = cv190;
              const v191 = cv191;
              
              if (await (async () => {
                
                return true;})()) {
                null;
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            break;
            }
          case 'Owner1_55': {
            const v283 = v244[1];
            ;
            sim_r.isHalt = false;
            
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc0, ctc0, ctc1, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const {data: [v244], secs: v246, time: v245, didSend: v129, from: v243 } = txn3;
    switch (v244[0]) {
      case 'Owner0_55': {
        const v247 = v244[1];
        ;
        const v254 = stdlib.addressEq(v243, v190);
        stdlib.assert(v254, {
          at: './index.rsh:80:18:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const v255 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        stdlib.assert(v255, {
          at: './index.rsh:81:18:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const cv190 = v247;
        const cv191 = v245;
        
        v190 = cv190;
        v191 = cv191;
        
        continue;
        break;
        }
      case 'Owner1_55': {
        const v283 = v244[1];
        ;
        const v293 = stdlib.addressEq(v243, v190);
        stdlib.assert(v293, {
          at: './index.rsh:95:18:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const v294 = ctc.selfAddress();
        const v296 = stdlib.addressEq(v294, v190);
        const v297 = v296 ? false : true;
        if (v296) {
          }
        else {
          stdlib.protect(ctc3, await interact.buy(v283), {
            at: './index.rsh:100:36:application',
            fs: ['at ./index.rsh:98:21:application call to [unknown function] (defined at: ./index.rsh:98:25:function exp)'],
            msg: 'buy',
            who: 'Owner'
            });
          }
        
        const txn4 = await (ctc.sendrecv({
          args: [v184, v185, v186, v190, v283, v294],
          evt_cnt: 1,
          funcNum: 4,
          lct: v245,
          onlyIf: v297,
          out_tys: [ctc1],
          pay: [v283, []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v300], secs: v302, time: v301, didSend: v148, from: v299 } = txn4;
            
            sim_r.txns.push({
              amt: v283,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v305 = stdlib.mul(v283, v186);
            const v306 = stdlib.div(v305, stdlib.checkedBigNumberify('./index.rsh:43:47:decimal', stdlib.UInt_max, '100'));
            sim_r.txns.push({
              kind: 'from',
              to: v184,
              tok: undefined /* Nothing */
              });
            const v313 = stdlib.sub(v283, v306);
            sim_r.txns.push({
              kind: 'from',
              to: v190,
              tok: undefined /* Nothing */
              });
            const cv190 = v300;
            const cv191 = v301;
            
            await (async () => {
              const v190 = cv190;
              const v191 = cv191;
              
              if (await (async () => {
                
                return true;})()) {
                null;
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc0, ctc0, ctc1, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [v300], secs: v302, time: v301, didSend: v148, from: v299 } = txn4;
        ;
        const v305 = stdlib.mul(v283, v186);
        const v306 = stdlib.div(v305, stdlib.checkedBigNumberify('./index.rsh:43:47:decimal', stdlib.UInt_max, '100'));
        ;
        const v313 = stdlib.sub(v283, v306);
        ;
        const cv190 = v300;
        const cv191 = v301;
        
        v190 = cv190;
        v191 = cv191;
        
        continue;
        
        
        break;
        }
      }
    
    
    
    }
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`NFT_id()uint64`, `NFT_owner()address`],
    sigs: [`NFT_id()uint64`, `NFT_owner()address`]
    },
  appApproval: `BiAMAAEFBAMoIAiK472ND1BkAiYCAQAAIjUAMRhBAwgpZEkiWzUBIQdbNQI2GgAXSUEAkyI1BCM1BkkhCAxAAEEhCBJENAFJJQxAACRJJAxAABAkEkQoZEk1A1cwIDUHQgK9SChkSTUDVzAgNQdCAq8hBBJEKGRJNQNXMCA1B0ICnoHU2a7nBRJENAFJJQxAACRJJAxAABAkEkQoZEk1A1cgCDUHQgJ4SChkSTUDVyAINQdCAmohBBJEKGRJNQNXIAg1B0ICWTYaAhc1BDYaAzYaARdJIQQMQAEWSSUMQAB9JRJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEFWzX+IQlbNf1JNQU1/IAEtwG2hzT8ULA0/YgCKDT9NP4LIQoKNfuxIrIBNPuyCCOyEDT/sgezsSKyATT9NPsJsggjshA0A1cwILIHszT/NAMhBls0/jT8MgZCAUpIJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEGWzX+IQVbNf1XMCA1/Ek1BTX7gAQUkUDUNPtQsDT7IlVAACI0+1cBIDX6MQA0/BJENAMhCVsiEkQ0/zT+NP00+jIGQgDmNPsjWzX6MQA0/BJENP80/hZQNP0WUDT8UDT6FlAoSwFXAFhnSCQ1ATIGNQJCAQNJIQsMQABnSCEENAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQZbNf4hBVs1/VcwIDX8STUFFzX7gASXTvcXNPsWULAxADT8EkQ0/zT+FlA0/RZQNPxQNPsWUChLAVcAWGdIJTUBMgY1AkIAlSISRIGgjQaIAN0iNAESRDQESSISTDQCEhFESTUFSSJbNf8hB1s1/oAErNEfwzT/FlA0/hZQsDT+IQoORDEANP80/jEAMgZCAAA1/zX+Nf01/DX7gAQQe4i+sDT7NPwWUDT9FlA0/lAoSwFXAFBnSCEENQEyBjUCQgAbMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQsxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 88,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "Logger_change",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v186",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_Owner0_55",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Owner1_55",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11",
                "name": "v244",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v300",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "NFT_id",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T11",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_Owner0_55",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Owner1_55",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T11",
                "name": "v244",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v300",
                "type": "address"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001625380380620016258339810160408190526200002691620002f5565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600962000126565b620000aa60648260200151602001511115600a6200012660201b60201c565b6040805160a08101825260008183018181526060830182905260808301829052825282518084019093528083526020808401919091528101919091528051339081905260208084018051518451830152518101518351604001528083018051929092529051439101526200011e8162000150565b505062000392565b816200014c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040517fb88880118720dfb8ef1dc51508bd0b32b4b91d6984afc2e54b3c6845b2f557ce90600090a160408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b5187015186528b518b015185528b87015151821683526003909755436001558951808701979097529351868a01529151908501525116828401528451808303909301835260a09091019093528051919262000213926002929091019062000218565b505050565b828054620002269062000355565b90600052602060002090601f0160209004810192826200024a576000855562000295565b82601f106200026557805160ff191683800117855562000295565b8280016001018555821562000295579182015b828111156200029557825182559160200191906001019062000278565b50620002a3929150620002a7565b5090565b5b80821115620002a35760008155600101620002a8565b604080519081016001600160401b0381118282101715620002ef57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200030957600080fd5b62000313620002be565b835181526040601f19830112156200032a57600080fd5b62000334620002be565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200036a57607f821691505b602082108114156200038c57634e487b7160e01b600052602260045260246000fd5b50919050565b61128380620003a26000396000f3fe6080604052600436106100795760003560e01c806345f703961161004b57806345f70396146100e55780635cf275dd146100f85780638323075714610125578063ab53f2c61461013a57005b80630489060314610082578063192bebac146100aa5780631e93b0f1146100bd57806324282dc3146100d257005b3661008057005b005b34801561008e57600080fd5b5061009761015d565b6040519081526020015b60405180910390f35b6100806100b8366004610e7d565b61016f565b3480156100c957600080fd5b50600354610097565b6100806100e0366004610ea0565b6103de565b6100806100f3366004610e7d565b610722565b34801561010457600080fd5b5061010d610922565b6040516001600160a01b0390911681526020016100a1565b34801561013157600080fd5b50600154610097565b34801561014657600080fd5b5061014f61092e565b6040516100a1929190610eb2565b600080610169816109cb565b91505090565b61017f6005600054146017610b59565b6101998135158061019257506001548235145b6018610b59565b6000808055600280546101ab90610f0f565b80601f01602080910402602001604051908101604052809291908181526020018280546101d790610f0f565b80156102245780601f106101f957610100808354040283529160200191610224565b820191906000526020600020905b81548152906001019060200180831161020757829003601f168201915b505050505080602001905181019061023c9190610fee565b90506102546040518060200160405280600081525090565b7f7f0349471693910a3483f52c74bdb82b47c51d664ba33067e7840f3e6350441f338460405161028592919061100a565b60405180910390a161029e826080015134146016610b59565b6064826040015183608001516102b4919061105b565b6102be919061107a565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f193505050501580156102f8573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc8260000151846080015161031e919061109c565b6040518115909202916000818181858888f19350505050158015610346573d6000803e3d6000fd5b506040805160a0810182526000818301818152606083018290526080830182905282528251808401845281815260208082019290925281830152845182516001600160a01b03909116905284810151825182015284830151825184015290916103b4919086019086016110b3565b602080830180516001600160a01b039093169092529051439101526103d881610b82565b50505050565b6103ee6004600054146014610b59565b6104088135158061040157506001548235145b6015610b59565b60008080556002805461041a90610f0f565b80601f016020809104026020016040519081016040528092919081815260200182805461044690610f0f565b80156104935780601f1061046857610100808354040283529160200191610493565b820191906000526020600020905b81548152906001019060200180831161047657829003601f168201915b50505050508060200190518101906104ab9190610fee565b60408051808201909152600080825260208201529091507f2b2fb1806a856ce3b32d01521e786d8104da2988f2454d3b16f81f7df73bebd233846040516104f39291906110f5565b60405180910390a1600061050d604085016020860161116c565b600181111561051e5761051e6110df565b14156105fd5761053460608401604085016110b3565b6001600160a01b0316815261054b3415600f610b59565b61056e82606001516001600160a01b0316336001600160a01b0316146010610b59565b61058060008360800151146011610b59565b6040805160a08101825260008183018181526060830182905260808301829052825282518084018452818152602080820192909252818301908152855183516001600160a01b039182169052868301518451840152868501518451909501949094528451815194169093529151439201919091526103d881610b82565b600161060f604085016020860161116c565b6001811115610620576106206110df565b141561071d576060830135602082015261063c34156012610b59565b61065f82606001516001600160a01b0316336001600160a01b0316146013610b59565b6106a36040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b03908116825260208085015181840152604080860151818501526060808701519093169284019290925283810151608084015260056000554360015590516106f691839101611187565b6040516020818303038152906040526002908051906020019061071a929190610dcc565b50505b505050565b610732600360005414600d610b59565b61074c8135158061074557506001548235145b600e610b59565b60008080556002805461075e90610f0f565b80601f016020809104026020016040519081016040528092919081815260200182805461078a90610f0f565b80156107d75780601f106107ac576101008083540402835291602001916107d7565b820191906000526020600020905b8154815290600101906020018083116107ba57829003601f168201915b50505050508060200190518101906107ef91906111ca565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16108443415600b610b59565b61086781606001516001600160a01b0316336001600160a01b031614600c610b59565b6108ab6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151818501526060808601519093169284019290925284810135608084015260046000554360015590516108fe91839101611187565b604051602081830303815290604052600290805190602001906103d8929190610dcc565b60008061016981610c43565b60006060600054600280805461094390610f0f565b80601f016020809104026020016040519081016040528092919081815260200182805461096f90610f0f565b80156109bc5780601f10610991576101008083540402835291602001916109bc565b820191906000526020600020905b81548152906001019060200180831161099f57829003601f168201915b50505050509050915091509091565b600060036000541415610a83576000600280546109e790610f0f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1390610f0f565b8015610a605780601f10610a3557610100808354040283529160200191610a60565b820191906000526020600020905b815481529060010190602001808311610a4357829003601f168201915b5050505050806020019051810190610a7891906111ca565b602001519392505050565b60046000541415610b2e57600060028054610a9d90610f0f565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac990610f0f565b8015610b165780601f10610aeb57610100808354040283529160200191610b16565b820191906000526020600020905b815481529060010190602001808311610af957829003601f168201915b5050505050806020019051810190610a789190610fee565b60056000541415610b4857600060028054610a9d90610f0f565b610b5460006007610b59565b919050565b81610b7e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040517fb88880118720dfb8ef1dc51508bd0b32b4b91d6984afc2e54b3c6845b2f557ce90600090a160408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b5187015186528b518b015185528b87015151821683526003909755436001558951808701979097529351868a01529151908501525116828401528451808303909301835260a09091019093528051919261071d9260029290910190610dcc565b600060036000541415610cfb57600060028054610c5f90610f0f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8b90610f0f565b8015610cd85780601f10610cad57610100808354040283529160200191610cd8565b820191906000526020600020905b815481529060010190602001808311610cbb57829003601f168201915b5050505050806020019051810190610cf091906111ca565b606001519392505050565b60046000541415610da657600060028054610d1590610f0f565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4190610f0f565b8015610d8e5780601f10610d6357610100808354040283529160200191610d8e565b820191906000526020600020905b815481529060010190602001808311610d7157829003601f168201915b5050505050806020019051810190610cf09190610fee565b60056000541415610dc057600060028054610d1590610f0f565b610b5460006008610b59565b828054610dd890610f0f565b90600052602060002090601f016020900481019282610dfa5760008555610e40565b82601f10610e1357805160ff1916838001178555610e40565b82800160010185558215610e40579182015b82811115610e40578251825591602001919060010190610e25565b50610e4c929150610e50565b5090565b5b80821115610e4c5760008155600101610e51565b600060408284031215610e7757600080fd5b50919050565b600060408284031215610e8f57600080fd5b610e998383610e65565b9392505050565b600060808284031215610e7757600080fd5b82815260006020604081840152835180604085015260005b81811015610ee657858101830151858201606001528201610eca565b81811115610ef8576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610f2357607f821691505b60208210811415610e7757634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610f5957600080fd5b50565b600060a08284031215610f6e57600080fd5b60405160a0810181811067ffffffffffffffff82111715610f9f57634e487b7160e01b600052604160045260246000fd5b80604052508091508251610fb281610f44565b8082525060208301516020820152604083015160408201526060830151610fd881610f44565b6060820152608092830151920191909152919050565b600060a0828403121561100057600080fd5b610e998383610f5c565b6001600160a01b038381168252823560208084019190915260608301919084013561103481610f44565b818116604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561107557611075611045565b500290565b60008261109757634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156110ae576110ae611045565b500390565b6000602082840312156110c557600080fd5b8135610e9981610f44565b803560028110610b5457600080fd5b634e487b7160e01b600052602160045260246000fd5b6001600160a01b038381168252823560208084019190915260a08301919061111e9085016110d0565b6002811061113c57634e487b7160e01b600052602160045260246000fd5b80604085015250604084013561115181610f44565b81811660608501525050606083013560808301529392505050565b60006020828403121561117e57600080fd5b610e99826110d0565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b6000608082840312156111dc57600080fd5b6040516080810181811067ffffffffffffffff8211171561120d57634e487b7160e01b600052604160045260246000fd5b604052825161121b81610f44565b808252506020830151602082015260408301516040820152606083015161124181610f44565b6060820152939250505056fea26469706673582212201400608bc306b261290312af583eabecceae8e960df17a96c59b039cf4779a5664736f6c634300080c0033`,
  BytecodeLen: 5669,
  Which: `oD`,
  version: 7,
  views: {
    NFT: {
      id: `NFT_id`,
      owner: `NFT_owner`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:114:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:56:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:67:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:96:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "Owner": Owner
  };
export const _APIs = {
  };
