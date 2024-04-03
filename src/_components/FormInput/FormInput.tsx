import { forwardRef } from "react";
import { FormInputProps } from "./FormInput.types";
import { changeLabelNameToText } from "./FormInput.utils";
import Image from "next/image";

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ labelName, error, ...props }, ref) => {
    if (labelName === "image") {
      console.log(props);
      return (
        <label
          htmlFor={labelName}
          className="relative w-fit mx-auto mb-[1.6rem]"
        >
          <Image
            src="/basic-profile-img.png"
            alt="basic profile image"
            width={110}
            height={110}
            priority
          />
          <Image
            src="/upload-file.png"
            alt="profile upload image"
            width={36}
            height={36}
            className="absolute right-0 bottom-0"
            priority
          />
          <input
            ref={ref}
            type="file"
            accept="image/jpg, image/gif, image/png, image/bmp, image/tif, image/heic"
            className="hidden"
            {...props}
          />
        </label>
      );
    }

    return (
      <div className="flex flex-col gap-y-2 w-full">
        <label
          htmlFor={labelName}
          className="text-sm font-medium text-gray-700"
        >
          {changeLabelNameToText(labelName)}
        </label>
        <input
          ref={ref}
          id={labelName}
          className={`text-14-400-14 text-black py-[0.8rem] border-b-[0.1rem] border-solid ${
            error ? "border-red" : "border-grey-300"
          } focus:border-primary`}
          {...props}
        />
        <p className="text-12-400-14 text-red h-[1.4rem] pt-[0.2rem]">
          {error}
        </p>
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
