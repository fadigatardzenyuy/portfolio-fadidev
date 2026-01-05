import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fadidev-studio.vercel.app"),
  title: {
    default: "FadidevStudio – UI/UX-Focused Full-Stack Developer",
    template: "%s | FadidevStudio",
  },
  description:
    "UI/UX-focused full-stack developer building scalable, user-centered web products. Web Developer Lead at SEED and Frontend Co-Lead at GDG On Campus Bambili.",
  keywords: [
    "FadidevStudio",
    "Abdul Fadiga",
    "UI/UX focused full-stack developer",
    "Frontend developer",
    "React developer",
    "Next.js developer",
    "Product-focused web developer",
    "Web Developer Lead SEED",
    "GDG On Campus Bambili",
    "Modern web applications",
    "UX-driven frontend engineering",
    "Full-stack JavaScript developer",
    "TypeScript developer",
    "Responsive web design",
    "Performance-driven development",
    "Scalable web architecture",
    "Bambili developer",
    "Cameroon tech leader",
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
    title: "FadidevStudio – UI/UX-Focused Full-Stack Developer",
    description: "UI/UX-focused full-stack developer building scalable, user-centered web products.",
    url: "https://fadidev-studio.vercel.app",
    siteName: "FadidevStudio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FadidevStudio – UI/UX-Focused Full-Stack Developer",
    description: "UI/UX-focused full-stack developer building scalable, user-centered web products.",
    creator: "@fadidev", // Assuming this is the handle, or I can leave it out if unknown
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
