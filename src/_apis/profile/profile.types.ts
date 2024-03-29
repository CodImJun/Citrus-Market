import { PaginationType, UserType } from "@/_types";

// 3.2
export type GetPersonalProfileRequest = {
  accountname: string;
};
export type GetPersonalProfileResponse = {
  profile: UserType;
};

// 3.3
export type FollowUserRequest = {
  accountname: string;
};
export type FollowUserResponse = {
  profile: UserType;
};

// 3.4
export type UnFollowUserRequest = {
  accountname: string;
};
export type UnFollowUserResponse = {
  profile: UserType;
};

// 3.5
export type GetFollowingListRequest = PaginationType & {
  accountname: string;
};
export type GetFollowingListResponse = UserType[];

// 3.6
export type GetFollowerListRequest = PaginationType & {
  accountname: string;
};
export type GetFollowerListResponse = UserType[];
