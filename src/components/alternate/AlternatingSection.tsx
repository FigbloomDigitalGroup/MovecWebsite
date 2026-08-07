import type { ReactNode } from "react";
import StreamingCard from "../StreamingContent/StreamingCard";

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
          <StreamingCard delay={100} direction={reverse ? "right" : "left"}>
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
          </StreamingCard>

          {/* Image */}
          <StreamingCard delay={250} direction="fade">
            <div className="relative group">
              {/* Ambient Glow Backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500/30 via-[#10B982]/25 to-orange-500/30 rounded-[24px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Image Card Container */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800/80 shadow-2xl bg-slate-900/40 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.015]">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-[400px] md:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle Depth Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </StreamingCard>
        </div>
      </div>
    </section>
  );
};

export default AlternatingSection;