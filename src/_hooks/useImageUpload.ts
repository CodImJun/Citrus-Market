import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

export const useImageUpload = (
  setValue: UseFormSetValue<any>,
  fieldName: string
) => {
  const [previewImage, setPreviewImage] = useState("");

  const handleUploadPreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setValue(fieldName, file, { shouldValidate: true });
    }
  };

  return { previewImage, handleUploadPreviewImage };
};
