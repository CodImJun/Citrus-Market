import { instance } from "@/_states";
import {
  FollowUserRequest,
  FollowUserResponse,
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
};
