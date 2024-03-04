import { VALIDATION } from "./Input.constants";
import { LabelType } from "./Input.types";

export const variantToLabel = (labelName: LabelType) => {
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

export const inputValidation = (labelName: LabelType, inputValue: string) => {
  switch (labelName) {
    case "email":
      return VALIDATION.email.test(inputValue);
    case "password":
      return VALIDATION.password.test(inputValue);
    case "accountname":
      return VALIDATION.accountname.test(inputValue);
  }
};
