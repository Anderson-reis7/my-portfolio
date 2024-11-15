import type { Metadata } from "next";
import "./globals.css";
import {Archivo} from "next/font/google";

const font = Archivo ({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Anderson Developer",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
