"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallback = {
  fallbackSrc: string;
} & ImageProps;

export const ImageWithFallback = ({
  fallbackSrc,
  ...props
}: ImageWithFallback) => {
  const { src, alt, ...rest } = props;
  const [imageUrl, setImageUrl] = useState(
    String(src).includes("weniv") ? src : fallbackSrc
  );

  const handleChangeImage = () => setImageUrl(fallbackSrc);

  return (
    <Image src={imageUrl} alt={alt} onError={handleChangeImage} {...rest} />
  );
};
