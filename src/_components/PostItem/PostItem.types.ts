import { PostType } from "@/_types";

export type PostItemProps = {
  type: "list" | "album";
} & PostType;
