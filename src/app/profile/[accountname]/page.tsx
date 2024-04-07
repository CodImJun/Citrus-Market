import { PrefetchHydration, queryKeys } from "@/_states";

import { ProfilePageProps } from "./page.types";
import { PostAPI, ProductAPI, ProfileAPI } from "@/_apis";
import { UserProfile } from "./_components";

const ProfilePage = ({ params }: ProfilePageProps) => {
  const accountname = params.accountname;

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

  return (
    <PrefetchHydration
      queries={[
        GET_MY_PROFILE_QUERY,
        GET_MY_PRODUCT_LIST_QUERY,
        GET_MY_POST_LIST_QUERY,
      ]}
    >
      <UserProfile accountname={params.accountname} />
    </PrefetchHydration>
  );
};

export default ProfilePage;
