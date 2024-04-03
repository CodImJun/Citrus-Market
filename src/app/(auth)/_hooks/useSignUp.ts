import { useForm } from "react-hook-form";
import { useRegisterFormField } from "./useRegisterFormField";
import { yupResolver } from "@hookform/resolvers/yup";
import { SIGNUP_SCHEMA } from "@/_constants";
import { useSignUpMutate } from "../_states";
import { ImageAPI, SignUpRequest } from "@/_apis";

type UseSignUpValues = {
  image: File[];
  email: string;
  password: string;
  username: string;
  accountname: string;
  intro: string;
};

export const useSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    setValue,
  } = useForm<UseSignUpValues>({
    mode: "onChange",
    defaultValues: {
      image: undefined,
      email: "",
      password: "",
      username: "",
      accountname: "",
      intro: "",
    },
    resolver: yupResolver<any>(SIGNUP_SCHEMA),
  });

  const [
    imageRegister,
    emailRegister,
    passwordRegister,
    usernameRegister,
    accountnameRegister,
    introRegister,
  ] = useRegisterFormField(register, errors, [
    "image",
    "email",
    "password",
    "username",
    "accountname",
    "intro",
  ]);

  const { mutate } = useSignUpMutate(setError);

  const handleSignUp = handleSubmit(async (data) => {
    const imageResponse = await ImageAPI.uploadSingleImage(data.image[0]);
    if (!Array.isArray(imageResponse)) {
      mutate({ ...data, image: imageResponse.filename });
    }
  });

  return {
    setValue,
    handleSignUp,
    imageRegister,
    emailRegister,
    passwordRegister,
    usernameRegister,
    accountnameRegister,
    introRegister,
    isValid,
  };
};
