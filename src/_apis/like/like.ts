import { instance } from "@/_states";
import {
  PostLikeRequest,
  PostLikeResponse,
  PostUnLikeRequest,
  PostUnLikeResponse,
} from "./like.types";

export const LikeAPI = {
  postLike: async ({ post_id }: PostLikeRequest) => {
    const { data } = await instance.post<PostLikeResponse>(
      `/post/${post_id}/heart`
    );
    return data;
  },
  postUnLike: async ({ post_id }: PostUnLikeRequest) => {
    const { data } = await instance.delete<PostUnLikeResponse>(
      `/post/${post_id}/unheart`
    );
    return data;
  },
};
