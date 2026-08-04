import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover">
        <source src="/video/141445-777657273.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />

      <div className="relative z-10 w-full px-6 flex justify-start">
        <div className="max-w-5xl text-start mx-auto px-8">
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-6xl font-bold leading-tight text-white">
            Grow your ISP business{" "}
            <span className="text-orange-500">
              without the
              <br />
              hustle
            </span>
          </h1>
          <div className="w-24 h-1 bg-orange-500 my-6" />
          <p className="max-w-2xl text-lg leading-8 text-gray-300">
            The complete management system for ISPs. Automate your billing,
            manage your routers and grow your customer base without the
            daily stress backed by the same team handling your networking,
            security and connectivity infrastructure.
          </p>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

