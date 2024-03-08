import { useState } from "react";
import { MainPageApi } from "../../_apis";
import { ViewAllPostResponse } from "../../_apis/api.types";
import { Post } from "@/_components";

export const FeedList = () => {
  const [feeds, setFeeds] = useState<ViewAllPostResponse["posts"]>();

  return (
    <>
      <ul className="flex flex-col h-full gap-y-[2rem] px-[1.6rem] py-[2rem] overflow-y-scroll">
        {feeds?.map((feed) => (
          <li key={feed._id}>
            <Post
              username={feed.author.username}
              accountname={feed.author.accountname}
              content={feed.content}
              heartCount={feed.heartCount}
              commentCount={feed.comments.length}
              createdAt={new Date(feed.createdAt)}
              profileImage=""
              contentImage=""
            />
          </li>
        ))}
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
