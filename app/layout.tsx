import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FadidevStudio – UI/UX-Focused Full-Stack Developer",
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
  ],
  authors: [{ name: "Abdul Fadiga" }],
  openGraph: {
    title: "FadidevStudio – UI/UX-Focused Full-Stack Developer",
    description: "UI/UX-focused full-stack developer building scalable, user-centered web products.",
    type: "website",
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
