import { PostAPI, ProductAPI, ProfileAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQueries } from "@tanstack/react-query";

export const useProfileQueries = (accountname: string) => {
  const getProfileQueryOptions = {
    queryKey: [queryKeys.profile, accountname],
    queryFn: () => ProfileAPI.getPersonalProfile({ accountname }),
  };

  const getProductListQueryOptions = {
    queryKey: [queryKeys.product, accountname],
    queryFn: () => ProductAPI.getProductList({ accountname }),
  };
  const getPostListQueryOptions = {
    queryKey: [queryKeys.post, accountname],
    queryFn: () => PostAPI.getMyPostList({ accountname }),
  };

  return useQueries({
    queries: [
      getProfileQueryOptions,
      getProductListQueryOptions,
      getPostListQueryOptions,
    ],
  });
};
