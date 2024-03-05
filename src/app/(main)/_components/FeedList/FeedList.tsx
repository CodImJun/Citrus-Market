import { useState } from "react";
import { MainPageApi } from "../../_apis";
import { ViewAllPostResponse } from "../../_apis/api.types";
import Image from "next/image";
import Link from "next/link";

export const FeedList = () => {
  const [feeds, setFeeds] = useState<ViewAllPostResponse["posts"]>();

  return (
    <>
      <ul className="flex flex-col h-full gap-y-[2rem] px-[1.6rem] py-[2rem] overflow-y-scroll">
        {feeds?.map((feed) => {
          const createdAt = new Date(feed.createdAt);

          return (
            <li key={feed._id}>
              <article>
                <Image
                  // TODO: Add Image API
                  src="/basic-profile-img.png"
                  alt="profile image"
                  width={42}
                  height={42}
                  className="float-left mr-[1.2rem]"
                />
                <div className="flex flex-col gap-y-[1.2rem] ">
                  <header className="flex flex-row items-start justify-between">
                    <div>
                      <p className="text-14-500-17.5 text-black">
                        {feed.author.username}
                      </p>
                      <p className="text-12-400-14 text-grey-700">
                        @{feed.author.accountname}
                      </p>
                    </div>
                    <button type="button">
                      <Image
                        src="/s-icon-more-vertical.png"
                        alt="feed more button"
                        width={18}
                        height={18}
                      />
                    </button>
                  </header>
                  <main className="flex flex-col gap-y-[1.2rem] mt-[0.4rem]">
                    <p>{feed.content}</p>
                    <Image
                      src=""
                      alt="feed image"
                      width={304}
                      height={208}
                      className="rounded-[1rem]"
                    />
                  </main>
                  <footer className="flex flex-col gap-y-[1.6rem]">
                    <div className="flex flex-row gap-x-[1.6rem]">
                      <button
                        type="button"
                        className="flex flex-row gap-x-[0.6rem] items-center"
                      >
                        <Image
                          src="/icon-heart.png"
                          alt="heart"
                          width={20}
                          height={20}
                        />
                        <span className="text-12-400-12 text-grey-700">
                          {feed.heartCount}
                        </span>
                      </button>
                      <Link
                        href="/comment"
                        className="flex flex-row gap-x-[0.6rem] items-center"
                      >
                        <Image
                          src="/icon-message-circle.png"
                          alt="comment"
                          width={20}
                          height={20}
                        />
                        <span className="text-12-400-12 text-grey-700">
                          {feed.comments.length}
                        </span>
                      </Link>
                    </div>
                    <time className="text-10-400-12 text-grey-700">{`${createdAt.getFullYear()}년 ${createdAt.getMonth()}월 ${createdAt.getDate()}일`}</time>
                  </footer>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {/* TODO: API Remove */}
      <button
        onClick={async () => {
          const data = await MainPageApi.ViewAllPost();
          setFeeds(data.posts);
          console.log(data);
        }}
      >
        가져오기
      </button>
    </>
  );
};
