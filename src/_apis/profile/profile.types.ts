import { UserType } from "@/_types";

export type GetPersonalProfileRequest = {
  accountname: string;
};
export type GetPersonalProfileResponse = {
  profile: UserType;
};
