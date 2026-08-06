import type { ReactNode } from "react";

interface AlternatingSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  span: string;
  description: string;
  image: string;
  reverse?: boolean;
  children?: ReactNode;
  bg?: "light" | "dark";
}

const AlternatingSection = ({
  id,
  eyebrow,
  title,
  span,
  description,
  image,
  reverse = false,
  children,
  bg = "light",
}: AlternatingSectionProps) => {
  const isDark = bg === "dark";

  return (
    <section
      id={id}
      className={`
        py-24
        ${isDark ? "bg-black" : "bg-doodle"}
      `}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`
            grid
            lg:grid-cols-2
            gap-14
            items-center
            ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
          `}>
          {/* Text Content */}
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              {eyebrow}
            </span>
            <h2
              className={`
                mt-4
                text-4xl
                md:text-5xl
                font-bold
                ${isDark ? "text-white" : "text-slate-900 dark:text-white"}
              `}>
              {title}
              <span className="text-[#10B982]"> {span}</span>
            </h2>

            <p
              className={`
                mt-5
                leading-7
                ${isDark ? "text-gray-400" : "text-slate-600 dark:text-slate-400"}
              `}>
              {description}
            </p>

            <div className="w-24 h-1 bg-orange-500 my-6" />
            {children}
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-[#10B982]/10 rounded-2xl -z-10" />
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-[420px] object-cover [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternatingSection;