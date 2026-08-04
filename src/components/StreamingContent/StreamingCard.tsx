import { useState, useEffect, type ReactNode } from "react";

interface StreamingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const StreamingCard = ({
  children,
  delay = 0,
  className = "",
}: StreamingCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`
        ${className}
        transition-all
        duration-500
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
      `}>
      {isVisible && children}
    </div>
  );
};

export default StreamingCard;
