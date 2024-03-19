import { FormInputProps } from "./FormInput.types";

export const changeLabelNameToText = (
  labelName: FormInputProps["labelName"]
) => {
  switch (labelName) {
    case "email":
      return "이메일";
    case "password":
      return "비밀번호";
    case "username":
      return "사용자 이름";
    case "accountname":
      return "계정 ID";
    case "introduce":
      return "소개";
  }
};
