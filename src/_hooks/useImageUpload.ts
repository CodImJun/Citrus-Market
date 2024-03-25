import { Dispatch, SetStateAction } from "react";
import { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";

type UseImageUploadProps<T extends FieldValues> = {
  setValue: UseFormSetValue<T>;
  fieldName: string;
  setPreviewImage: Dispatch<SetStateAction<string>>;
};

export const useImageUpload = <T extends FieldValues>({
  setValue,
  fieldName,
  setPreviewImage,
}: UseImageUploadProps<T>) => {
  const handleUploadPreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] as PathValue<T, Path<T>>;
    if (file) {
      const src = URL.createObjectURL(file);

      setPreviewImage(src);
      setValue(fieldName as Path<T>, file, { shouldValidate: true });
    }
  };

  return { handleUploadPreviewImage };
};
