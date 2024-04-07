import {
  HydrationBoundary,
  dehydrate,
  QueryFunction,
  QueryKey,
} from "@tanstack/react-query";
import getQueryClient from "./getQueryClient";

type FetchQueryOption = { queryKey: QueryKey; queryFn: QueryFunction };

interface PrefetchHydrationProps extends React.PropsWithChildren {
  query?: FetchQueryOption;
  queries?: FetchQueryOption[];
}

export const PrefetchHydration = async ({
  query,
  queries,
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

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
};
