'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { cssStringFromTheme } from '@rainbow-me/rainbowkit';

import { config } from '@/wagmi';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <RainbowKitProvider theme={null} modalSize='compact'>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              ${cssStringFromTheme(lightTheme)}
            }

            .dark {
              ${cssStringFromTheme(darkTheme, {
                extends: lightTheme,
              })}
            }
          `,
        }}
      />{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}