import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/layout/footer";


import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  metadataBase: new URL("https://indransh.vercel.app"),

  title: {
    default: "Indransh Pratap | Software Engineer",
    template: "%s | Indransh Pratap",
  },

  description:
    "Software Engineer, MERN Developer and DSA enthusiast building scalable products and security focused solutions.",

  keywords: [
    "Indransh Pratap",
    "Software Engineer",
    "MERN Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Portfolio",
    "DSA",
    "Cyber Security",
  ],

  authors: [
    {
      name: "Indransh Pratap",
    },
  ],

  creator: "Indransh Pratap",

  openGraph: {
    title: "Indransh Pratap | Software Engineer",

    description:
      "Portfolio of Indransh Pratap - MERN Developer and problem solver.",

    url: "https://indransh.vercel.app",

    siteName: "Indransh Portfolio",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title: "Indransh Pratap | Software Engineer",

    description: "Portfolio of Indransh Pratap",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Indransh Pratap",
    url: "https://indransh.vercel.app",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/indransh-pratap",
      "https://linkedin.com/in/indransh-pratap-947489375/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
