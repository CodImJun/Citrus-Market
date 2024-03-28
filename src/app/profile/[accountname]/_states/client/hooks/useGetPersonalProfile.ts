import { ProfileAPI } from "@/_apis/profile";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetPersonalProfile = (accountname: string) => {
  return useQuery({
    queryKey: [queryKeys.profile, accountname],
    queryFn: () => ProfileAPI.getPersonalProfile({ accountname }),
    staleTime: 6 * 10 * 1000,
    refetchOnWindowFocus: true,
  });
};
