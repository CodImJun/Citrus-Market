import { ImageUploadButton } from "../ImageUploadButton";
import { useUploadImage } from "@/_hooks";
import {
  FieldValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";

export const ProfileImageInput = <T extends FieldValues>({
  register,
  setValue,
}: {
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<T>;
}) => {
  const { images, handleChangeImage } = useUploadImage({
    setValue,
  });

  return (
    <div
      className="relative w-[11rem] h-[11rem] rounded-full m-auto mb-[1.4rem]"
      style={{
        backgroundImage: images[0]
          ? `url(${images[0].imageUrl})`
          : "url(/basic-profile-img.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <ImageUploadButton
        position="right-0 bottom-0"
        {...Object.assign(register, {
          ...register,
          onChange: handleChangeImage,
        })}
      />
    </div>
  );
};
