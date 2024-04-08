"use client";

import { useInView } from "react-intersection-observer";
import { isNotEmptyArray } from "@/_utils";
import { useGetFollowingPostList } from "../../_states";
import Link from "next/link";
import Image from "next/image";
import { Button, PostItem } from "@/_components";
import { usePrefetchEventHandler } from "@/_hooks";
import React, { useEffect } from "react";
import { PostType } from "@/_types";

export const FollowingPostList = () => {
  const { data, fetchNextPage, hasNextPage } = useGetFollowingPostList();
  const handlePrefetchPostDetail =
    usePrefetchEventHandler().handlePrefetchPostDetail;
  const [scrollRef, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  if (!data) return null;
  return (
    <>
      {!isNotEmptyArray(data.pages) ? (
        <UserSearchCTA />
      ) : (
        <>
          <ul className="flex flex-col gap-y-[3rem] py-[1.6rem] px-[2rem]">
            {data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.posts.map((post: PostType) => (
                  <li
                    key={post.id}
                    onMouseEnter={() => handlePrefetchPostDetail(post.id)}
                  >
                    <Link href={`/post/${post.id}`}>
                      <PostItem type="list" {...post} />
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
          <div ref={scrollRef} style={{ height: "1px" }} />
        </>
      )}
    </>
  );
};

const UserSearchCTA = () => {
  return (
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
  );
};
