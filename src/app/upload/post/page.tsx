"use client";

import { Header, ImageUploadButton } from "@/_components";
import { useState } from "react";
import { useUploadPost } from "../_hooks/useUploadPost";
import { validateImageInput } from "@/_utils";
import { ImagePreviewList, PostContentTextarea } from "../_component";

const UploadPostPage = () => {
  const {
    isValid,
    setValue,
    imageRegister,
    contentRegister,
    handleUploadPost,
  } = useUploadPost();
  const [images, setImages] = useState<{ file: File; imageUrl: string }[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <>
      <Header isValid={!isValid} uploadEvent={handleUploadPost} />
      <main className="w-full h-full pt-[4.8rem] overflow-y-scroll overflow-x-hidden">
        <form className="relative py-[2rem] px-[1.6rem]">
          <PostContentTextarea register={contentRegister} />
          {images && (
            <ImagePreviewList
              images={images}
              onRemoveImage={handleRemoveImage}
            />
          )}
        </form>
        <ImageUploadButton
          multiple={true}
          position="right-[1.6rem] bottom-[1.6rem]"
          {...Object.assign(imageRegister, { onChange: handleFileChange })}
        />
      </main>
    </>
  );
};

export default UploadPostPage;
