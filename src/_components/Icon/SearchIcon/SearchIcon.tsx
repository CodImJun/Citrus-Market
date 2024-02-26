import Image from "next/image";
import Link from "next/link";

export const SearchIcon = () => {
  return (
    <Link href="/search">
      <Image
        src="/icon-search.png"
        alt="검색 아이콘"
        width={24}
        height={24}
        priority
      />
    </Link>
  );
};
