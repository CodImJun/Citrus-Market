import { UserType } from "@/_types";

export type GetPersonalProfileRequest = {
  accountname: string;
};
export type GetPersonalProfileResponse = {
  profile: UserType;
};

export type FollowUserRequest = {
  accountname: string;
};
export type FollowUserResponse = {
  profile: UserType;
};

export type UnFollowUserRequest = {
  accountname: string;
};
export type UnFollowUserResponse = {
  profile: UserType;
};
