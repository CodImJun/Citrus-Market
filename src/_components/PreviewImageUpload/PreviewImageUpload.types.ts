import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export type PreviewImageUploadProps<T extends FieldValues> = {
  layout: "profile" | "product";
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<T>;
};
