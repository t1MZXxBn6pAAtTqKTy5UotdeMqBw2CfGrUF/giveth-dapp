import { GivethBridge, ForeignGivethBridge } from 'giveth-bridge';

import { getWeb3 } from './getWeb3';
import config from '../../configuration';

let network;

export default () => {
  if (network) return Promise.resolve(network);

  return getWeb3().then(web3 => {
    network = Object.assign({}, config);
    network.givethBridge = new GivethBridge(web3, network.givethBridgeAddress);
    network.foreignGivethBridge = new ForeignGivethBridge(web3, network.foreignGivethBridgeAddress);

    return network;
  });
};
