import { type ReactNode } from "react";
import StreamingCard from "./StreamingCard";

interface StreamingGridProps {
  children: ReactNode[];
  staggerDelay?: number; // milliseconds between each card
  className?: string;
  itemClassName?: string;
}

const StreamingGrid = ({
  children,
  staggerDelay = 100,
  className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  itemClassName = "",
}: StreamingGridProps) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <StreamingCard
          key={index}
          delay={index * staggerDelay}
          className={itemClassName}>
          {child}
        </StreamingCard>
      ))}
    </div>
  );
};

export default StreamingGrid;
