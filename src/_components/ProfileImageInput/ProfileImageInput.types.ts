import { HTMLAttributes } from "react";
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export type ProfileImageInputProps = HTMLAttributes<HTMLInputElement> & {
  image: string;
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<FieldValues>;
};
