import { useRegisterFormField } from "@/app/(auth)/_hooks";
import { useForm } from "react-hook-form";
import { useEditProfileMutation } from "../_states";
import { ImageAPI } from "@/_apis";
import { useAuthStore } from "@/_states";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ERROR_MESSAGE, ACCOUNTNAME_REGEX } from "@/_constants";

type useEditProfileFormValues = {
  image: File | string;
  accountname: string;
  username: string;
  intro: string;
};

export const useEditProfileForm = () => {
  const loginInfo = useAuthStore((state) => state.loginInfo);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<useEditProfileFormValues>({
    mode: "onChange",
    defaultValues: {
      image: loginInfo.image,
      accountname: loginInfo.accountname,
      username: loginInfo.username,
      intro: loginInfo.intro ?? "",
    },
    resolver: yupResolver<any>(
      Yup.object({
        image: Yup.mixed(),
        username: Yup.string().required(ERROR_MESSAGE.username.required),
        accountname: Yup.string()
          .matches(ACCOUNTNAME_REGEX, ERROR_MESSAGE.accountname.pattern)
          .required(ERROR_MESSAGE.accountname.required),
        intro: Yup.string(),
      })
    ),
  });

  const [imageRegister, accountnameRegister, usernameRegister, introRegister] =
    useRegisterFormField(register, errors, [
      "image",
      "accountname",
      "username",
      "intro",
    ]);

  const { mutate } = useEditProfileMutation();

  const handleUpdateProfile = handleSubmit(async (data) => {
    const imageResponse = await ImageAPI.uploadSingleImage(data.image as File);
    if (!Array.isArray(imageResponse)) {
      mutate({ ...data, image: imageResponse.filename });
    }
  });

  return {
    isValid,
    setValue,
    imageRegister,
    accountnameRegister,
    usernameRegister,
    introRegister,
    handleUpdateProfile,
  };
};
