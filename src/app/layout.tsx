import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

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
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
}

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max-w-[39rem] h-full m-auto border-x-[0.1rem] border-solid border-grey-300">
      {children}
    </div>
  );
};
