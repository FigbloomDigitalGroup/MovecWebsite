import { useState, useEffect, type ReactNode } from "react";

interface StreamingListProps {
  items: ReactNode[];
  delay?: number; // milliseconds between items
  className?: string;
  itemClassName?: string;
}

const StreamingList = ({
  items,
  delay = 150,
  className = "",
  itemClassName = "",
}: StreamingListProps) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < items.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [visibleCount, items.length, delay]);

  return (
    <div className={className}>
      {items.slice(0, visibleCount).map((item, index) => (
        <div
          key={index}
          className={`
            ${itemClassName}
            animate-fade-in-up
          `}
          style={{
            animation: `fadeInUp 0.5s ease-out forwards`,
          }}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default StreamingList;
