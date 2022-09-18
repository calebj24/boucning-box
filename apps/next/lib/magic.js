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
      locale: "en_US",
      network: customNodeOptions,
      extensions: [new OAuthExtension()]  
    })
  );
};



export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
