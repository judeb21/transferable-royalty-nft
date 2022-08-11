// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 18;

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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  
  return {
    infos: {
      NFT: {
        id: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v190, v191, v192, v193, v194, v198] = svs;
              return (await ((async () => {
                
                
                return v191;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v190, v191, v192, v193, v194, v198, v215] = svs;
              return (await ((async () => {
                
                
                return v191;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v190, v191, v192, v193, v194, v198, v291] = svs;
              return (await ((async () => {
                
                
                return v191;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        name: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v190, v191, v192, v193, v194, v198] = svs;
              return (await ((async () => {
                
                
                return v192;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v190, v191, v192, v193, v194, v198, v215] = svs;
              return (await ((async () => {
                
                
                return v192;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v190, v191, v192, v193, v194, v198, v291] = svs;
              return (await ((async () => {
                
                
                return v192;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        option: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v190, v191, v192, v193, v194, v198] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v190, v191, v192, v193, v194, v198, v215] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v190, v191, v192, v193, v194, v198, v291] = svs;
              return (await ((async () => {
                
                
                return stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v190, v191, v192, v193, v194, v198] = svs;
              return (await ((async () => {
                
                
                return v198;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v190, v191, v192, v193, v194, v198, v215] = svs;
              return (await ((async () => {
                
                
                return v198;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v190, v191, v192, v193, v194, v198, v291] = svs;
              return (await ((async () => {
                
                
                return v198;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        royalty: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v190, v191, v192, v193, v194, v198] = svs;
              return (await ((async () => {
                
                
                return v194;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v190, v191, v192, v193, v194, v198, v215] = svs;
              return (await ((async () => {
                
                
                return v194;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v190, v191, v192, v193, v194, v198, v291] = svs;
              return (await ((async () => {
                
                
                return v194;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        url: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v190, v191, v192, v193, v194, v198] = svs;
              return (await ((async () => {
                
                
                return v193;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v190, v191, v192, v193, v194, v198, v215] = svs;
              return (await ((async () => {
                
                
                return v193;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v190, v191, v192, v193, v194, v198, v291] = svs;
              return (await ((async () => {
                
                
                return v193;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          }
        },
      Sell: {
        price: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v190, v191, v192, v193, v194, v198] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
              const [v190, v191, v192, v193, v194, v198, v215] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
              const [v190, v191, v192, v193, v194, v198, v291] = svs;
              return (await ((async () => {
                
                
                return v291;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          }
        }
      },
    views: {
      3: [ctc0, ctc1, ctc2, ctc3, ctc1, ctc0],
      4: [ctc0, ctc1, ctc2, ctc3, ctc1, ctc0, ctc1],
      5: [ctc0, ctc1, ctc2, ctc3, ctc1, ctc0, ctc1]
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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    Owner0_59: ctc3,
    Owner1_59: ctc1
    });
  
  
  const v182 = stdlib.protect(ctc0, interact.name, 'for Creator\'s interact field name');
  const v183 = stdlib.protect(ctc1, interact.royalty, 'for Creator\'s interact field royalty');
  const v184 = stdlib.protect(ctc2, interact.url, 'for Creator\'s interact field url');
  
  const v187 = stdlib.protect(ctc1, await interact.getId(), {
    at: './index.rsh:44:41:application',
    fs: ['at ./index.rsh:43:15:application call to [unknown function] (defined at: ./index.rsh:43:19:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  const v188 = stdlib.mod(v183, stdlib.checkedBigNumberify('./index.rsh:47:52:decimal', stdlib.UInt_max, '100'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v187, v182, v184, v188],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:50:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc2, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v191, v192, v193, v194], secs: v196, time: v195, didSend: v35, from: v190 } = txn1;
      
      ;
      const v198 = v190;
      const v199 = v195;
      
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
    tys: [ctc1, ctc0, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193, v194], secs: v196, time: v195, didSend: v35, from: v190 } = txn1;
  ;
  const v197 = stdlib.le(v194, stdlib.checkedBigNumberify('./index.rsh:51:22:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v197, {
    at: './index.rsh:51:10:application',
    fs: [],
    msg: null,
    who: 'Creator'
    });
  let v198 = v190;
  let v199 = v195;
  
  while (await (async () => {
    
    return true;})()) {
    null;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v215], secs: v217, time: v216, didSend: v57, from: v214 } = txn2;
    ;
    const v218 = stdlib.addressEq(v214, v198);
    stdlib.assert(v218, {
      at: './index.rsh:82:12:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v252], secs: v254, time: v253, didSend: v133, from: v251 } = txn3;
    switch (v252[0]) {
      case 'Owner0_59': {
        const v255 = v252[1];
        ;
        const v262 = stdlib.addressEq(v251, v198);
        stdlib.assert(v262, {
          at: './index.rsh:96:18:application',
          fs: [],
          msg: null,
          who: 'Creator'
          });
        const v263 = stdlib.eq(v215, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        stdlib.assert(v263, {
          at: './index.rsh:97:18:application',
          fs: [],
          msg: null,
          who: 'Creator'
          });
        const cv198 = v255;
        const cv199 = v253;
        
        v198 = cv198;
        v199 = cv199;
        
        continue;
        break;
        }
      case 'Owner1_59': {
        const v291 = v252[1];
        ;
        const v301 = stdlib.addressEq(v251, v198);
        stdlib.assert(v301, {
          at: './index.rsh:111:18:application',
          fs: [],
          msg: null,
          who: 'Creator'
          });
        null;
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc3],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v308], secs: v310, time: v309, didSend: v152, from: v307 } = txn4;
        ;
        const v313 = stdlib.mul(v291, v194);
        const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:58:48:decimal', stdlib.UInt_max, '100'));
        ;
        const v321 = stdlib.sub(v291, v314);
        ;
        const cv198 = v308;
        const cv199 = v309;
        
        v198 = cv198;
        v199 = cv199;
        
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Data({
    Owner0_59: ctc3,
    Owner1_59: ctc0
    });
  const ctc5 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193, v194], secs: v196, time: v195, didSend: v35, from: v190 } = txn1;
  ;
  const v197 = stdlib.le(v194, stdlib.checkedBigNumberify('./index.rsh:51:22:decimal', stdlib.UInt_max, '100'));
  stdlib.assert(v197, {
    at: './index.rsh:51:10:application',
    fs: [],
    msg: null,
    who: 'Owner'
    });
  let v198 = v190;
  let v199 = v195;
  
  while (await (async () => {
    
    return true;})()) {
    null;
    const v205 = ctc.selfAddress();
    const v207 = stdlib.addressEq(v205, v198);
    let v208;
    if (v207) {
      const v209 = stdlib.protect(ctc0, await interact.transferOption(), {
        at: './index.rsh:76:74:application',
        fs: ['at ./index.rsh:74:15:application call to [unknown function] (defined at: ./index.rsh:74:19:function exp)'],
        msg: 'transferOption',
        who: 'Owner'
        });
      const v210 = stdlib.mod(v209, stdlib.checkedBigNumberify('./index.rsh:76:80:decimal', stdlib.UInt_max, '2'));
      v208 = v210;
      }
    else {
      v208 = stdlib.checkedBigNumberify('./index.rsh:76:84:decimal', stdlib.UInt_max, '0');
      }
    
    const txn2 = await (ctc.sendrecv({
      args: [v190, v191, v192, v193, v194, v198, v208],
      evt_cnt: 1,
      funcNum: 2,
      lct: v199,
      onlyIf: v207,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:79:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v215], secs: v217, time: v216, didSend: v57, from: v214 } = txn2;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc1, ctc2, ctc0, ctc3, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v215], secs: v217, time: v216, didSend: v57, from: v214 } = txn2;
    ;
    const v218 = stdlib.addressEq(v214, v198);
    stdlib.assert(v218, {
      at: './index.rsh:82:12:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v219 = ctc.selfAddress();
    const v221 = stdlib.addressEq(v219, v198);
    const v222 = stdlib.eq(v215, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v223 = v221 ? v222 : false;
    let v224;
    if (v223) {
      const v225 = stdlib.protect(ctc3, await interact.newOwner(), {
        at: './index.rsh:89:65:application',
        fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:9:function exp)', 'at ./index.rsh:85:9:application call to "runOwner0_59" (defined at: ./index.rsh:86:12:function exp)', 'at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:9:function exp)'],
        msg: 'newOwner',
        who: 'Owner'
        });
      v224 = v225;
      }
    else {
      v224 = v198;
      }
    const v227 = ['Owner0_60', null];
    const v228 = ['Owner0_59', v224];
    let v230;
    if (v223) {
      const v233 = {
        _local: v227,
        msg: v228,
        when: true
        };
      v230 = v233;
      }
    else {
      const v235 = stdlib.eq(v215, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v236 = v221 ? v235 : false;
      let v237;
      if (v236) {
        const v238 = stdlib.protect(ctc0, await interact.salePrice(), {
          at: './index.rsh:104:67:application',
          fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:9:function exp)', 'at ./index.rsh:85:9:application call to "runOwner1_59" (defined at: ./index.rsh:101:12:function exp)', 'at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:9:function exp)'],
          msg: 'salePrice',
          who: 'Owner'
          });
        v237 = v238;
        }
      else {
        v237 = stdlib.checkedBigNumberify('./index.rsh:104:73:decimal', stdlib.UInt_max, '0');
        }
      const v240 = ['Owner1_60', null];
      const v241 = ['Owner1_59', v237];
      const v242 = {
        _local: v240,
        msg: v241,
        when: v236
        };
      v230 = v242;
      }
    const v246 = v230.msg;
    const v247 = v230.when;
    
    const txn3 = await (ctc.sendrecv({
      args: [v190, v191, v192, v193, v194, v198, v215, v246],
      evt_cnt: 1,
      funcNum: 3,
      lct: v216,
      onlyIf: v247,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:86:12:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v252], secs: v254, time: v253, didSend: v133, from: v251 } = txn3;
        
        switch (v252[0]) {
          case 'Owner0_59': {
            const v255 = v252[1];
            ;
            const cv198 = v255;
            const cv199 = v253;
            
            await (async () => {
              const v198 = cv198;
              const v199 = cv199;
              
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
          case 'Owner1_59': {
            const v291 = v252[1];
            ;
            null;
            sim_r.isHalt = false;
            
            break;
            }
          }
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc1, ctc2, ctc0, ctc3, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v252], secs: v254, time: v253, didSend: v133, from: v251 } = txn3;
    switch (v252[0]) {
      case 'Owner0_59': {
        const v255 = v252[1];
        ;
        const v262 = stdlib.addressEq(v251, v198);
        stdlib.assert(v262, {
          at: './index.rsh:96:18:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const v263 = stdlib.eq(v215, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        stdlib.assert(v263, {
          at: './index.rsh:97:18:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const cv198 = v255;
        const cv199 = v253;
        
        v198 = cv198;
        v199 = cv199;
        
        continue;
        break;
        }
      case 'Owner1_59': {
        const v291 = v252[1];
        ;
        const v301 = stdlib.addressEq(v251, v198);
        stdlib.assert(v301, {
          at: './index.rsh:111:18:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        null;
        const v302 = ctc.selfAddress();
        const v304 = stdlib.addressEq(v302, v198);
        const v305 = v304 ? false : true;
        if (v304) {
          }
        else {
          stdlib.protect(ctc5, await interact.buy(v291), {
            at: './index.rsh:119:36:application',
            fs: ['at ./index.rsh:117:21:application call to [unknown function] (defined at: ./index.rsh:117:25:function exp)'],
            msg: 'buy',
            who: 'Owner'
            });
          }
        
        const txn4 = await (ctc.sendrecv({
          args: [v190, v191, v192, v193, v194, v198, v291, v302],
          evt_cnt: 1,
          funcNum: 4,
          lct: v253,
          onlyIf: v305,
          out_tys: [ctc3],
          pay: [v291, []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v308], secs: v310, time: v309, didSend: v152, from: v307 } = txn4;
            
            sim_r.txns.push({
              amt: v291,
              kind: 'to',
              tok: undefined /* Nothing */
              });
            const v313 = stdlib.mul(v291, v194);
            const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:58:48:decimal', stdlib.UInt_max, '100'));
            sim_r.txns.push({
              kind: 'from',
              to: v190,
              tok: undefined /* Nothing */
              });
            const v321 = stdlib.sub(v291, v314);
            sim_r.txns.push({
              kind: 'from',
              to: v198,
              tok: undefined /* Nothing */
              });
            const cv198 = v308;
            const cv199 = v309;
            
            await (async () => {
              const v198 = cv198;
              const v199 = cv199;
              
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
          tys: [ctc3, ctc0, ctc1, ctc2, ctc0, ctc3, ctc0, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [v308], secs: v310, time: v309, didSend: v152, from: v307 } = txn4;
        ;
        const v313 = stdlib.mul(v291, v194);
        const v314 = stdlib.div(v313, stdlib.checkedBigNumberify('./index.rsh:58:48:decimal', stdlib.UInt_max, '100'));
        ;
        const v321 = stdlib.sub(v291, v314);
        ;
        const cv198 = v308;
        const cv199 = v309;
        
        v198 = cv198;
        v199 = cv199;
        
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
    pure: [`NFT_id()uint64`, `NFT_name()byte[128]`, `NFT_option()uint64`, `NFT_owner()address`, `NFT_royalty()uint64`, `NFT_url()byte[256]`, `Sell_price()uint64`],
    sigs: [`NFT_id()uint64`, `NFT_name()byte[128]`, `NFT_option()uint64`, `NFT_owner()address`, `NFT_royalty()uint64`, `NFT_url()byte[256]`, `Sell_price()uint64`]
    },
  appApproval: `BiAVAAUEAQMgCIACsAOoAagD0AP9AsmS3YoMyerGzg+R9MzOD4rjvY0PypmE9gTU2a7nBWRbJgYBAAEBAQIBAwAEEHuIviI1ADEYQQWgJwRkSSJbNQEhBls1AjYaABdJQQJrIjUEJTUGSSENDEABLUkhDgxAAJxJIQ8MQABcIQ8SRDQBSSQMQAA2SSMMQAAZIxJEKGQpZFAqZFArZFBJNQNXKIA1B0IFPUgoZClkUCpkUCtkUEk1A1cogDUHQgUmIQQSRChkKWRQKmRQK2RQSTUDVyiANQdCBQwhDhJENAFJJAxAACFJIwxAABIjEkSACAAAAAAAAAABNQdCBOhIIQavNQdCBN8hBBJEIQavNQdCBNNJIRAMQABiIRASRDQBSSQMQAA6SSMMQAAbIxJEKGQpZFAqZFArZFBJNQMhCCEFWDUHQgSfSChkKWRQKmRQK2RQSTUDIQghBVg1B0IEhiEEEkQoZClkUCpkUCtkUEk1AyEIIQVYNQdCBGohDRJENAEjEkQoZClkUCpkUCtkUEk1AyELIQZYNQdCBElJIREMQADFSSESDEAAXCESEkQ0AUkkDEAANkkjDEAAGSMSRChkKWRQKmRQK2RQSTUDVyAINQdCBBBIKGQpZFAqZFArZFBJNQNXIAg1B0ID+SEEEkQoZClkUCpkUCtkUEk1A1cgCDUHQgPfIRESRDQBSSQMQAA6SSMMQAAbIxJEKGQpZFAqZFArZFBJNQMhCSEHWDUHQgOySChkKWRQKmRQK2RQSTUDIQkhB1g1B0IDmSEEEkQoZClkUCpkUCtkUEk1AyEJIQdYNQdCA32BvoflPRJENAFJJAxAADpJIwxAABsjEkQoZClkUCpkUCtkUEk1AyEKIQZYNQdCA01IKGQpZFAqZFArZFBJNQMhCiEGWDUHQgM0IQQSRChkKWRQKmRQK2RQSTUDIQohBlg1B0IDGDYaAhc1BDYaAzYaARdJIQQMQAFpSSQMQACUJBJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDSUlXACA1/yEKWzX+IQtbNf1JNQU1/IAEtwG2hzT8ULA0/YgC3TT9NP4LIRMKNfuxIrIBNPuyCCWyEDT/sgezsSKyATT9NPsJsgglshA0AyEIIQVYsgezNP80AyEFWzQDVyiANAMhCSEHWDT+NPwyBkIB1EgkNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNJSkpXACA1/yEFWzX+VyiANf0hCSEHWDX8IQpbNfshCCEFWDX6STUFNfmABBSRQNQ0+VCwNPkiVUAAJjT5VwEgNfgxADT6EkQ0AyELWyISRDT/NP40/TT8NPs0+DIGQgFUNPklWzX4MQA0+hJEJwWwNP80/hZQNP1QNPxQNPsWUDT6UDT4FlAoSwFXAH9nKUsBV39/ZypLAVf+f2crSwEhDCEUWGdIIzUBMgY1AkIBbkmBAgxAAJxIIQQ0ARJENARJIhJMNAISEUQoZClkUCpkUCtkUEk1A0lKSlcAIDX/IQVbNf5XKIA1/SEJIQdYNfwhCls1+yEIIQVYNfpJNQUXNfmABJdO9xc0+RZQsDEANPoSRDT/NP4WUDT9UDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBIQwhFFhnSCQ1ATIGNQJCAMsiEkSBoI0GiAETIjQBEkQ0BEkiEkw0AhIRREk1BUlKIls1/1cIgDX+gYgBIQdYNf2BiANbNfyABP2wTuw0/xZQNP5QNP1QNPwWULA0/CETDkQxADT/NP40/TT8MQAyBkIAADX/Nf41/TX8Nfs1+jX5JwWwNPk0+hZQNPtQNPxQNP0WUDT+UChLAVcAf2cpSwFXf39nKksBV/5/ZytLASEMgVNYZ0ghBDUBMgY1AkIAGzEZIxJEsSKyASKyCCWyEDIJsgkyCrIHs0IABTEZIhJEJwQ0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSUIMgQSRDEWEkQlQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKJQg1ADgHMgoSRDgQJRJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 4,
  stateSize: 472,
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
                "name": "v191",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v192",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v193",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
                "name": "v191",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T0",
                "name": "v192",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem5",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem6",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem7",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v193",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
                "name": "v215",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_Owner0_59",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Owner1_59",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v252",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
                "name": "v308",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
    "name": "NFT_name",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T0",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "NFT_option",
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
    "name": "NFT_royalty",
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
    "name": "NFT_url",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem5",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem6",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem7",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Sell_price",
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
                "name": "v215",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_Owner0_59",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_Owner1_59",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v252",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
                "name": "v308",
                "type": "address"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
  Bytecode: `0x60806040526040516200277238038062002772833981016040819052620000269162000492565b60008055436003556040517f1f5d7df3bcb91502f295823abe93089a4dc9c6317dd037d5240f1b5c13f51ef19062000062903390849062000551565b60405180910390a1620000783415600e6200018c565b6200009760648260200151606001511115600f6200018c60201b60201c565b6040805160e080820183526000828401818152606080850183905285516080808201885284825260208083018690528289018690528284018690528188019290925287516101008101895285815280830186905280890186905280840186905280820186905260a080820187905260c08083018890529782018790528801529486018490529185528551808701875283815280830193909352818501928352845133908190528783018051518751850152805184015187518901528051909701518651830152955101518451909301929092528051939093529151439201919091526200018481620001b6565b505062000721565b81620001b25760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040517fb88880118720dfb8ef1dc51508bd0b32b4b91d6984afc2e54b3c6845b2f557ce90600090a16040805160c08082018352600080835260208084018281528551608080820188528482528184018590528188018590526060808301869052878901928352885161010081018a52868152808601879052808a0187905280820187905280830187905260a080820188905297810187905260e081018790528189019081528289018781529789018781528b51516001600160a01b039081168b528c518801519096528b518b01519094528a5190910151905288510151909452868201515116909252600390554360015591519091620002ba918391016200061e565b60405160208183030381529060405260029080519060200190620002e0929190620002e5565b505050565b828054620002f390620006e4565b90600052602060002090601f01602090048101928262000317576000855562000362565b82601f106200033257805160ff191683800117855562000362565b8280016001018555821562000362579182015b828111156200036257825182559160200191906001019062000345565b506200037092915062000374565b5090565b5b8082111562000370576000815560010162000375565b604080519081016001600160401b0381118282101715620003bc57634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620003bc57634e487b7160e01b600052604160045260246000fd5b60006101008083850312156200040857600080fd5b604051908101906001600160401b03821181831017156200043957634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60008183036101e0811215620004a757600080fd5b620004b16200038b565b835181526101c080601f1984011215620004ca57600080fd5b620004d4620003c2565b602086015181526080603f1985011215620004ee57600080fd5b620004f8620003c2565b935060408601518452606086015160208501526080860151604085015260a08601516060850152836020820152620005348760c08801620003f3565b604082015294015160608501526020810193909352509092915050565b6001600160a01b0383168152815160208083019190915280830151805160408401529081015161020083019190620005ad6060850182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408101516200060a60e0850182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b5060608101516101e0840152509392505050565b81516001600160a01b039081168252602080840151818401526040808501518051828601529182015160608086019190915290820151608085015281015160a084015261020083019190506060840151620006c560c0850182805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b5060808401516101c084015260a0909301519092166101e09091015290565b600181811c90821680620006f957607f821691505b602082108114156200071b57634e487b7160e01b600052602260045260246000fd5b50919050565b61204180620007316000396000f3fe6080604052600436106100bd5760003560e01c806345f7039611610079578063ab53f2c611610056578063ab53f2c6146101b5578063b63b3d57146101d8578063cee028c0146101fa578063e3a83d791461020f57005b806345f70396146101605780635cf275dd1461017357806383230757146101a057005b806304890603146100c6578063192bebac146100ee5780631e93b0f114610101578063239020111461011657806324282dc31461012b578063428205c31461013e57005b366100c457005b005b3480156100d257600080fd5b506100db610224565b6040519081526020015b60405180910390f35b6100c46100fc36600461198d565b6103af565b34801561010d57600080fd5b506003546100db565b34801561012257600080fd5b506100db610607565b6100c46101393660046119b0565b61078f565b34801561014a57600080fd5b50610153610abb565b6040516100e591906119c2565b6100c461016e36600461198d565b610c63565b34801561017f57600080fd5b50610188610e3b565b6040516001600160a01b0390911681526020016100e5565b3480156101ac57600080fd5b506001546100db565b3480156101c157600080fd5b506101ca610fc3565b6040516100e59291906119ef565b3480156101e457600080fd5b506101ed611060565b6040516100e59190611a9a565b34801561020657600080fd5b506100db6111ee565b34801561021b57600080fd5b506100db61140f565b6000600360005414156102db5760006002805461024090611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461026c90611aa9565b80156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b50505050508060200190518101906102d19190611c08565b6020015192915050565b60046000541415610386576000600280546102f590611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461032190611aa9565b801561036e5780601f106103435761010080835404028352916020019161036e565b820191906000526020600020905b81548152906001019060200180831161035157829003601f168201915b50505050508060200190518101906102d19190611d6a565b600560005414156103a0576000600280546102f590611aa9565b6103ac60006007611644565b90565b6103bf600560005414601c611644565b6103d9813515806103d257506001548235145b601d611644565b6000808055600280546103eb90611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461041790611aa9565b80156104645780601f1061043957610100808354040283529160200191610464565b820191906000526020600020905b81548152906001019060200180831161044757829003601f168201915b505050505080602001905181019061047c9190611d6a565b90506104946040518060200160405280600081525090565b7f7f0349471693910a3483f52c74bdb82b47c51d664ba33067e7840f3e6350441f33846040516104c5929190611d87565b60405180910390a16104de8260c001513414601b611644565b606482608001518360c001516104f49190611dd8565b6104fe9190611df7565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610538573d6000803e3d6000fd5b508160a001516001600160a01b03166108fc82600001518460c0015161055e9190611e19565b6040518115909202916000818181858888f19350505050158015610586573d6000803e3d6000fd5b5061058f611726565b825181516001600160a01b039091169052602080840151825182015260408085015183518201526060808601518451909101526080808601518451909101526105dd91908601908601611e30565b602080830180516001600160a01b039093169092529051439101526106018161166d565b50505050565b6000600360005414156106be5760006002805461062390611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461064f90611aa9565b801561069c5780601f106106715761010080835404028352916020019161069c565b820191906000526020600020905b81548152906001019060200180831161067f57829003601f168201915b50505050508060200190518101906106b49190611c08565b6080015192915050565b60046000541415610769576000600280546106d890611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461070490611aa9565b80156107515780601f1061072657610100808354040283529160200191610751565b820191906000526020600020905b81548152906001019060200180831161073457829003601f168201915b50505050508060200190518101906106b49190611d6a565b60056000541415610783576000600280546106d890611aa9565b6103ac6000600b611644565b61079f6004600054146019611644565b6107b9813515806107b257506001548235145b601a611644565b6000808055600280546107cb90611aa9565b80601f01602080910402602001604051908101604052809291908181526020018280546107f790611aa9565b80156108445780601f1061081957610100808354040283529160200191610844565b820191906000526020600020905b81548152906001019060200180831161082757829003601f168201915b505050505080602001905181019061085c9190611d6a565b60408051808201909152600080825260208201529091507f2b2fb1806a856ce3b32d01521e786d8104da2988f2454d3b16f81f7df73bebd233846040516108a4929190611e77565b60405180910390a160006108be6040850160208601611eee565b60018111156108cf576108cf611e61565b1415610995576108e56060840160408501611e30565b6001600160a01b031681526108fc34156014611644565b61091f8260a001516001600160a01b0316336001600160a01b0316146015611644565b61093160008360c00151146016611644565b610939611726565b825181516001600160a01b0391821690526020808501518351820152604080860151845190910152606080860151845190910152608080860151845190910152835181840180519190931690529051439101526106018161166d565b60016109a76040850160208601611eee565b60018111156109b8576109b8611e61565b1415610ab657606083013560208201526109d434156017611644565b6109f78260a001516001600160a01b0316336001600160a01b0316146018611644565b6040517fb88880118720dfb8ef1dc51508bd0b32b4b91d6984afc2e54b3c6845b2f557ce90600090a1610a28611769565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151908501526080808701519085015260a080870151909316928401929092528381015160c08401526005600055436001559051610a8f91839101611f82565b60405160208183030381529060405260029080519060200190610ab39291906117db565b50505b505050565b6040805160808101825260008082526020820181905291810182905260608101829052905460031415610b9257600060028054610af790611aa9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2390611aa9565b8015610b705780601f10610b4557610100808354040283529160200191610b70565b820191906000526020600020905b815481529060010190602001808311610b5357829003601f168201915b5050505050806020019051810190610b889190611c08565b6040015192915050565b60046000541415610c3d57600060028054610bac90611aa9565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd890611aa9565b8015610c255780601f10610bfa57610100808354040283529160200191610c25565b820191906000526020600020905b815481529060010190602001808311610c0857829003601f168201915b5050505050806020019051810190610b889190611d6a565b60056000541415610c5757600060028054610bac90611aa9565b6103ac60006008611644565b610c736003600054146012611644565b610c8d81351580610c8657506001548235145b6013611644565b600080805560028054610c9f90611aa9565b80601f0160208091040260200160405190810160405280929190818152602001828054610ccb90611aa9565b8015610d185780601f10610ced57610100808354040283529160200191610d18565b820191906000526020600020905b815481529060010190602001808311610cfb57829003601f168201915b5050505050806020019051810190610d309190611c08565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a1610d8534156010611644565b610da88160a001516001600160a01b0316336001600160a01b0316146011611644565b610db0611769565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151908501526080808601519085015260a080860151909316928401929092528481013560c08401526004600055436001559051610e1791839101611f82565b604051602081830303815290604052600290805190602001906106019291906117db565b600060036000541415610ef257600060028054610e5790611aa9565b80601f0160208091040260200160405190810160405280929190818152602001828054610e8390611aa9565b8015610ed05780601f10610ea557610100808354040283529160200191610ed0565b820191906000526020600020905b815481529060010190602001808311610eb357829003601f168201915b5050505050806020019051810190610ee89190611c08565b60a0015192915050565b60046000541415610f9d57600060028054610f0c90611aa9565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3890611aa9565b8015610f855780601f10610f5a57610100808354040283529160200191610f85565b820191906000526020600020905b815481529060010190602001808311610f6857829003601f168201915b5050505050806020019051810190610ee89190611d6a565b60056000541415610fb757600060028054610f0c90611aa9565b6103ac6000600a611644565b600060606000546002808054610fd890611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461100490611aa9565b80156110515780601f1061102657610100808354040283529160200191611051565b820191906000526020600020905b81548152906001019060200180831161103457829003601f168201915b50505050509050915091509091565b61106861185f565b6003600054141561111d5760006002805461108290611aa9565b80601f01602080910402602001604051908101604052809291908181526020018280546110ae90611aa9565b80156110fb5780601f106110d0576101008083540402835291602001916110fb565b820191906000526020600020905b8154815290600101906020018083116110de57829003601f168201915b50505050508060200190518101906111139190611c08565b6060015192915050565b600460005414156111c85760006002805461113790611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461116390611aa9565b80156111b05780601f10611185576101008083540402835291602001916111b0565b820191906000526020600020905b81548152906001019060200180831161119357829003601f168201915b50505050508060200190518101906111139190611d6a565b600560005414156111e25760006002805461113790611aa9565b6103ac6000600c611644565b6000600360005414156112a45760006002805461120a90611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461123690611aa9565b80156112835780601f1061125857610100808354040283529160200191611283565b820191906000526020600020905b81548152906001019060200180831161126657829003601f168201915b505050505080602001905181019061129b9190611c08565b50600092915050565b6004600054141561134f576000600280546112be90611aa9565b80601f01602080910402602001604051908101604052809291908181526020018280546112ea90611aa9565b80156113375780601f1061130c57610100808354040283529160200191611337565b820191906000526020600020905b81548152906001019060200180831161131a57829003601f168201915b505050505080602001905181019061129b9190611d6a565b600560005414156114035760006002805461136990611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461139590611aa9565b80156113e25780601f106113b7576101008083540402835291602001916113e2565b820191906000526020600020905b8154815290600101906020018083116113c557829003601f168201915b50505050508060200190518101906113fa9190611d6a565b50600192915050565b6103ac60006009611644565b6000600360005414156114cc5760006002805461142b90611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461145790611aa9565b80156114a45780601f10611479576101008083540402835291602001916114a4565b820191906000526020600020905b81548152906001019060200180831161148757829003601f168201915b50505050508060200190518101906114bc9190611c08565b90506114ca6000600d611644565b505b60046000541415611587576000600280546114e690611aa9565b80601f016020809104026020016040519081016040528092919081815260200182805461151290611aa9565b801561155f5780601f106115345761010080835404028352916020019161155f565b820191906000526020600020905b81548152906001019060200180831161154257829003601f168201915b50505050508060200190518101906115779190611d6a565b90506115856000600d611644565b505b6005600054141561163c576000600280546115a190611aa9565b80601f01602080910402602001604051908101604052809291908181526020018280546115cd90611aa9565b801561161a5780601f106115ef5761010080835404028352916020019161161a565b820191906000526020600020905b8154815290600101906020018083116115fd57829003601f168201915b50505050508060200190518101906116329190611d6a565b60c0015192915050565b6103ac6000600d5b816116695760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040517fb88880118720dfb8ef1dc51508bd0b32b4b91d6984afc2e54b3c6845b2f557ce90600090a161169e6118a3565b8151516001600160a01b039081168252825160209081015181840152835160409081015181850152845160609081015190850152845160809081015190850152818501515190921660a0840152600360005543600155905161170291839101611f91565b60405160208183030381529060405260029080519060200190610ab69291906117db565b6040518060400160405280611739611905565b8152602001611764604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b6040805160e081018252600080825260208201529081016117aa60408051608081018252600080825260208201819052918101829052606081019190915290565b81526020016117b761185f565b81526020016000815260200160006001600160a01b03168152602001600081525090565b8280546117e790611aa9565b90600052602060002090601f016020900481019282611809576000855561184f565b82601f1061182257805160ff191683800117855561184f565b8280016001018555821561184f579182015b8281111561184f578251825591602001919060010190611834565b5061185b929150611960565b5090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040805160c081018252600080825260208201529081016118e460408051608081018252600080825260208201819052918101829052606081019190915290565b81526020016118f161185f565b815260006020820181905260409091015290565b6040805160a0810182526000808252602082015290810161194660408051608081018252600080825260208201819052918101829052606081019190915290565b815260200161195361185f565b8152602001600081525090565b5b8082111561185b5760008155600101611961565b60006040828403121561198757600080fd5b50919050565b60006040828403121561199f57600080fd5b6119a98383611975565b9392505050565b60006080828403121561198757600080fd5b81518152602080830151908201526040808301519082015260608083015190820152608081015b92915050565b82815260006020604081840152835180604085015260005b81811015611a2357858101830151858201606001528201611a07565b81811115611a35576000606083870101525b50601f01601f191692909201606001949350505050565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b61010081016119e98284611a4c565b600181811c90821680611abd57607f821691505b6020821081141561198757634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114611af357600080fd5b50565b600060808284031215611b0857600080fd5b6040516080810181811067ffffffffffffffff82111715611b3957634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b6000610100808385031215611b7e57600080fd5b6040519081019067ffffffffffffffff82118183101715611baf57634e487b7160e01b600052604160045260246000fd5b81604052809250835181526020840151602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152505092915050565b60006102008284031215611c1b57600080fd5b60405160c0810181811067ffffffffffffffff82111715611c4c57634e487b7160e01b600052604160045260246000fd5b6040528251611c5a81611ade565b815260208381015190820152611c738460408501611af6565b6040820152611c858460c08501611b6a565b60608201526101c083015160808201526101e0830151611ca481611ade565b60a08201529392505050565b60006102208284031215611cc357600080fd5b60405160e0810181811067ffffffffffffffff82111715611cf457634e487b7160e01b600052604160045260246000fd5b80604052508091508251611d0781611ade565b815260208381015190820152611d208460408501611af6565b6040820152611d328460c08501611b6a565b60608201526101c083015160808201526101e0830151611d5181611ade565b8060a08301525061020083015160c08201525092915050565b60006102208284031215611d7d57600080fd5b6119a98383611cb0565b6001600160a01b0383811682528235602080840191909152606083019190840135611db181611ade565b818116604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611df257611df2611dc2565b500290565b600082611e1457634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611e2b57611e2b611dc2565b500390565b600060208284031215611e4257600080fd5b81356119a981611ade565b803560028110611e5c57600080fd5b919050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b038381168252823560208084019190915260a083019190611ea0908501611e4d565b60028110611ebe57634e487b7160e01b600052602160045260246000fd5b806040850152506040840135611ed381611ade565b81811660608501525050606083013560808301529392505050565b600060208284031215611f0057600080fd5b6119a982611e4d565b80516001600160a01b03908116835260208083015181850152604080840151805182870152918201516060808701919091529082015160808601529081015160a0850152820151611f5d60c0850182611a4c565b5060808201516101c084015260a0820151166101e083015260c0015161020090910152565b61022081016119e98284611f09565b81516001600160a01b03908116825260208084015181840152604080850151805182860152918201516060808601919091529082015160808501529081015160a084015283015161020083019190611fec60c0850182611a4c565b5060808401516101c084015260a0909301519092166101e0909101529056fea2646970667358221220dee7c3bb9464c68399ef3b7477e5524f4ded0317305deefe2a8c91bcac5730ae64736f6c634300080c0033`,
  BytecodeLen: 10098,
  Which: `oD`,
  version: 7,
  views: {
    NFT: {
      id: `NFT_id`,
      name: `NFT_name`,
      option: `NFT_option`,
      owner: `NFT_owner`,
      royalty: `NFT_royalty`,
      url: `NFT_url`
      },
    Sell: {
      price: `Sell_price`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:133:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:72:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:115:19:after expr stmt semicolon',
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
