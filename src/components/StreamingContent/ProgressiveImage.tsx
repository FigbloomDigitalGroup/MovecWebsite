import { useState, useEffect } from "react";

interface ProgressiveImageProps {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
}

const ProgressiveImage = ({
  src,
  placeholderSrc,
  alt,
  className = "",
}: ProgressiveImageProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      <img
        src={imgSrc}
        alt={alt}
        className={`
          ${className}
          transition-all
          duration-500
          ${isLoading ? "blur-sm scale-105" : "blur-0 scale-100"}
        `}
        loading="lazy"
      />
      {isLoading && (
        <div
          className="
            absolute
            inset-0
            bg-slate-200
            dark:bg-slate-700
            animate-pulse"
        />
      )}
    </div>
  );
};

export default ProgressiveImage;
