import { useForm } from "react-hook-form";
import { useRegisterFormField } from "./useRegisterFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { SIGNUP_SCHEMA } from "@/_constants";
import { useSignUpMutate } from "../_states";

export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      image: "",
      email: "",
      password: "",
      username: "",
      accountname: "",
      introduce: "",
    },
    resolver: yupResolver(SIGNUP_SCHEMA),
  });

  const [
    imageRegister,
    emailRegister,
    passwordRegister,
    usernameRegister,
    accountnameRegister,
    introduceRegister,
  ] = useRegisterFormField(register, errors, [
    "image",
    "email",
    "password",
    "username",
    "accountname",
    "introduce",
  ]);

  const { mutate } = useSignUpMutate(setError);

  const handleSignUp = handleSubmit((data) => mutate(data));

  return {
    handleSignUp,
    imageRegister,
    emailRegister,
    passwordRegister,
    usernameRegister,
    accountnameRegister,
    introduceRegister,
    isValid,
  };
};
