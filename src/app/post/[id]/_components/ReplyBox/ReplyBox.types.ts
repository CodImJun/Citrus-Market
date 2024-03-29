import { ImageProps } from "next/image";

export type ReplyBoxProps = {
  profileImage: ImageProps["src"];
  postId: string;
};
