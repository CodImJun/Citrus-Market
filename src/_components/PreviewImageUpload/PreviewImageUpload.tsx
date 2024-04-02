"use client";

import { ImageUploadButton } from "../ImageUploadButton";
import { useUploadImage } from "@/_hooks";
import { FieldValues } from "react-hook-form";
import { PreviewImageUploadProps } from "./PreviewImageUpload.types";

export const PreviewImageUpload = <T extends FieldValues>({
  layout,
  register,
  setValue,
}: PreviewImageUploadProps<T>) => {
  const { images, handleChangeImage } = useUploadImage({
    setValue,
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
        backgroundImage: images[0] ? `url(${images[0]})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <ImageUploadButton
        position={BUTTON_POSITION}
        {...Object.assign(register, {
          ...register,
          onChange: handleChangeImage,
        })}
      />
    </div>
  );
};
