import Image from "next/image";
import { CommentProps } from "./Comment.types";

export const Comment = ({
  profileImage,
  username,
  content,
  createdAt,
}: CommentProps) => {
  return (
    <article className="flex gap-x-[1.2rem] w-full">
      <Image src="" alt="profile image" width={36} height={36} />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-14-500-17.5 text-black">{username}</div>
            <div className="ml-[0.6rem] text-10-400-12 text-grey-700">
              5분 전
            </div>
          </div>
          <button type="button">
            <Image
              src="/icon-more-vertical.png"
              alt="more"
              width={20}
              height={20}
            />
          </button>
        </div>
        <p className="text-14-400-17.5 text-grey-900 mt-[1.4rem]">{content}</p>
      </div>
    </article>
  );
};
