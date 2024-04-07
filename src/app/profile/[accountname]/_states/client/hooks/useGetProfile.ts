import { ProfileAPI } from "@/_apis";
import { queryKeys } from "@/_states";
import { useQuery } from "@tanstack/react-query";

export const useGetProfile = (accountname: string) => {
  return useQuery({
    queryKey: queryKeys.profile.getPersonalProfile({ accountname }),
    queryFn: () => ProfileAPI.getPersonalProfile({ accountname }),
    staleTime: 60 * 10 * 1000,
  });
};
