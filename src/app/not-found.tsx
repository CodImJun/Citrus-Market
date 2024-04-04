"use client";

import { Button } from "@/_components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full border-x-[0.1rem] border-solid border-grey-300">
      <Image
        src="/icon-404.png"
        alt="404 image"
        width={158}
        height={158}
        priority
      />
      <p className="text-grey-500 text-14-400-14 pt-[2rem] pb-[3rem]">
        페이지를 찾을 수 없습니다. :(
      </p>
      <Button size="L" w="w-[12rem]" onClick={() => router.back()}>
        이전 페이지
      </Button>
    </div>
  );
};

export default NotFoundPage;
