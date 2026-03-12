import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandCenter } from "@/components/command-center";
import { MobileFAB } from "@/components/mobile-fab";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fadidev-studio.vercel.app"),
  title: {
    default: "Abdul Fadiga | UI/UX-Focused Full-Stack Developer",
    template: "%s | Abdul Fadiga",
  },
  description:
    "Abdul Fadiga is a UI/UX-focused full-stack developer and product engineer building scalable, user-centered web products. Lead at SEED and GDG On Campus.",
  keywords: [
    "Abdul Fadiga",
    "FadidevStudio",
    "Abdul Fadiga Developer",
    "UI/UX Engineer",
    "Full-Stack Developer Cameroon",
    "Product-focused web developer",
    "Frontend Engineering",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Web Developer Lead SEED",
    "GDG On Campus Bambili",
    "Modern web applications",
    "SaaS design and development",
  ],
  authors: [{ name: "Abdul Fadiga" }],
  creator: "Abdul Fadiga",
  publisher: "FadidevStudio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Abdul Fadiga | UI/UX-Focused Full-Stack Developer",
    description: "UI/UX-focused full-stack developer building scalable, user-centered web products.",
    url: "https://fadidev-studio.vercel.app",
    siteName: "FadidevStudio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Fadiga | UI/UX-Focused Full-Stack Developer",
    description: "UI/UX-focused full-stack developer building scalable, user-centered web products.",
    creator: "@fadidev",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

import { LenisProvider } from "@/components/lenis-provider";

import { CustomCursor } from "@/components/custom-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Abdul Fadiga",
              "url": "https://fadidev-studio.vercel.app",
              "jobTitle": "UI/UX Engineer & Full-Stack Developer",
              "sameAs": [
                "https://github.com/fadigatardzenyuy",
                "https://www.linkedin.com/in/abdul-fadiga-775a5a284/",
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "SEED"
                },
                {
                  "@type": "Organization",
                  "name": "GDG On Campus Bambili"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <CustomCursor />
            <div className="aurora-bg">
              <div className="aurora-mesh" />
            </div>
            <div className="noise-overlay" />
            <CommandCenter />
            {children}
            <MobileFAB />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
