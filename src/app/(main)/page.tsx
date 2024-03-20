"use client";

import { Button, PostList } from "@/_components";
import Image from "next/image";
import { useGetFollowingPostList } from "./_states/client/useGetFollowingPostList";
import Link from "next/link";

const MainPage = () => {
  const { data: followingPostList } = useGetFollowingPostList();

  return (
    <>
      {followingPostList ? (
        <div className="flex flex-col items-center justify-center gap-y-[2rem] mt-[22rem]">
          <Image
            src="/symbol-logo-gray.png"
            alt="logo image"
            width={100}
            height={100}
            priority
          />
          <div className="text-14-400-14 text-grey-700">
            유저를 검색해 팔로우 해보세요!
          </div>
          <Link href="/search">
            <Button type="button" size="L" w="w-[12rem]">
              검색하기
            </Button>
          </Link>
        </div>
      ) : (
        <PostList list={followingPostList ?? []} />
      )}
    </>
  );
};

export default MainPage;
