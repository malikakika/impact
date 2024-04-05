import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "ImpAct",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        {/* Inclure la référence à l'icône dans la balise Head */}
        <link rel="icon" href="/assets/img/app-icon.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
