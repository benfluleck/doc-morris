"use client";
import Image from "next/image";
import { FC, useState } from "react";

const fallbackSrc = "/fallBack.svg";

interface ImageWithFallbackProps {
  imageSrc: string;
  name: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({
  imageSrc,
  name,
  width,
  height,
  priority,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState(imageSrc);

  return (
    <Image
      {...rest}
      src={imgSrc}
      width={width}
      height={height}
      alt={`${name} image`}
      priority={priority}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;
