"use client";

import { SWRConfig } from "swr";

import { cn } from "@/lib/utils";
import useCommon from "@/service/useCommon";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Navigation from "@/components/layouts/sidebar/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpenSidebar } = useCommon();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateIfStale: false,
        }}
      >
        <div className="flex flex-row w-full h-full">
          <div className={cn("", isOpenSidebar ? "w-[250px]" : "w-[100px]")}>
            <Navigation />
          </div>
          <div
            className={cn(
              "flex flex-col h-full",
              isOpenSidebar
                ? "w-[calc(100%_-_250px)]"
                : "w-[calc(100%_-_100px)]"
            )}
          >
            <Header />
            <main className="font-sans w-full h-full item-center justify-center align-middle gap-8 p-4 overflow-y-auto">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </SWRConfig>
    </ThemeProvider>
  );
}
