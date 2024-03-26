"use client";

import { PostList } from "@/_components";
import Image from "next/image";
import { useGetMyPostList } from "../_states";
import { ProfilePageProps } from "../page.types";
import { isNotEmptyArray } from "@/_utils";

const ProfilePostListPage = ({ params }: ProfilePageProps) => {
  const {
    data: postList,
    isLoading,
    isError,
    isSuccess,
  } = useGetMyPostList(params.accountname);

  if (isLoading) return null;
  if (isError) return null;
  if (isSuccess)
    return (
      <>
        {isNotEmptyArray(postList) && (
          <>
            <hr className="border-y-[0.3rem] border-grey-100" />
            <section>
              <div className="flex justify-end gap-x-[1.6rem] px-[1.6rem] py-[1rem] border-b-[0.05rem] border-solid border-grey-300">
                <button type="button">
                  <Image
                    src="/icon-post-list-on.png"
                    alt="post list"
                    width={26}
                    height={26}
                    priority
                  />
                </button>
                <button type="button">
                  <Image
                    src="/icon-post-album-off.png"
                    alt="post album"
                    width={26}
                    height={26}
                    priority
                  />
                </button>
              </div>
              <PostList page="profile" postType="default" list={postList} />
            </section>
          </>
        )}
      </>
    );
};

export default ProfilePostListPage;
