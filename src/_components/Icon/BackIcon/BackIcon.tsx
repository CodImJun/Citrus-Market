"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const BackIcon = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <Image
        src="/icon-arrow-left.png"
        alt="뒤로가기 아이콘"
        width={22}
        height={22}
        priority
      />
    </button>
  );
};
