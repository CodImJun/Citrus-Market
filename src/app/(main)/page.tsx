import { PrefetchHydration, queryKeys } from "@/_states";
import { FollowingPostList } from "./_components";
import { GetFollowingPostListResponse, PostAPI } from "@/_apis";

export const dynamic = "force-dynamic";

const MainPage = async () => {
  return (
    <PrefetchHydration
      infiniteQueries={{
        queryKey: queryKeys.post.getFollowingPostList(),
        queryFn: () => PostAPI.getFollowingPostList({ limit: 5, skip: 0 }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
          const { skip } = lastPage as {
            posts: GetFollowingPostListResponse["posts"];
            skip: number;
          };
          return skip;
        },
      }}
    >
      <FollowingPostList />
    </PrefetchHydration>
  );
};

export default MainPage;
