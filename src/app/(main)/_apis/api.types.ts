export type ViewAllPostRequest = {
  params: {
    limit: number;
    skip: number;
  };
};
export type ViewAllPostResponse = {
  data: number;
  posts: {
    _id: string;
    __v: number;
    content: string;
    image: string;
    comments: string[];
    heartCount: number;
    createdAt: string;
    updatedAt: string;
    author: {
      _id: string;
      email: string;
      username: string;
      accountname: string;
      image: string;
      intro: string;
      salt: string;
      follower: string[];
      following: string[];
      hash: string;
      hearts: string[];
      updatedAt: string;
      createdAt: string;
    };
  }[];
};
