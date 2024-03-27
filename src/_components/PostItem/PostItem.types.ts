import { PostType } from "@/_types";

export type PostItemProps = {
  type: "default" | "album";
} & PostType;
