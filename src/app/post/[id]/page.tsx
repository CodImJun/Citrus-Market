"use client";

import { PostItem } from "@/_components";
import { CommentList, ReplyBox } from "./_components";
import { useGetPostDetail } from "./_states";
import { useAuthStore } from "@/_states";

const PostDetailPage = ({ params }: { params: { id: string } }) => {
  const profileImage = useAuthStore((state) => state.loginInfo.image);
  const {
    data: postInfo,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  } = useGetPostDetail({
    post_id: params.id,
  });

  if (isLoading) return null;
  if (isError) return null;
  if (isFetching) return null;
  if (isSuccess)
    return (
      <>
        <section className="px-[1.6rem] py-[2rem]">
          <PostItem type="list" {...postInfo} />
        </section>
        <hr className="border-grey-300" />
        <section className="flex flex-col gap-y-[1.6rem] px-[1.6rem] py-[2rem] flex-1 overflow-y-scroll">
          <CommentList post_id={params.id} />
        </section>
        <ReplyBox profileImage={profileImage} postId={params.id} />
      </>
    );
};

export default PostDetailPage;
