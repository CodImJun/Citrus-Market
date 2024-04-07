"use client";

import Image from "next/image";

import Link from "next/link";
import { useAuthStore } from "@/_states";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./Navigation.constants";
import { usePrefetchEventHandler } from "@/_hooks";

export const Navigation = () => {
  const accountname = useAuthStore((state) => state.loginInfo.accountname);
  const pathname = usePathname();
  const handlePrefetchProfilePage =
    usePrefetchEventHandler().handlePrefetchProfilePage;

  return (
    <nav
      aria-label="바로가기 네비게이션"
      className="fixed bottom-0 w-full max-w-[39rem] bg-white border-[0.1rem] border-b-none border-solid border-grey-300 z-10"
    >
      <ul className="flex flex-row items-center justify-between gap-x-[1.4rem] w-full h-[6rem] px-[0.6rem]">
        {NAV_ITEMS.map(
          ({ path, getPath, icon, iconActive, label, isProfile }) => (
            <li
              key={label}
              className={`flex flex-col cursor-pointer justify-center gap-[0.4rem] flex-1 h-full text-10-400-12 ${
                pathname === (isProfile ? getPath!(accountname) : path)
                  ? "text-primary"
                  : "text-grey-700"
              }`}
              onMouseOver={() =>
                label === "프로필" && handlePrefetchProfilePage(accountname)
              }
            >
              <Link
                href={isProfile ? getPath!(accountname) : path!}
                className="flex flex-col items-center justify-center gap-[0.4rem]"
              >
                <Image
                  src={
                    pathname === (isProfile ? getPath!(accountname) : path) &&
                    iconActive
                      ? iconActive
                      : icon
                  }
                  alt={`${label} shortcut`}
                  width={24}
                  height={24}
                  priority
                />
                {label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
