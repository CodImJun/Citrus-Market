import { instance } from "@/_states";
import {
  FollowUserRequest,
  FollowUserResponse,
  GetFollowerListRequest,
  GetFollowerListResponse,
  GetFollowingListRequest,
  GetFollowingListResponse,
  GetPersonalProfileRequest,
  GetPersonalProfileResponse,
  UnFollowUserRequest,
  UnFollowUserResponse,
} from "./profile.types";

export const ProfileAPI = {
  // 3.2
  getPersonalProfile: async ({ accountname }: GetPersonalProfileRequest) => {
    const { data } = await instance.get<GetPersonalProfileResponse>(
      `/profile/${accountname}`
    );
    return data.profile;
  },
  // 3.3
  followUser: async ({ accountname }: FollowUserRequest) => {
    const { data } = await instance.post<FollowUserResponse>(
      `/profile/${accountname}/follow`
    );
    return data;
  },
  // 3.4
  unFollowUser: async ({ accountname }: UnFollowUserRequest) => {
    const { data } = await instance.delete<UnFollowUserResponse>(
      `/profile/${accountname}/unfollow`
    );
    return data;
  },
  // 3.5
  getFollowingList: async ({
    accountname,
    limit,
    skip,
  }: GetFollowingListRequest) => {
    const { data } = await instance.get<GetFollowingListResponse>(
      `/profile/${accountname}/following?limit=${limit}&skip=${skip}`
    );
    return data;
  },
  // 3.6
  getFollowerList: async ({
    accountname,
    limit,
    skip,
  }: GetFollowerListRequest) => {
    const { data } = await instance.get<GetFollowerListResponse>(
      `/profile/${accountname}/follower?limit=${limit}&skip=${skip}`
    );
    return data;
  },
};
