import Image from "next/image";
import { ImageProps } from "next/image";
import { useState } from "react";

interface HoverImageProps {
  alt: string;
  hovered: ImageProps["src"];
  image: ImageProps["src"];
}

export const useOnHoverImage = ({ hovered, image, alt }: HoverImageProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{ width: "250px", height: "250px" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <Image src={image} alt={alt} />
      ) : (
        <Image src={hovered} alt={alt} />
      )}
    </div>
  );
};
