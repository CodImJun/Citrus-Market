import { GetMyPostListResponse } from "@/_apis/post/post.types";

export type PostListProps = {
  page: "main" | "profile";
  postType: "default" | "album";
  list: GetMyPostListResponse["post"];
};
