import Image from "next/image";
import { ImagePreviewListProps } from "./ImagePreviewList.types";

export const ImagePreviewList = ({
  images,
  onRemoveImage,
}: ImagePreviewListProps) => {
  return (
    <div className="overflow-x-scroll mt-[1.6rem] ml-[2.4rem]">
      <ul className="flex gap-x-[0.8rem] min-w-max p-[1.2rem]">
        {images.map((image, index) => (
          <li
            key={image.imageUrl}
            className="relative w-[16.8rem] h-[12.6rem] rounded-[1rem] shadow-md"
          >
            <Image
              src={image.imageUrl}
              alt="post image"
              fill
              priority
              className="rounded-[1rem]"
            />
            <button
              type="button"
              className="absolute right-[0.6rem] top-[0.6rem] w-[2.2rem] h-[2.2rem]"
              onClick={() => onRemoveImage(index)}
            >
              <Image
                src="/icon-delete.png"
                fill
                sizes="100%"
                alt="delete"
                priority
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
