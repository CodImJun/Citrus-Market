"use client";

import { useUploadImage } from "@/_hooks";
import { useUploadPost } from "../../_hooks/useUploadPost";
import { PostContentTextarea } from "../PostContentTextarea";
import { Header, ImageUploadButton } from "@/_components";
import { ImagePreviewList } from "../ImagePreviewList";

export const UploadPostView = () => {
  const {
    isValid,
    setValue,
    imageRegister,
    contentRegister,
    handleUploadPost,
  } = useUploadPost();
  const { images, handleChangeImage, handleRemoveImage } = useUploadImage({
    setValue,
  });

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
          {...Object.assign(imageRegister, { onChange: handleChangeImage })}
        />
      </main>
    </>
  );
};
