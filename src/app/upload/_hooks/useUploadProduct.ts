"use client";

import { useRegisterFormField } from "@/app/(auth)/_hooks";
import { useForm } from "react-hook-form";
import { useUploadProductMutate } from "../_states";
import { yupResolver } from "@hookform/resolvers/yup";
import { UPLOAD_SCHEMA } from "../_constants";
import { ImageAPI } from "@/_apis";

type UseUploadProductValues = {
  itemImage: File;
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
      itemImage: undefined,
      itemName: "",
      price: undefined,
      link: "",
    },
    resolver: yupResolver<any>(UPLOAD_SCHEMA.product),
  });

  const [itemImageRegister, itemNameRegister, linkRegister] =
    useRegisterFormField(register, errors, ["itemImage", "itemName", "link"]);

  const { mutate } = useUploadProductMutate();

  const handleUploadProduct = handleSubmit(async (data) => {
    const imageData = await ImageAPI.uploadSingleImage(data.itemImage);
    if (!Array.isArray(imageData)) {
      mutate({
        ...data,
        price: +data.price,
        itemImage: "https://api.mandarin.weniv.co.kr/" + imageData.filename,
      });
    }
  });

  return {
    mutate,
    setValue,
    control,
    isValid,
    itemImageRegister,
    itemNameRegister,
    linkRegister,
    handleUploadProduct,
  };
};
