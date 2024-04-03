import {
  ProfileAPI,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from "@/_apis";
import { queryKeys, useAuthStore } from "@/_states";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useEditProfileMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const handleChangeInfo = useAuthStore((state) => state.handleChangeInfo);

  return useMutation({
    mutationFn: (data: UpdateProfileRequest) =>
      ProfileAPI.updateProfile({
        image: data.image,
        username: data.username,
        accountname: data.accountname,
        intro: data.intro,
      }),
    onSuccess: (data: UpdateProfileResponse) => {
      handleChangeInfo(data.user);
      queryClient.refetchQueries({
        queryKey: queryKeys.profile.getPersonalProfile({
          accountname: data.user.accountname,
        }),
      });
      router.back();
    },
    onError: () => {},
  });
};
