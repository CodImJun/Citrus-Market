"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRef } from "react";

export const Provider = ({ children }: React.PropsWithChildren) => {
  const queryClientRef = useRef<QueryClient>(null!);
  if (!queryClientRef.current) queryClientRef.current = new QueryClient();

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
