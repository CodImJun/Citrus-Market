import * as Yup from "yup";
import { ERROR_MESSAGE } from "./message";
import { ACCOUNTNAME_REGEX, PASSWORD_REGEX } from "./regex";

const image = Yup.string();

const email = Yup.string()
  .email(ERROR_MESSAGE.email.pattern)
  .required(ERROR_MESSAGE.email.required);

const password = Yup.string()
  .min(6, ERROR_MESSAGE.password.min)
  .max(20, ERROR_MESSAGE.password.max)
  .matches(PASSWORD_REGEX, ERROR_MESSAGE.password.pattern)
  .required(ERROR_MESSAGE.password.required);

const username = Yup.string().required(ERROR_MESSAGE.username.required);

const accountname = Yup.string()
  .matches(ACCOUNTNAME_REGEX, ERROR_MESSAGE.accountname.pattern)
  .required(ERROR_MESSAGE.accountname.required);

const introduce = Yup.string();

export const LOGIN_SCHEMA = Yup.object({
  email,
  password,
});

export const SIGNUP_SCHEMA = Yup.object({
  image,
  email,
  password,
  username,
  accountname,
  introduce,
});
