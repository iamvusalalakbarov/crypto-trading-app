import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto Trading App",
  description:
    "The goal of this project is to use ReactJS capabilities and its paradigms by creating a simple Crypto Trading App.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
