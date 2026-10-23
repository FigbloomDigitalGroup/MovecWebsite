import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import StreamingCard from "../StreamingContent/StreamingCard";
import HeroBackgroundSlideshow from "./HeroBackgroundSlideshow";
import IspPlatformCard from "./IspPlatformCard";
import MovecStoreCard from "./MovecStoreCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen py-32 lg:py-0 flex items-center justify-center overflow-hidden">
      <HeroBackgroundSlideshow />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />

      <div
        className="
          relative z-10 w-full px-6
          flex flex-col lg:flex-row
          items-center lg:items-end
          justify-between
          gap-12
          max-w-7xl mx-auto">
        <div className="max-w-5xl text-start lg:px-8">
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-6xl font-bold leading-tight text-white">
            {/* RED: Grow your ISP business */}
            <StreamingCard delay={150} direction="left" duration={900} className="inline">
              <span>Grow your ISP business </span>
            </StreamingCard>{" "}

            {/* GREEN: without the hustle */}
            <StreamingCard delay={450} direction="left" duration={900} className="inline text-orange-500">
              <span>without</span>
              <br />
              <span>the hustle</span>
            </StreamingCard>
          </h1>

          {/* GREEN ACCENT LINE */}
          <StreamingCard delay={550} direction="left" duration={800}>
            <div className="w-24 h-1 bg-orange-500 my-6" />
          </StreamingCard>

          {/* WHITE: Paragraph description */}
          <StreamingCard delay={750} direction="left" duration={900}>
            <p className="max-w-2xl text-lg leading-8 text-gray-300">
              The complete management system for ISPs. Automate your billing,
              manage your routers and grow your customer base without the
              daily stress backed by the same team handling your networking,
              security and connectivity infrastructure.
            </p>
          </StreamingCard>

          {/* BLUE: CTA Buttons */}
          <StreamingCard delay={1050} direction="left" duration={900}>
            <div className="mt-10 flex flex-wrap justify-start gap-4">
              <Link
                to="/contact"
                className="
                  flex
                  items-center
                  gap-3
                  cursor-pointer
                  px-7
                  py-3
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  font-medium
                  transition-colors
                  duration-200">
                Get Started
                <FaArrowRight />
              </Link>

              <Link
                to="/ispplatform"
                className="
                  px-7
                  py-3
                  cursor-pointer
                  border
                  border-white/40
                  hover:border-white
                  text-white
                  font-medium
                  transition-colors
                  duration-200">
                Explore Platform
              </Link>
            </div>
          </StreamingCard>
        </div>

        <div className="w-full sm:w-auto flex flex-col items-center lg:items-end gap-4">
          <StreamingCard delay={700} direction="right" duration={900} className="w-full sm:w-auto">
            <MovecStoreCard />
          </StreamingCard>
          <StreamingCard delay={850} direction="right" duration={900} className="w-full sm:w-auto">
            <IspPlatformCard />
          </StreamingCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;







