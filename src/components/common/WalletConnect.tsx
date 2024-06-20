"use client";

import { useEffect, useRef } from "react";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";

const middleEllipsis = (str: string, len: number) => {
  if (!str) {
    return '';
  }

  return `${str.substring(0, len)}...${str.substring(str.length - len, str.length)}`;
};

export const WalletConnect = () => {
  const { isConnecting, address, isConnected, chain } = useAccount();

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  const { disconnect } = useDisconnect();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  if (!isConnected) {
    return (
      <button
        className="rounded-full md:block hidden text-base text-white bg-primary dark:bg-secondary px-4 py-2"
        onClick={async () => {
          // Disconnecting wallet first because sometimes when is connected but the user is not connected
          if (isConnected) {
            disconnect();
          }
          openConnectModal?.();
        }}
        disabled={isConnecting}
      >
        { isConnecting ? 'Connecting...' : 'Connect Wallet' }
      </button>
    );
  }

  if (isConnected && !chain) {
    return (
      <button className="rounded-full md:block hidden text-base text-white bg-primary dark:bg-secondary px-4 py-2" onClick={openChainModal}>
        Wrong network
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between md:block hidden">
      <button
        className="rounded-full text-base text-white bg-primary dark:bg-secondary px-4 py-2"
        onClick={async () => openAccountModal?.()}
      >
        <p>{middleEllipsis(address as string, 4)}</p>
      </button>
      {/* <button className="rounded-full md:block hidden text-base text-white bg-primary dark:bg-secondary px-4 py-2" onClick={openChainModal}>
        Chain
      </button> */}
    </div>
  );
};