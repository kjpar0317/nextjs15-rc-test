import { ThemeProvider } from "@/components/provider/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <div className="font-sans w-full h-[calc(100vh_-_100px)]">
        <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center justify-center w-full h-full">
          {children}
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
