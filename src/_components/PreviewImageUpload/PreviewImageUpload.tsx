"use client";

import { ImageUploadButton } from "../ImageUploadButton";
import { useImageUpload } from "@/_hooks";
import { FieldValues } from "react-hook-form";
import { PreviewImageUploadProps } from "./PreviewImageUpload.types";
import { useState } from "react";

export const PreviewImageUpload = <T extends FieldValues>({
  layout,
  register,
  setValue,
}: PreviewImageUploadProps<T>) => {
  const [previewImage, setPreviewImage] = useState(
    layout === "profile" ? "/basic-profile-img.png" : ""
  );

  const { handleUploadPreviewImage } = useImageUpload({
    setValue,
    setPreviewImage,
    fieldName: "itemImage",
  });

  const LAYOUT =
    layout === "profile"
      ? "w-[11rem] h-[11rem] rounded-full"
      : "w-[32.2rem] h-[20.4rem] rounded-[1rem]";

  const BUTTON_POSITION =
    layout === "profile"
      ? "right-0 bottom-0"
      : "right-[1.2rem] bottom-[1.2rem]";

  return (
    <div
      className={`${LAYOUT} relative mb-[1.4rem] bg-grey-300`}
      style={{
        backgroundImage: previewImage ? `url(${previewImage})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <ImageUploadButton
        position={BUTTON_POSITION}
        {...Object.assign(register, {
          ...register,
          onChange: handleUploadPreviewImage,
        })}
      />
    </div>
  );
};
