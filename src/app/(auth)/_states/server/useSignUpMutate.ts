import { SignUpRequest, UserAPI } from "@/_apis";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FieldValues, Path, UseFormSetError } from "react-hook-form";

export const useSignUpMutate = <T extends FieldValues>(
  setError: UseFormSetError<T>
) => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: SignUpRequest) => UserAPI.signUp(data),
    onSuccess: () => router.push("/login"),
    onError: (error: AxiosError<{ message: string; status: number }>) => {
      const ERROR_RESPONSE = error.response;

      if (ERROR_RESPONSE)
        switch (ERROR_RESPONSE.data.message) {
          case "이미 가입된 이메일 주소 입니다.":
            setError("email" as Path<T>, {
              type: "custom",
              message: ERROR_RESPONSE.data.message,
            });
            break;
          case "이미 사용중인 계정 ID입니다.":
            setError("accountname" as Path<T>, {
              type: "custom",
              message: ERROR_RESPONSE.data.message,
            });
            break;
        }
    },
    onSettled: () => {},
  });
};
