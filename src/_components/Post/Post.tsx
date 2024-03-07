import Image from "next/image";
import { PostProps } from "./Post.types";
import Link from "next/link";

export const Post = ({
  username,
  accountname,
  content,
  heartCount,
  commentCount,
  createdAt,
  profileImage,
  contentImage,
}: PostProps) => {
  return (
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
            <p className="text-14-500-17.5 text-black">{username}</p>
            <p className="text-12-400-14 text-grey-700">@{accountname}</p>
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
          <p>{content}</p>
          <Image
            src=""
            alt="image"
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
              <Image src="/icon-heart.png" alt="heart" width={20} height={20} />
              <span className="text-12-400-12 text-grey-700">{heartCount}</span>
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
                {commentCount}
              </span>
            </Link>
          </div>
          <time className="text-10-400-12 text-grey-700">{`${createdAt.getFullYear()}년 ${createdAt.getMonth()}월 ${createdAt.getDate()}일`}</time>
        </footer>
      </div>
    </article>
  );
};
