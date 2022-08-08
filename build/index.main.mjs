// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
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
  
  return {
    infos: {
      NFT: {
        id: {
          decode: async (i, svs, args) => {
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
            },
          ty: ctc1
          },
        owner: {
          decode: async (i, svs, args) => {
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
            },
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
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                    "internalType": "enum _enum_T10",
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
                "internalType": "struct T10",
                "name": "v244",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                    "internalType": "enum _enum_T10",
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
                "internalType": "struct T10",
                "name": "v244",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
  Bytecode: `0x608060405260405162001604380380620016048339810160408190526200002691620002f5565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600962000126565b620000aa60648260200151602001511115600a6200012660201b60201c565b6040805160a08101825260008183018181526060830182905260808301829052825282518084019093528083526020808401919091528101919091528051339081905260208084018051518451830152518101518351604001528083018051929092529051439101526200011e8162000150565b505062000392565b816200014c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040517fb88880118720dfb8ef1dc51508bd0b32b4b91d6984afc2e54b3c6845b2f557ce90600090a160408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b5187015186528b518b015185528b87015151821683526003909755436001558951808701979097529351868a01529151908501525116828401528451808303909301835260a09091019093528051919262000213926002929091019062000218565b505050565b828054620002269062000355565b90600052602060002090601f0160209004810192826200024a576000855562000295565b82601f106200026557805160ff191683800117855562000295565b8280016001018555821562000295579182015b828111156200029557825182559160200191906001019062000278565b50620002a3929150620002a7565b5090565b5b80821115620002a35760008155600101620002a8565b604080519081016001600160401b0381118282101715620002ef57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200030957600080fd5b62000313620002be565b835181526040601f19830112156200032a57600080fd5b62000334620002be565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200036a57607f821691505b602082108114156200038c57634e487b7160e01b600052602260045260246000fd5b50919050565b61126280620003a26000396000f3fe6080604052600436106100795760003560e01c806345f703961161004b57806345f70396146100e55780635cf275dd146100f85780638323075714610125578063ab53f2c61461013a57005b80630489060314610082578063192bebac146100aa5780631e93b0f1146100bd57806324282dc3146100d257005b3661008057005b005b34801561008e57600080fd5b5061009761015d565b6040519081526020015b60405180910390f35b6100806100b8366004610e57565b6102e8565b3480156100c957600080fd5b50600354610097565b6100806100e0366004610e7a565b610557565b6100806100f3366004610e57565b61089b565b34801561010457600080fd5b5061010d610a9b565b6040516001600160a01b0390911681526020016100a1565b34801561013157600080fd5b50600154610097565b34801561014657600080fd5b5061014f610c23565b6040516100a1929190610e8c565b6000600360005414156102145760006002805461017990610ee9565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610ee9565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610f36565b6020015192915050565b600460005414156102bf5760006002805461022e90610ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461025a90610ee9565b80156102a75780601f1061027c576101008083540402835291602001916102a7565b820191906000526020600020905b81548152906001019060200180831161028a57829003601f168201915b505050505080602001905181019061020a919061104b565b600560005414156102d95760006002805461022e90610ee9565b6102e560006007610cc0565b90565b6102f86005600054146017610cc0565b6103128135158061030b57506001548235145b6018610cc0565b60008080556002805461032490610ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461035090610ee9565b801561039d5780601f106103725761010080835404028352916020019161039d565b820191906000526020600020905b81548152906001019060200180831161038057829003601f168201915b50505050508060200190518101906103b5919061104b565b90506103cd6040518060200160405280600081525090565b7f7f0349471693910a3483f52c74bdb82b47c51d664ba33067e7840f3e6350441f33846040516103fe929190611067565b60405180910390a1610417826080015134146016610cc0565b60648260400151836080015161042d91906110b8565b61043791906110d7565b80825282516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610471573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc8260000151846080015161049791906110f9565b6040518115909202916000818181858888f193505050501580156104bf573d6000803e3d6000fd5b506040805160a0810182526000818301818152606083018290526080830182905282528251808401845281815260208082019290925281830152845182516001600160a01b039091169052848101518251820152848301518251840152909161052d91908601908601611110565b602080830180516001600160a01b0390931690925290514391015261055181610ce9565b50505050565b6105676004600054146014610cc0565b6105818135158061057a57506001548235145b6015610cc0565b60008080556002805461059390610ee9565b80601f01602080910402602001604051908101604052809291908181526020018280546105bf90610ee9565b801561060c5780601f106105e15761010080835404028352916020019161060c565b820191906000526020600020905b8154815290600101906020018083116105ef57829003601f168201915b5050505050806020019051810190610624919061104b565b60408051808201909152600080825260208201529091507f2b2fb1806a856ce3b32d01521e786d8104da2988f2454d3b16f81f7df73bebd2338460405161066c929190611157565b60405180910390a1600061068660408501602086016111ce565b600181111561069757610697611141565b1415610776576106ad6060840160408501611110565b6001600160a01b031681526106c43415600f610cc0565b6106e782606001516001600160a01b0316336001600160a01b0316146010610cc0565b6106f960008360800151146011610cc0565b6040805160a08101825260008183018181526060830182905260808301829052825282518084018452818152602080820192909252818301908152855183516001600160a01b0391821690528683015184518401528685015184519095019490945284518151941690935291514392019190915261055181610ce9565b600161078860408501602086016111ce565b600181111561079957610799611141565b141561089657606083013560208201526107b534156012610cc0565b6107d882606001516001600160a01b0316336001600160a01b0316146013610cc0565b61081c6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b82516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252838101516080840152600560005543600155905161086f918391016111e9565b60405160208183030381529060405260029080519060200190610893929190610da6565b50505b505050565b6108ab600360005414600d610cc0565b6108c5813515806108be57506001548235145b600e610cc0565b6000808055600280546108d790610ee9565b80601f016020809104026020016040519081016040528092919081815260200182805461090390610ee9565b80156109505780601f1061092557610100808354040283529160200191610950565b820191906000526020600020905b81548152906001019060200180831161093357829003601f168201915b50505050508060200190518101906109689190610f36565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16109bd3415600b610cc0565b6109e081606001516001600160a01b0316336001600160a01b031614600c610cc0565b610a246040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092528481013560808401526004600055436001559051610a77918391016111e9565b60405160208183030381529060405260029080519060200190610551929190610da6565b600060036000541415610b5257600060028054610ab790610ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae390610ee9565b8015610b305780601f10610b0557610100808354040283529160200191610b30565b820191906000526020600020905b815481529060010190602001808311610b1357829003601f168201915b5050505050806020019051810190610b489190610f36565b6060015192915050565b60046000541415610bfd57600060028054610b6c90610ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9890610ee9565b8015610be55780601f10610bba57610100808354040283529160200191610be5565b820191906000526020600020905b815481529060010190602001808311610bc857829003601f168201915b5050505050806020019051810190610b48919061104b565b60056000541415610c1757600060028054610b6c90610ee9565b6102e560006008610cc0565b600060606000546002808054610c3890610ee9565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6490610ee9565b8015610cb15780601f10610c8657610100808354040283529160200191610cb1565b820191906000526020600020905b815481529060010190602001808311610c9457829003601f168201915b50505050509050915091509091565b81610ce55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040517fb88880118720dfb8ef1dc51508bd0b32b4b91d6984afc2e54b3c6845b2f557ce90600090a160408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b5187015186528b518b015185528b87015151821683526003909755436001558951808701979097529351868a01529151908501525116828401528451808303909301835260a09091019093528051919261089692600292909101905b828054610db290610ee9565b90600052602060002090601f016020900481019282610dd45760008555610e1a565b82601f10610ded57805160ff1916838001178555610e1a565b82800160010185558215610e1a579182015b82811115610e1a578251825591602001919060010190610dff565b50610e26929150610e2a565b5090565b5b80821115610e265760008155600101610e2b565b600060408284031215610e5157600080fd5b50919050565b600060408284031215610e6957600080fd5b610e738383610e3f565b9392505050565b600060808284031215610e5157600080fd5b82815260006020604081840152835180604085015260005b81811015610ec057858101830151858201606001528201610ea4565b81811115610ed2576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610efd57607f821691505b60208210811415610e5157634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610f3357600080fd5b50565b600060808284031215610f4857600080fd5b6040516080810181811067ffffffffffffffff82111715610f7957634e487b7160e01b600052604160045260246000fd5b6040528251610f8781610f1e565b8082525060208301516020820152604083015160408201526060830151610fad81610f1e565b60608201529392505050565b600060a08284031215610fcb57600080fd5b60405160a0810181811067ffffffffffffffff82111715610ffc57634e487b7160e01b600052604160045260246000fd5b8060405250809150825161100f81610f1e565b808252506020830151602082015260408301516040820152606083015161103581610f1e565b6060820152608092830151920191909152919050565b600060a0828403121561105d57600080fd5b610e738383610fb9565b6001600160a01b038381168252823560208084019190915260608301919084013561109181610f1e565b818116604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156110d2576110d26110a2565b500290565b6000826110f457634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561110b5761110b6110a2565b500390565b60006020828403121561112257600080fd5b8135610e7381610f1e565b80356002811061113c57600080fd5b919050565b634e487b7160e01b600052602160045260246000fd5b6001600160a01b038381168252823560208084019190915260a08301919061118090850161112d565b6002811061119e57634e487b7160e01b600052602160045260246000fd5b8060408501525060408401356111b381610f1e565b81811660608501525050606083013560808301529392505050565b6000602082840312156111e057600080fd5b610e738261112d565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a0019056fea2646970667358221220f5f33353de320b4dbbdc00e0c856a3628da205489ca4434f8d6e2ace9b2947f264736f6c634300080c0033`,
  BytecodeLen: 5636,
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
