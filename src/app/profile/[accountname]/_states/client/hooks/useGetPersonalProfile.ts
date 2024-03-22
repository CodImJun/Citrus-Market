import { ProfileAPI } from "@/_apis/profile";
import { useQuery } from "@tanstack/react-query";

export const useGetPersonalProfile = (accountname: string) => {
  return useQuery({
    queryKey: [],
    queryFn: () => ProfileAPI.getPersonalProfile({ accountname }),
    staleTime: 6 * 10 * 1000,
  });
};
