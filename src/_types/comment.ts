import { UserType } from "./user";

export type CommentType = {
  id: string;
  content: string;
  createdAt: string;
  author: UserType;
};
