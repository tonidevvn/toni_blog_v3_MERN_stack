import { Image, buildSrc } from "@imagekit/react";
import { useState, useRef, useCallback } from "react";

export const IKImage = ({ src, w, h, alt, ...rest }) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const hidePlaceholder = () => setShowPlaceholder(false);

  const imgRef = useCallback((img) => {
    if (!img) return; // unmount

    if (img.complete) {
      hidePlaceholder();
      return;
    }
  }, []);

  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      {...rest}
      loading="lazy"
      alt={alt}
      width={w}
      height={h}
      transformation={[{ width: w, height: h, quality: 80 }]}
    />
  );
};
