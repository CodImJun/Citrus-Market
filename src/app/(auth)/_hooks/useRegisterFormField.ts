import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

export const useRegisterFormField = <T extends FieldValues>(
  register: UseFormRegister<T>,
  errors: FieldErrors<T>,
  fieldNameArray: (keyof T)[]
): ReturnType<UseFormRegister<T>>[] => {
  return fieldNameArray.map((fieldName) => {
    const field = register(fieldName as Path<T>);
    const error = errors[fieldName]?.message;

    return {
      ...field,
      error,
    };
  });
};
