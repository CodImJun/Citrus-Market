"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { ImageUploadButtonProps } from "./ImageUploadButton.types";

export const ImageUploadButton = forwardRef<
  HTMLInputElement,
  ImageUploadButtonProps
>(({ position, multiple = false, ...props }, ref) => {
  const pathname = usePathname();
  const BOX_SIZE =
    pathname === "/upload/post" ? `w-[5rem] h-[5rem]` : `w-[3.6rem] h-[3.6rem]`;
  const PADDING = pathname === "/upload/post" ? "p-[1.1rem]" : "p-[0.7rem]";

  return (
    <div
      className={`absolute cursor-pointer bg-primary rounded-full ${BOX_SIZE} ${position}`}
    >
      <label htmlFor="upload-image" className="relative w-fit h-fit">
        <Image
          src="/icon-upload.png"
          alt="image upload"
          width="100"
          height="100"
          priority
          className={`cursor-pointer ${PADDING}`}
        />
      </label>
      <input
        ref={ref}
        type="file"
        id="upload-image"
        className="hidden"
        accept="image/jpg, image/gif, image/png, image/bmp, image/tif, image/heic"
        {...props}
      />
    </div>
  );
});

ImageUploadButton.displayName = "ImageUploadButton";
