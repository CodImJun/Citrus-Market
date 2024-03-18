import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_SCHEMA } from "@/_constants";
import { useRegisterFormField } from "./useRegisterFormField";
import { useLoginMutate } from "../_states";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const [emailRegister, passwordRegister] = useRegisterFormField(
    register,
    errors,
    ["email", "password"]
  );

  const { mutate } = useLoginMutate(setError);

  const handleLogin = handleSubmit((data) => mutate(data));

  return {
    handleLogin,
    emailRegister,
    passwordRegister,
    isValid,
  };
};
