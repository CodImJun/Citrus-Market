import { Post } from "@/_components";
import { PostListProps } from "./PostList.types";

export const PostList = ({ list }: PostListProps) => {
  return (
    <ul className="flex flex-col h-full gap-y-[2rem] px-[1.6rem] py-[2rem] overflow-y-scroll">
      {list?.map((post: any) => (
        <li key={post._id}>
          <Post
            postListType="default"
            username={post.author.username}
            accountname={post.author.accountname}
            content={post.content}
            heartCount={post.heartCount}
            commentCount={post.comments.length}
            createdAt={new Date(post.createdAt)}
            profileImage=""
            contentImage=""
          />
        </li>
      ))}
    </ul>
  );
};
