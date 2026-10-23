import { useEffect, useState } from "react";

const DEFAULT_SLIDES = [
  "/images/geralt-cloud-3843352_1920.jpg",
  "/images/thedigitalartist-internet-1676139_1920.jpg",
  "/images/geralt-blue-light-1675686_1920.jpg",
  "/images/clarkdonald413-linux-4259595.jpg",
];

const SLIDE_DURATION = 5000;

/**
 * HeroBackgroundSlideshow
 * -----------------------------------------------------------------------
 * Cross-fades between a fixed set of background images — each one fades
 * in over the last rather than sliding/swiping past it. Replaces the
 * hero's old looping video background. Pass `slides` to use a different
 * set of images (e.g. the About page hero).
 * -----------------------------------------------------------------------
 */
interface Props {
  slides?: string[];
}

const HeroBackgroundSlideshow = ({ slides = DEFAULT_SLIDES }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          className={`
            absolute inset-0 h-full w-full object-cover
            transition-opacity duration-[1500ms] ease-in-out
            ${i === index ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
};

export default HeroBackgroundSlideshow;
