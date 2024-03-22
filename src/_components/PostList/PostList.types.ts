export type PostListProps = {
  list: {
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
