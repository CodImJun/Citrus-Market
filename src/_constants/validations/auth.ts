import * as Yup from "yup";
import { ERROR_MESSAGE } from "./message";
import { PASSWORD_REGEX } from "./regex";

const email = Yup.string()
  .email(ERROR_MESSAGE.email.pattern)
  .required(ERROR_MESSAGE.email.required);

const password = Yup.string()
  .min(6, ERROR_MESSAGE.password.min)
  .max(20, ERROR_MESSAGE.password.max)
  .matches(PASSWORD_REGEX, ERROR_MESSAGE.password.pattern)
  .required(ERROR_MESSAGE.password.required);

export const LOGIN_SCHEMA = Yup.object({
  email: email,
  password: password,
});
