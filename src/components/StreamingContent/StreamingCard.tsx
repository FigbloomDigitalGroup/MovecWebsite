import { useState, useEffect, useRef, type ReactNode } from "react";

interface StreamingCardProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  className?: string;
  duration?: number;
}

const StreamingCard = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 800,
}: StreamingCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 50px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformStyles = () => {
    switch (direction) {
      case "left":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-16 md:-translate-x-24";
      case "right":
        return isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-16 md:translate-x-24";
      case "fade":
        return isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95";
      case "up":
      default:
        return isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12";
    }
  };

  return (
    <div
      ref={cardRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={`
        ${className}
        transition-[transform,opacity]
        transform-gpu
        will-change-transform
        ${getTransformStyles()}
      `}>
      {children}
    </div>
  );
};

export default StreamingCard;
