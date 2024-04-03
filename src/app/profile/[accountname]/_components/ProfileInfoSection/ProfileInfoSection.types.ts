import { UserType } from "@/_types";

export type ProfileInfoSectionProps = Pick<
  UserType,
  | "followerCount"
  | "followingCount"
  | "image"
  | "username"
  | "accountname"
  | "intro"
>;
