import { UserType } from "@/_types";
import { UseQueryResult } from "@tanstack/react-query";

export type ProfileButtonSectionProps = Pick<
  UserType,
  "_id" | "isfollow" | "accountname"
> & {
  refetch: UseQueryResult["refetch"];
};
