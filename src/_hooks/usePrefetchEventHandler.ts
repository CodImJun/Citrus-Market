import { PostAPI, ProductAPI, ProfileAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import getQueryClient from "@/_states/server/getQueryClient";

export const usePrefetchEventHandler = () => {
  const queryClient = getQueryClient();

  const handlePrefetchPostDetail = async (post_id: string) =>
    await queryClient.prefetchQuery({
      queryKey: queryKeys.post.getPostDetail({ post_id }),
      queryFn: () => PostAPI.getPostDetail({ post_id }),
    });

  const handlePrefetchProfilePage = async (accountname: string) => {
    const GET_MY_PROFILE_QUERY = {
      queryKey: queryKeys.profile.getPersonalProfile({ accountname }),
      queryFn: () => ProfileAPI.getPersonalProfile({ accountname }),
    };
    const GET_MY_PRODUCT_LIST_QUERY = {
      queryKey: queryKeys.product.getProductList({ accountname }),
      queryFn: () => ProductAPI.getProductList({ accountname }),
    };
    const GET_MY_POST_LIST_QUERY = {
      queryKey: queryKeys.post.getMyPostList({ accountname }),
      queryFn: () => PostAPI.getMyPostList({ accountname }),
    };

    await Promise.all([
      queryClient.prefetchQuery(GET_MY_PROFILE_QUERY),
      queryClient.prefetchQuery(GET_MY_PRODUCT_LIST_QUERY),
      queryClient.prefetchQuery(GET_MY_POST_LIST_QUERY),
    ]);
  };

  return {
    handlePrefetchPostDetail,
    handlePrefetchProfilePage,
  };
};
