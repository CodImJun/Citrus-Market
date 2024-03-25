"use client";

import { useRegisterFormField } from "@/app/(auth)/_hooks";
import { useForm } from "react-hook-form";
import { useUploadProductMutate } from "../_states";
import { yupResolver } from "@hookform/resolvers/yup";
import { useImageUpload } from "@/_hooks";
import { UPLOAD_SCHEMA } from "../_constants";
import { ImageAPI } from "@/_apis";

type UseUploadProductValues = {
  itemImage: string;
  itemName: string;
  price: number;
  link: string;
};

export const useUploadProduct = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<UseUploadProductValues>({
    mode: "onChange",
    defaultValues: {
      itemImage: "",
      itemName: "",
      price: undefined,
      link: "",
    },
    resolver: yupResolver<any>(UPLOAD_SCHEMA.product),
  });
  const { previewImage, handleUploadPreviewImage } = useImageUpload(
    setValue,
    "itemImage"
  );

  const [imgRegister, itemNameRegister, linkRegister] = useRegisterFormField(
    register,
    errors,
    ["itemImage", "itemName", "link"]
  );

  const itemImageRegister = {
    ...imgRegister,
    onChange: handleUploadPreviewImage,
  };

  const { mutate } = useUploadProductMutate();

  const handleUploadProduct = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("image", data.itemImage as string | Blob);

    const imageData = await ImageAPI.uploadSingleImage(formData);

    mutate({
      ...data,
      price: +data.price,
      itemImage: "https://api.mandarin.weniv.co.kr/" + imageData.filename,
    });
  });

  return {
    mutate,
    previewImage,
    control,
    isValid,
    itemImageRegister,
    itemNameRegister,
    linkRegister,
    handleUploadProduct,
  };
};
