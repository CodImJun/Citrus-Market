import Image from "next/image";
import { ChatHistoryProps } from "./ChatHistory.types";

export const ChatHistory = ({
  sender,
  profileImage = "",
  content,
  sentAt,
}: ChatHistoryProps) => {
  return (
    <article
      className={`flex ${
        sender === "me" ? "float-right items-end" : "float-left items-start"
      }`}
    >
      {sender === "me" && (
        <>
          <span className="text-10-400-12 text-grey-700">12:50</span>
          <div className="max-w-[24rem] p-[1.2rem] bg-primary text-14-400-17.5 text-white rounded-[1rem] rounded-tr-none ml-[0.6rem]">
            {content}
          </div>
        </>
      )}
      {sender === "other" && (
        <>
          <Image
            src={profileImage}
            alt="profile image"
            width={42}
            height={42}
            className="rounded-full"
          />
          <div className="max-w-[24rem] p-[1.2rem] border-[0.1rem] border-solid border-grey-500 bg-white text-14-400-17.5 text-black rounded-[1rem] rounded-tl-none ml-[1.2rem] mr-[0.6rem]">
            {content}
          </div>
          <span className="text-10-400-12 text-grey-700 self-end">12:39</span>
        </>
      )}
    </article>
  );
};
