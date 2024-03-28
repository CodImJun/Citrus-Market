import { UserType } from "@/_types";

export type ProfileButtonSectionProps = Pick<
  UserType,
  "_id" | "isfollow" | "accountname"
> & {
  refetch: () => void;
};
