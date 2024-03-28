import { isNotEmptyArray } from "@/_utils";
import { usePostTypeStore } from "../../_states";
import { UserPostSectionProps } from "./UserPostSection.types";
import Image from "next/image";
import Link from "next/link";
import { PostItem } from "@/_components";

export const UserPostSection = ({ postList }: UserPostSectionProps) => {
  const { postType, setPostListType, setPostAlbumType } = usePostTypeStore();

  const LIST_LAYOUT =
    postType === "list"
      ? "flex flex-col gap-y-[3rem] py-[1.6rem] px-[2rem]"
      : "grid grid-cols-3 gap-[0.8rem] p-[1.6rem]";

  return (
    <>
      {isNotEmptyArray(postList) && (
        <>
          <hr className="border-y-[0.3rem] border-grey-100" />
          <section>
            <div className="flex justify-end gap-x-[1.6rem] px-[1.6rem] py-[1rem] border-b-[0.05rem] border-solid border-grey-300">
              <button type="button" onClick={setPostListType}>
                <Image
                  src={`/icon-post-list-${
                    postType === "list" ? "on" : "off"
                  }.png`}
                  alt="post list"
                  width={26}
                  height={26}
                  priority
                />
              </button>
              <button type="button" onClick={setPostAlbumType}>
                <Image
                  src={`/icon-post-album-${
                    postType === "album" ? "on" : "off"
                  }.png`}
                  alt="post album"
                  width={26}
                  height={26}
                  priority
                />
              </button>
            </div>
            <ul className={LIST_LAYOUT}>
              {postList.map((post) => (
                <li key={post.id}>
                  <Link href={`/post/${post.id}`}>
                    <PostItem type={postType} {...post} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </>
  );
};
