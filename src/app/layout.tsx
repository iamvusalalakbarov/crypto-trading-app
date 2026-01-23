import type { Metadata } from "next";
import { JSX, PropsWithChildren } from "react";
import { Roboto } from "next/font/google";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { Header } from "@/components/Header";
import { fetchAssets } from "@/lib/api";
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

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>): Promise<JSX.Element> {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["assets", "asc"],
    queryFn: () => fetchAssets("asc"),
  });

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} text-slate-50 bg-slate-950 antialiased`}
      >
        <ReactQueryProvider>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            <main className="container mx-auto py-8">{children}</main>
          </HydrationBoundary>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
