import { SearchAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { isEmptyString } from "@/_utils";
import { useQuery } from "@tanstack/react-query";

export const useSearchUser = (keyword: string) => {
  return useQuery({
    queryKey: queryKeys.search.searchUser({ keyword }),
    queryFn: () => SearchAPI.searchUser({ keyword }),
    enabled: !isEmptyString(keyword),
    staleTime: 6 * 10 * 1000,
  });
};
