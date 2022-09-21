import { Magic } from 'magic-sdk';
import { OAuthExtension } from '@magic-ext/oauth';

const customNodeOptions = {
  rpcUrl: 'https://rpc-mainnet.maticvigil.com/',
  chainId: 137,
}

// Create client-side Magic instance
const createMagic = (key) => {
  return (
    typeof window != 'undefined' &&
    new Magic(key, {
        extensions: [new OAuthExtension()]
    })
  );
};



export const magic = createMagic("pk_live_73AAE8A5F81B1CF3");
