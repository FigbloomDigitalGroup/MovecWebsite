import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface TeamCarouselMember {
  image: string;
  name: string;
  role: string;
  department: string;
}

interface Props {
  members: TeamCarouselMember[];
  interval?: number;
}

const TRANSITION_MS = 700;

// Cards visible at once — matches the old grid (2 / sm:3 / lg:4).
const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  if (window.matchMedia("(min-width: 1024px)").matches) return 4;
  if (window.matchMedia("(min-width: 640px)").matches) return 3;
  return 2;
};

/**
 * TeamCarousel
 * -----------------------------------------------------------------------
 * Auto-advancing carousel that slides the team cards left → right, one
 * card at a time, looping forever. The member list is rendered twice so
 * the loop can jump back seamlessly (with the transition disabled) once
 * it reaches either copy's edge. Pauses on hover/focus.
 * -----------------------------------------------------------------------
 */
const TeamCarousel = ({ members, interval = 3000 }: Props) => {
  const count = members.length;
  const [visible, setVisible] = useState(getVisibleCount);
  const [offset, setOffset] = useState(count);
  const [animate, setAnimate] = useState(true);
  const [sliding, setSliding] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (sliding || !animate) return;
      setSliding(true);
      setOffset((o) => o + dir);
    },
    [sliding, animate]
  );

  // Moving the track by -1 makes the cards travel left → right.
  useEffect(() => {
    if (paused || count <= visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => step(-1), interval);
    return () => clearInterval(id);
  }, [paused, count, visible, interval, step]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // Ignore transitions bubbling up from the cards (e.g. hover shadow).
    if (e.target !== e.currentTarget) return;
    setSliding(false);
    // Out of the first copy's range → jump to the identical spot in the other copy.
    if (offset < 1 || offset > count) {
      setAnimate(false);
      setOffset(offset < 1 ? offset + count : offset - count);
    }
  };

  // Re-enable the transition on the frame after a silent jump.
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimate(true))
    );
    return () => cancelAnimationFrame(id);
  }, [animate]);

  if (count === 0) return null;

  const loop = count > visible;
  const items = loop ? [...members, ...members] : members;
  const shift = loop ? offset : 0;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}>
      <div className="overflow-hidden py-4">
        <div
          className="flex"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${(shift * 100) / visible}%)`,
            transition: animate
              ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
          }}>
          {items.map((member, index) => (
            <div
              key={index}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / visible}%` }}
              aria-hidden={loop && (index < shift || index >= shift + visible)}>
              <div
                className="
                  h-full
                  flex flex-col
                  items-center
                  text-center
                  bg-[#f5f5f5]
                  dark:bg-white/5
                  border
                  border-gray-200
                  dark:border-white/10
                  rounded-2xl
                  p-5
                  shadow-sm
                  hover:shadow-lg
                  transition-shadow
                  duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-24 h-24 sm:w-28 sm:h-28 border-4 border-orange-500 aspect-square object-cover rounded-full shadow-lg" />
                <h3 className="mt-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {member.role}
                </p>
                <span className="mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#10B982]">
                  {member.department}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {loop && (
        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Previous team member"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors">
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Next team member"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 text-slate-700 dark:text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors">
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
