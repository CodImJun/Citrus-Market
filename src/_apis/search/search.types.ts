export type SearchUserRequest = {
  keyword: string;
};
export type SearchUserResponse = {
  _id: string;
  username: string;
  accountname: string;
  following: string[];
  follower: string[];
  followerCount: number;
  followingCount: number;
}[];
