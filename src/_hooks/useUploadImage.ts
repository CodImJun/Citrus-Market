"use client";

import { validateImageInput } from "@/_utils";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

export const useUploadImage = ({
  setValue,
}: {
  setValue: UseFormSetValue<any>;
}) => {
  const [images, setImages] = useState<{ file: File; imageUrl: string }[]>([]);

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const filesArray = Array.from(selectedFiles);
    const validation = validateImageInput(filesArray);

    if (!validation.isValid) {
      alert(validation.errorMessage);
      return;
    }

    const newImages = filesArray.map((file) => ({
      file,
      imageUrl: URL.createObjectURL(file),
    }));

    setImages(newImages);
    setValue("image", filesArray, { shouldValidate: true });
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setValue(
      "image",
      updatedImages.map(({ file }) => file),
      { shouldValidate: true }
    );
  };

  return {
    images,
    handleChangeImage,
    handleRemoveImage,
  };
};
