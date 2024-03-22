// 5.2
export type GetFollowingPostListRequest = {
  limit?: number;
  skip?: number;
};
export type GetFollowingPostListResponse = {
  posts: {
    id: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    hearted: boolean;
    heartCount: number;
    commentCount: number;
    author: {
      _id: string;
      username: string;
      accountname: string;
      intro: string;
      image: string;
      isfollow: boolean;
      follower: string[];
      following: string[];
      followerCount: number;
      followingCount: number;
    };
  }[];
};
// 5.3
export type GetMyPostListRequest = {
  accountname: string;
};
export type GetMyPostListresponse = {
  post: {
    id: string;
    content: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    hearted: boolean;
    heartCount: number;
    commentCount: number;
    author: {
      _id: string;
      username: string;
      intro: string;
      image: string;
      isfollow: boolean;
      following: string[];
      follower: string[];
      followerCount: number;
      followingCount: number;
    };
  };
};
