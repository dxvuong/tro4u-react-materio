import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { SessionProvider } from "./components/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quản lý nhà trọ 4U",
  description: "Quản lý nhà trọ 4U",
  icons: {
    icon: ["/favicon.ico"],
  },
};
interface Iprops {
  children: ReactNode;
  session: any;
  [key: string] : any;
}

export default function RootLayout({ children, session }: Iprops) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {<SessionProvider session={session}>{children}</SessionProvider>}
      </body>
    </html>
  );
}
