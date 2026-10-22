import { FaArrowUpRightFromSquare } from "react-icons/fa6";

/**
 * IspPlatformCard
 * -----------------------------------------------------------------------
 * Floating card for the hero section — the video that used to play
 * across the whole hero background now plays inside this card instead,
 * with a short pitch for the ISP platform on top of it.
 * -----------------------------------------------------------------------
 */
const IspPlatformCard = () => {
  return (
    <div
      className="
        relative
        w-full
        sm:w-96
        h-80
        overflow-hidden
        shadow-2xl
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover">
        <source src="/video/141445-777657273.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <span className="text-orange-500 font-semibold uppercase tracking-wider text-xs">
          Our ISP Platform
        </span>
        <h3 className="mt-2 text-white font-bold text-lg leading-snug">
          Movec Connect | Advanced ISP Management
        </h3>
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          The complete management system for ISPs. Automate your billing,
          manage your routers, and grow your customer base without the
          daily stress.
        </p>
        <a
          href="https://movecconnect.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-white
            hover:text-orange-500
            transition-colors
            duration-200
            w-fit">
          movecconnect.com
          <FaArrowUpRightFromSquare className="text-xs" />
        </a>
      </div>
    </div>
  );
};

export default IspPlatformCard;
