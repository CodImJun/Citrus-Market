export type GetProductListRequest = {
  accountname: string;
};
export type GetProductListResponse = {
  data: number;
  product: {
    id: string;
    itemName: string;
    price: string;
    link: string;
    itemImage: string;
    author: {
      _id: string;
      username: string;
      accountname: string;
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
