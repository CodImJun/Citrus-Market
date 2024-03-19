import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  QueryFunction,
  QueryKey,
} from "@tanstack/react-query";

interface FetchQueryOptions {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export const PrefetchHydration = async ({
  queryKey,
  queryFn,
  children,
}: React.PropsWithChildren<FetchQueryOptions>) => {
  const getQueryClient = React.cache(() => new QueryClient());
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({ queryKey, queryFn });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
};
