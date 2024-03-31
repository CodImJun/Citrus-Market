import type {
  GetFollowingPostListRequest,
  GetMyPostListRequest,
  GetPostDetailRequest,
  GetCommentListRequest,
  GetProductListRequest,
  GetPersonalProfileRequest,
  SearchUserRequest,
  GetFollowerListRequest,
  GetFollowingListRequest,
} from "@/_apis";

export const queryKeys = {
  comment: {
    getCommentList: ({ post_id }: GetCommentListRequest) => [
      "GET_COMMENT_LIST",
      post_id,
    ],
  },

  post: {
    getFollowingPostList: ({
      limit,
      skip,
    }: GetFollowingPostListRequest = {}) => [
      "GET_FOLLOWING_POST_LIST",
      limit,
      skip,
    ],
    getMyPostList: ({ accountname }: GetMyPostListRequest) => [
      "GET_MY_POST_LIST",
      accountname,
    ],
    getPostDetail: ({ post_id }: GetPostDetailRequest) => [
      "GET_POST_DETAIL",
      post_id,
    ],
  },

  product: {
    getProductList: (
      { accountname, limit, skip }: GetProductListRequest = { accountname: "" }
    ) => ["GET_PRODUCT_LIST", accountname, limit, skip],
  },

  profile: {
    getPersonalProfile: ({ accountname }: GetPersonalProfileRequest) => [
      "GET_PERSONAL_PROFILE",
      accountname,
    ],
    getFollowerList: (
      { accountname, limit, skip }: GetFollowerListRequest = { accountname: "" }
    ) => ["GET_FOLLOWER_LIST", accountname, limit, skip],
    getFollowingList: ({
      accountname,
      limit,
      skip,
    }: GetFollowingListRequest) => [
      "GET_FOLLOWING_LIST",
      accountname,
      limit,
      skip,
    ],
  },

  search: {
    searchUser: ({ keyword }: SearchUserRequest) => ["SEARCH_USER", keyword],
  },
};
