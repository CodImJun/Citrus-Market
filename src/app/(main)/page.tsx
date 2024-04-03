"use client";

import { Button, PostItem } from "@/_components";
import Image from "next/image";
import { useGetFollowingPostList } from "./_states";
import Link from "next/link";
import { isNotEmptyArray } from "@/_utils";

const MainPage = () => {
  const {
    data: followingPostList,
    isLoading,
    isError,
    isSuccess,
  } = useGetFollowingPostList();

  if (isLoading) return null;
  if (isError) return null;
  if (isSuccess)
    return (
      <>
        {!isNotEmptyArray(followingPostList) ? (
          <>
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
          </>
        ) : (
          <ul className="flex flex-col gap-y-[3rem] py-[1.6rem] px-[2rem]">
            {followingPostList.map((post) => (
              <li key={post.id}>
                <Link href={`/post/${post.id}`}>
                  <PostItem type="list" {...post} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
};

export default MainPage;
