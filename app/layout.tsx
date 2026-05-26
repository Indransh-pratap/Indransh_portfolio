import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/footer";


import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Indransh Pratap | Software Engineer",
  description: "Building scalable web products, solving problems with DSA and exploring security-focused solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
          <Toaster/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
