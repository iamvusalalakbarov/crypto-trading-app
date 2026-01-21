import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Header } from "@/components/Header";
import "../styles/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crypto Trading App",
  description:
    "The goal of this project is to use ReactJS capabilities and its paradigms by creating a simple Crypto Trading App.",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} text-slate-50 bg-slate-950 antialiased`}
      >
        <ReactQueryProvider>
          <Header />
          <main className="p-8">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
