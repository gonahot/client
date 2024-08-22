'use client';
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import {
  TESTNET_COUNTER_PACKAGE_ID,
} from "./constant";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mysten/dapp-kit/dist/index.css';
import { PetDataProvider } from "./context/PetDataContext";


// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
  testnet: {
    url: getFullnodeUrl("testnet"),
    variables: {
      counterPackageId: TESTNET_COUNTER_PACKAGE_ID,
    },
  },
});
const queryClient = new QueryClient();



const myFont = localFont({
  src: '../public/fonts/myfont.ttf',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider>
          <PetDataProvider>
          <html lang="en">
            <body className={myFont.className}>
              <main>
                {children}
              </main>
            </body>
          </html>
          </PetDataProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>

  );
}
