import Tilt from "react-parallax-tilt";
import { FaCheck } from "react-icons/fa6";

interface SolutionsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const SolutionsCard = ({
  icon,
  title,
  description,
  features,
}: SolutionsCardProps) => {
  return (
    <Tilt
      className="group"
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={800}
      transitionSpeed={3000}
      scale={1.0}
      gyroscope={true}>
      <div
        className="
          relative
          bg-gray-200
          rounded-3xl
          dark:bg-gray-900
          cursor-pointer
          p-8
          h-full
          overflow-hidden">
        {/* Bottom Border Animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <div
            className="
              absolute
              inset-0
              bg-orange-500
              scale-x-0
              origin-left
              group-hover:scale-x-100
              transition-transform
              duration-500
            "/>
        </div>

        {/* Icon */}
        <div
          className="
            w-20
            h-20
            rounded-full
            flex
            items-center
            justify-center
            text-3xl
            bg-gray-300
            dark:bg-gray-800
            border
            border-white/10
            mb-6
            text-gray-900
            dark:text-[#10B982]">
          {icon}
        </div>
    
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-4 leading-7 text-gray-600 dark:text-white/70">
          {description}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/80">
              <FaCheck className="text-orange-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Tilt>
  );
};

export default SolutionsCard;