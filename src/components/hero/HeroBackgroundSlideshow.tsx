import { useEffect, useState } from "react";

const SLIDES = [
  "/images/pexels-margo-evardson-2158292018-37166577.jpg",
  "/images/u_grs7xmagi8-ai-generated-9449768.jpg",
  "/images/geralt-binary-3725329.jpg",
  "/images/pexels-rafa-sants-3818665-5790645.jpg",
  "/images/innovalabs-software-development-6523979.jpg",
  "/images/webtechexperts-cctv-surveillance-camera-7267551_1920.jpg",
];

const SLIDE_DURATION = 5000;

/**
 * HeroBackgroundSlideshow
 * -----------------------------------------------------------------------
 * Cross-fades between a fixed set of background images — each one fades
 * in over the last rather than sliding/swiping past it. Replaces the
 * hero's old looping video background.
 * -----------------------------------------------------------------------
 */
const HeroBackgroundSlideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {SLIDES.map((src, i) => (
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
