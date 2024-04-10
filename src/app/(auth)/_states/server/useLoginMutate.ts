import { LoginRequest, LoginResponse, UserAPI } from "@/_apis";
import { useAuthStore } from "@/_states/client/login";
import { isStatusInData } from "@/_utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { UseFormSetError } from "react-hook-form";

export const useLoginMutate = (setError: UseFormSetError<LoginRequest>) => {
  const router = useRouter();
  const handleSetLoginInfo = useAuthStore().handleSetLoginInfo;

  return useMutation({
    mutationFn: (data: LoginRequest) => UserAPI.login(data),
    onSuccess: (data: LoginResponse) => {
      if (isStatusInData(data)) {
        setError("password", {
          type: "custom",
          message: data.message,
        });
      } else {
        handleSetLoginInfo(data);
        router.push("/");
      }
    },
    onError: () => {},
    onSettled: () => {},
  });
};
