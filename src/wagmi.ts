'use client';

import '@rainbow-me/rainbowkit/styles.css';
import {
   metaMaskWallet,
   coinbaseWallet,
   walletConnectWallet,
   trustWallet,
   phantomWallet,
 } from '@rainbow-me/rainbowkit/wallets';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { http, createStorage, cookieStorage } from 'wagmi';
import {  arbitrum, optimism, bsc ,mainnet } from 'wagmi/chains';
import { Chain } from '@rainbow-me/rainbowkit';
import { createConfig } from 'wagmi';

const projectId = "8828c41916158084bcec99ca8b8df215";

const connectors = connectorsForWallets(
   [
     {
       groupName: 'Suggested',
       wallets: [
         metaMaskWallet,
         coinbaseWallet,
         trustWallet,
         phantomWallet,
         walletConnectWallet,
       ],
     },
   ],
   { appName: 'swissp2p', projectId: projectId }
 );

const supportedChains: Chain[] = [ arbitrum, optimism, bsc, mainnet ];

export const config = createConfig({
   connectors,
   chains: supportedChains as any,
   ssr: true,
   storage: createStorage({
    storage: cookieStorage,
   }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {})
 });
