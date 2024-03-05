"use client";

import { Button } from "@/_components";
import { instance } from "@/_states/server";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FeedList } from "./_components";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/_constants";

const MainPage = () => {
  const route = useRouter();
  // TODO: Add Profile API & Change Client State
  const [isFollow, setIsFollow] = useState(false);

  const handleRouteSearchPage = () => route.push("/search");

  return (
    <>
      {isFollow ? (
        <>
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
          <Button
            type="button"
            size="L"
            w="w-[12rem]"
            onClick={handleRouteSearchPage}
          >
            검색하기
          </Button>
          <button
            type="button"
            onClick={async () => {
              const res = await instance.post("/user", {
                user: {
                  email: "limtest1234@naver.com",
                  password: "limtest1234",
                  username: "limtester",
                  accountname: "limtester",
                },
              });
              console.log(res.data);
            }}
          >
            회원가입
          </button>
          <button
            type="button"
            onClick={async () => {
              const res = await instance.post("/user/login", {
                user: {
                  email: "limtest1234@naver.com",
                  password: "limtest1234",
                },
              });
              console.log(res.data);
              localStorage.setItem(ACCESS_TOKEN_KEY, res.data.user.token);
              localStorage.setItem(
                REFRESH_TOKEN_KEY,
                res.data.user.refreshToken
              );
            }}
          >
            로그인
          </button>
        </>
      ) : (
        <FeedList />
      )}
    </>
  );
};

export default MainPage;
