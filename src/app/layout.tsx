import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";
import { GlobalLayout } from "./GlobalLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "감귤마켓",
  description: "마켓 서비스",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Provider>
          <GlobalLayout>{children}</GlobalLayout>
        </Provider>
      </body>
    </html>
  );
}
