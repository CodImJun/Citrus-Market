import { useReply } from "../../_hooks";
import { ReplyBoxProps } from "./ReplyBox.types";
import { ImageWithFallback } from "@/_components";

export const ReplyBox = ({ profileImage, postId }: ReplyBoxProps) => {
  const { isValid, contentRegister, handleSubmitComment } = useReply(postId);

  return (
    <footer className="fixed bottom-0 w-full max-w-[39rem] h-[6rem] border-grey-300 border-solid border-t-[0.05rem] bg-white">
      <form
        onSubmit={handleSubmitComment}
        className="flex gap-x-[1.6rem] items-center justify-between px-[1.6rem] py-[1.2rem]"
      >
        <ImageWithFallback
          src={process.env.NEXT_PUBLIC_API_URL + "/" + profileImage}
          fallbackSrc="/basic-profile-img.png"
          alt="profile image"
          width={36}
          height={36}
          priority
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="댓글 입력하기..."
          className="flex-1 text-14-400-17.5 text-black"
          {...contentRegister}
        />
        <button
          className={`w-[3.6rem] h-[3.6rem] text-14-500-17.5 ${
            isValid ? "text-primary" : "text-grey-500"
          }`}
          disabled={!isValid}
        >
          게시
        </button>
      </form>
    </footer>
  );
};
