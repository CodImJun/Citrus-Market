import { LoginRequest, LoginResponse, UserAPI } from "@/_apis";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/_constants";
import { isStatusInData } from "@/_utils";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { UseFormSetError } from "react-hook-form";

export const useLoginMutate = (setError: UseFormSetError<LoginRequest>) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginRequest) => UserAPI.login(data),
    onSuccess: (data: LoginResponse) => {
      if (isStatusInData(data)) {
        setError("password", {
          type: "custom",
          message: data.message,
        });
      } else {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.user.token);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.user.refreshToken);
        router.push("/");
      }
    },
    onError: () => {},
    onSettled: () => {},
  });
};
