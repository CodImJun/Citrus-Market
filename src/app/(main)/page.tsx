import { PrefetchHydration, queryKeys } from "@/_states";
import { FollowingPostList } from "./_components";
import { PostAPI } from "@/_apis";

const MainPage = () => {
  const GET_FOLLOWING_POST_LIST_QUERY = {
    queryKey: queryKeys.post.getFollowingPostList(),
    queryFn: () => PostAPI.getFollowingPostList(),
  };

  return (
    <PrefetchHydration query={GET_FOLLOWING_POST_LIST_QUERY}>
      <FollowingPostList />
    </PrefetchHydration>
  );
};

export default MainPage;
