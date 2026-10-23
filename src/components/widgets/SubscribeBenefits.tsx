import { FaCheckCircle } from "react-icons/fa";

// What subscribers get, shown next to the newsletter form (News page + footer).
export const subscribeBenefits = [
  "The latest technology updates, trends and innovations.",
  "Milestones and insights from tech leaders like Elon Musk, Mark Zuckerberg, Jensen Huang (NVIDIA CEO) and Sam Altman (OpenAI CEO).",
  "Updates on developments across ChatGPT, Anthropic, DeepSeek and other AI platforms.",
  "Practical cybersecurity tips on protecting your data and staying secure online.",
];

interface Props {
  compact?: boolean;
}

const SubscribeBenefits = ({ compact = false }: Props) => {
  return (
    <ul
      className={`
        grid
        text-left
        ${compact ? "sm:grid-cols-2 gap-x-6 gap-y-2" : "sm:grid-cols-2 gap-4"}
      `}>
      {subscribeBenefits.map((benefit) => (
        <li
          key={benefit}
          className={
            compact
              ? "flex items-start gap-2 text-xs text-slate-400 leading-relaxed"
              : "flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 leading-relaxed"
          }>
          <FaCheckCircle
            className={`shrink-0 text-[#10B982] ${compact ? "mt-0.5" : "mt-1"}`} />
          {benefit}
        </li>
      ))}
    </ul>
  );
};

export default SubscribeBenefits;
