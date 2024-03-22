export type GetPersonalProfileRequest = {
  accountname: string;
};
export type GetPersonalProfileResponse = {
  profile: {
    _id: string;
    username: string;
    accountname: string;
    intro: string;
    image: string;
    isfollow: boolean;
    following: string[];
    gollower: string[];
    followerCount: number;
    followingCount: number;
  };
};
