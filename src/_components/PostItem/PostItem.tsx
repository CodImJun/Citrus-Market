import Image from "next/image";
import { ImageWithFallback } from "../ImageWithFallback";
import { PostType } from "@/_types";
import { createImageURL } from "@/_utils";
import { PostItemProps } from "./PostItem.types";
import { format } from "date-fns/format";
import { useLiked } from "@/_hooks";

// TODO: Add Delete / Edit Function
export const PostItem = ({ type, ...props }: PostItemProps) => {
  return type === "list" ? (
    <DefaultPost {...props} />
  ) : (
    <AlbumPost {...props} />
  );
};

const DefaultPost = (props: PostType) => {
  const { mutate: handleLiked } = useLiked();
  const createdAt = new Date(props.createdAt);
  const imgSrcArray = props.image.split(",").map((src) => src.trim());

  return (
    <article className="grid grid-cols-[4.2rem_1fr] gap-x-[1.2rem] gap-y-[1.6rem]">
      <div className="row-span-5">
        <div className="relative w-[4.2rem] h-[4.2rem]">
          <ImageWithFallback
            src={props.author.image}
            fallbackSrc="/basic-profile-img.png"
            alt="profile image"
            fill
            sizes="100%"
            priority
          />
        </div>
      </div>
      <div className="relative">
        <p className="text-14-500-17.5 text-black">{props.author.username}</p>
        <p className="text-12-400-14 text-grey-700">
          @{props.author.accountname}
        </p>
        <button
          type="button"
          className="absolute w-[1.8rem] h-[1.8rem] right-0 top-0"
        >
          <Image
            src="/s-icon-more-vertical.png"
            alt="feed more button"
            fill
            sizes="100%"
            priority
          />
        </button>
      </div>
      <div className="overflow-hidden">
        <p className="text-14-400-17.5 text-black">{props.content}</p>
      </div>
      <div className="overflow-x-scroll">
        <ul className="flex gap-[0.8rem] min-w-max">
          {imgSrcArray.map((img, idx) => (
            <li
              key={img + idx}
              className={`relative ${
                imgSrcArray.length === 1
                  ? "w-full h-[22.8rem]"
                  : "w-[16.8rem] h-[12.6rem]"
              }`}
            >
              <ImageWithFallback
                src={createImageURL(img)}
                fallbackSrc="/icon-img.png"
                alt="content image"
                fill
                sizes="100%"
                priority
                className="rounded-[1rem]"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-[1.6rem] text-12-400-12 text-grey-700 mt-[-0.4rem]">
        <div
          className="flex gap-x-[0.6rem] items-center"
          onClick={(e) => {
            e.stopPropagation();
            handleLiked({ post_id: props.id, liked: props.hearted });
          }}
        >
          <Image
            src={!props.hearted ? "/icon-heart.png" : "/icon-heart-active.png"}
            alt="hearted"
            width={20}
            height={20}
            priority
          />
          {props.heartCount}
        </div>
        <div className="flex gap-x-[0.6rem] items-center">
          <Image
            src="/icon-message-circle.png"
            alt="comment"
            width={20}
            height={20}
            priority
          />
          {props.commentCount}
        </div>
      </div>
      <div className="text-10-400-12 text-grey-700">
        {format(createdAt, "yyyy년 MM월 dd일")}
      </div>
    </article>
  );
};

const AlbumPost = (props: PostType) => {
  const imgSrcArray = props.image.split(",").map((src) => src.trim());

  return (
    <article className="relative w-[11.4rem] h-[11.4rem]">
      <ImageWithFallback
        src={createImageURL(imgSrcArray[0])}
        fallbackSrc="/icon-img.png"
        alt="preview image"
        fill
        sizes="100%"
      />
      {imgSrcArray.length > 1 && (
        <Image
          src="/icon-img-layers.png"
          alt="multiple images"
          width={20}
          height={20}
          priority
          className="absolute top-[0.6rem] right-[0.6rem]"
        />
      )}
    </article>
  );
};
