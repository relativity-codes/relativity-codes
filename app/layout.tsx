"use client";
// import type { Metadata } from "next";
import StyledJsxRegistry from "./registry";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Box } from "@/components/ui/box";
import Navbar from "@/components/shared/nav-bar";
import Image from "next/image";
import PortfolioFooter from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledJsxRegistry>
          <GluestackUIProvider mode="light">
            <main>
              <Box className={`h-full min-h-screen w-screen bg-black`}>
                <Box className="fixed z-[-10] h-[600px] w-[500px] opacity-70 lg:h-[700px] lg:w-[700px]">
                  <Image src="/gradient.svg" alt="Gradient" fill priority />
                </Box>
                <Navbar />
                {children}
                <Box className="-z-10">
                  <PortfolioFooter />
                </Box>
              </Box>
            </main>
          </GluestackUIProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
