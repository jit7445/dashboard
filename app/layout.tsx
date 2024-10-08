import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
      <div className="flex h-screen">
      {/* Sidebar */}
      <div className="hidden lg:block md:block">
      <Sidebar/>
      </div>
       

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="hidden lg:block md:block">
        <Header />
        </div>
        <div className="block lg:hidden md:hidden">
        <MobileHeader/>
        </div>
        

        {/* Main content */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
      </body>
    </html>
  );
}
