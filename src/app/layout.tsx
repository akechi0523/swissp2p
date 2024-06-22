"use client";

import "@/css/poppins.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader/index";
import { TransactionProvider } from "@/context/TransactionContext";
import { Providers } from "@/context/WalletProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
          <TransactionProvider>
            <Providers>
              <div className="dark:bg-bodydark dark:text-bodydark duration-300 ease-linear">
                {loading ? <Loader /> : children}
              </div>
            </Providers>
          </TransactionProvider>

      </body>
    </html>
  );
}
