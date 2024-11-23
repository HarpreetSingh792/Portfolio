import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Harpreet's Portfolio",
  description: "Modern and Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  >
      <body
        className={`${inter.className} antialiased`} cz-shortcut-listen="false" suppressHydrationWarning
      >

        <ThemeProvider attribute={"class"} defaultTheme="dark" enableSystem disableTransitionOnChange >

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
