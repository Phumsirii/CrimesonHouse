import type { Metadata } from "next";
import ReduxProvider from "@/redux/ReduxProvider";
import "./globals.css";
import TopBar from "@/components/top-bar";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "CrimesonHouse",
  description: "CrimesonHouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={greatVibes.variable}>
      <head>
        <title>CrimesonHouse</title>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="font-primary">
        <ReduxProvider>
          <TopBar />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
