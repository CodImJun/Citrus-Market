"use client";

import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: React.PropsWithChildren) => {
  const pathname = usePathname();
  const TITLE =
    pathname === "/login" ? "로그인" : pathname === "/signup" && "회원가입";

  return (
    <div className="flex flex-col items-center h-full pt-[3.4rem] px-[3rem]">
      <header className="mb-[4rem]">
        <h1 className="text-24-500-30">{TITLE}</h1>
      </header>
      <main className="flex flex-col w-full items-center">{children}</main>
    </div>
  );
};

export default AuthLayout;
