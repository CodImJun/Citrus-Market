import {
  HydrationBoundary,
  dehydrate,
  UseQueryOptions,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";

interface PrefetchHydrationProps extends React.PropsWithChildren {
  query?: UseQueryOptions;
  queries?: UseQueryOptions[];
  infiniteQueries?: UseInfiniteQueryOptions;
}

export const PrefetchHydration = async ({
  query,
  queries,
  infiniteQueries,
  children,
}: PrefetchHydrationProps) => {
  const queryClient = getQueryClient();

  if (query) {
    await queryClient.prefetchQuery({
      queryKey: query.queryKey,
      queryFn: query.queryFn,
    });
  }

  if (queries) {
    await Promise.all(
      queries.map((query) =>
        queryClient.prefetchQuery({
          queryKey: query.queryKey,
          queryFn: query.queryFn,
        })
      )
    );
  }

  if (infiniteQueries) {
    await queryClient.prefetchInfiniteQuery({
      queryKey: infiniteQueries.queryKey,
      queryFn: infiniteQueries.queryFn,
      initialPageParam: 0,
    });
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
};
