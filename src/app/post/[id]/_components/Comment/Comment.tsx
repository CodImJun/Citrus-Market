import Image from "next/image";
import { CommentProps } from "./Comment.types";
import { ImageWithFallback } from "@/_components";
import { useAuthStore, useModalStore } from "@/_states";
import { useDeleteCommentMutate } from "../../_states";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

export const Comment = ({
  postId,
  commentId,
  commentAuthorId,
  profileImage,
  username,
  content,
  createdAt,
}: CommentProps) => {
  const { mutate } = useDeleteCommentMutate();
  const { openModal, openConfirm } = useModalStore();
  const loginID = useAuthStore((state) => state.loginInfo._id);

  const handleDeleteComment = () => {
    mutate({ post_id: postId, comment_id: commentId });
  };

  return (
    <article className="flex gap-x-[1.2rem] w-full">
      <ImageWithFallback
        src={process.env.NEXT_PUBLIC_API_URL + "/" + profileImage}
        fallbackSrc="/basic-profile-img.png"
        alt="profile image"
        width={36}
        height={36}
        className="w-[3.6rem] h-[3.6rem]"
      />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-14-500-17.5 text-black">{username}</div>
            <div className="ml-[0.6rem] text-10-400-12 text-grey-700">
              {formatDistanceToNow(createdAt, { addSuffix: true, locale: ko })}
            </div>
          </div>
          {loginID === commentAuthorId && (
            <button
              type="button"
              onClick={() =>
                openModal([
                  {
                    text: "삭제",
                    onClick: () =>
                      openConfirm("댓글을 삭제하시겠습니까?", () =>
                        handleDeleteComment()
                      ),
                  },
                ])
              }
            >
              <Image
                src="/icon-more-vertical.png"
                alt="more"
                width={20}
                height={20}
              />
            </button>
          )}
        </div>
        <p className="text-14-400-17.5 text-grey-900 mt-[0.6rem]">{content}</p>
      </div>
    </article>
  );
};
