interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card";
}

const Skeleton = ({ className = "", variant = "text" }: SkeletonProps) => {
  const baseClasses = "animate-pulse bg-slate-200 dark:bg-slate-700";

  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-xl",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
