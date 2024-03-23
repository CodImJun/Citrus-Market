import { Post } from "@/_components";
import { PostListProps } from "./PostList.types";

export const PostList = ({ list, postType, page }: PostListProps) => {
  const PADDING = page === "main" ? "px-[1.6rem] py-[2rem]" : "p-[1.6rem]";
  const LAYOUT =
    postType === "default"
      ? "flex flex-col gap-y-[2rem]"
      : "grid grid-rows-3 grid-cols-3 gap-[0.8rem]";

  return (
    <ul className={`${LAYOUT} ${PADDING} h-full overflow-y-scroll"`}>
      {list.map((post) => (
        <li
          key={post._id + post.author._id + ""}
          className={`${postType === "default" ? "" : "w-fit"}`}
        >
          <Post
            postListType={postType}
            username={post.author.username}
            accountname={post.author.accountname}
            content={post.content}
            heartCount={post.heartCount}
            commentCount={post.commentCount}
            createdAt={new Date(post.createdAt)}
            profileImage={post.author.image}
            contentImage={post.image}
          />
        </li>
      ))}
    </ul>
  );
};
