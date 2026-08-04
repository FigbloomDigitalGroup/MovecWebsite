interface Props {
  eyebrow?: string;
  title: string;
  span: string;
  description: string;
  variant?: "light" | "dark";
  align?: "left" | "center";
}

const ContentHeader = ({
  eyebrow,
  title,
  span,
  description,
  variant = "light",
  align = "left",
}: Props) => {
  const isDark = variant === "dark";
  const isCenter = align === "center";

  return (
    <div
      className={`
        max-w-3xl
        mb-14
        ${isCenter ? "text-center mx-auto" : "text-start"}
      `}>
      {eyebrow && (
        <span
          className="
            text-orange-500
            font-semibold
            uppercase
            tracking-wider
            text-sm">
          {eyebrow}
        </span>
      )}
      <h2
        className={`
          mt-4
          text-4xl
          md:text-5xl
          font-bold
          transition-colors
          ${isDark ? "text-white" : "text-slate-900 dark:text-white"}`}>
        {title}
        <span className="text-[#10B982]"> {span}</span>
      </h2>
      <p
        className={`
          mt-5
          leading-7
          transition-colors
          ${isCenter ? "mx-auto" : ""}
          max-w-2xl
          ${isDark ? "text-gray-300" : "text-slate-600 dark:text-slate-400"}
        `}>
        {description}
      </p>

      <div
        className={`
          w-24
          h-1
          bg-orange-500
          my-6
          ${isCenter ? "mx-auto" : ""}
        `}
      />
    </div>
  );
};

export default ContentHeader;


















