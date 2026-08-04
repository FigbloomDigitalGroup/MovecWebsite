import { type ReactNode } from "react";
import Spinner from "../Loading/Spinner";

interface ButtonWithLoadingProps {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

const ButtonWithLoading = ({
  children,
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonWithLoadingProps) => {
  const baseClasses = `
    group
    inline-flex
    items-center
    justify-center
    gap-2
    px-8
    py-3.5
    rounded-lg
    font-semibold
    transition-all
    duration-300
    disabled:opacity-60
    disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: `
      bg-[#10B982]
      hover:bg-[#0ea374]
      text-white
    `,
    secondary: `
      bg-orange-500
      hover:bg-orange-600
      text-white
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {loading ? (
        <>
          <Spinner size="sm" color="white" />
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonWithLoading;
