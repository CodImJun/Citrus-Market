export type SearchUserRequest = {
  keyword: string;
};
export type SearchUserResponse = {
  _id: string;
  username: string;
  accountname: string;
  image: string;
  intro: string;
  isfollow: boolean;
  following: string[];
  follower: string[];
  followerCount: number;
  followingCount: number;
}[];
