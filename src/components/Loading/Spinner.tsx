interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "orange" | "green" | "white";
}

const Spinner = ({ size = "md", color = "orange" }: SpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses = {
    orange: "border-orange-500",
    green: "border-[#10B982]",
    white: "border-white",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        border-4
        ${colorClasses[color]}
        border-t-transparent
        rounded-full
        animate-spin
      `}
      role="status"
      aria-label="Loading"
    />
  );
};

export default Spinner;
