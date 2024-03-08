import Image from "next/image";

import { NAV_ITEMS } from "./Navigation.constants";

export const Navigation = () => {
  return (
    <nav
      aria-label="바로가기 네비게이션"
      className="fixed bottom-0 w-full bg-white border-t-[0.1rem] border-solid border-grey-300"
    >
      <ul className="flex flex-row items-center justify-between gap-x-[1.4rem] w-full h-[6rem] px-[0.6rem]">
        {NAV_ITEMS.map((item) => {
          const { src, alt, text } = item;
          return (
            <li
              key={alt}
              className="flex flex-col items-center justify-center gap-[0.4rem] flex-1 h-full cursor-pointer text-10-400-12 text-grey-700"
            >
              <Image src={src} alt={alt} width={24} height={24} priority />
              {text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
