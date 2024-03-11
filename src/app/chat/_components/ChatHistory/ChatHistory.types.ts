import { ImageProps } from "next/image";

export type ChatHistoryProps = {
  sender: "me" | "other";
  profileImage?: ImageProps["src"];
  content: string;
  sentAt: Date;
  chatType: "string" | "image";
};
