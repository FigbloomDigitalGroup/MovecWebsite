import { FaCheck } from "react-icons/fa";

interface BillingCardProps {
    feature: {
        title: string;
        description: string;
        points: string[];
    };
}

const BillingCard = ({ feature }: BillingCardProps) => {
    return (
        <div
            className="
        h-full
        bg-white
        dark:bg-[#1A1A1A]
        border border-gray-200
        dark:border-white/10
        rounded-lg
        p-8">

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
                {feature.description}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 dark:border-white/10 pt-5">
                <ul className="space-y-3">
                    {feature.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span
                                className="
                  mt-0.5
                  shrink-0
                  w-5 h-5
                  flex items-center justify-center
                  rounded-full
                  bg-orange-50
                  dark:bg-orange-500/10
                  text-orange-500">
                                <FaCheck className="text-[10px]" />
                            </span>
                            <span className="text-sm text-gray-700 dark:text-slate-300">
                                {point}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BillingCard;