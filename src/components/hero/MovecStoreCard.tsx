import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

/**
 * MovecStoreCard
 * -----------------------------------------------------------------------
 * Compact floating card for the hero section, stacked above the
 * IspPlatformCard. Promotes the Movec Store (CCTV, routers & WiFi gear,
 * Starlink kits) and links to the contact page to order.
 * -----------------------------------------------------------------------
 */
const MovecStoreCard = () => {
  return (
    <div
      className="
        relative
        w-full
        sm:w-96
        h-44
        overflow-hidden
        shadow-2xl
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]">
      <img
        src="/images/pexels-wifi6-router-32698507.jpg"
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white from-40% via-white/80 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-center p-6">
        <span className="text-orange-500 font-semibold uppercase tracking-wider text-xs">
          Movec Store
        </span>
        <h3 className="mt-2 text-slate-900 font-bold text-lg leading-snug">
          CCTV, routers & Starlink kits
        </h3>
        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
          The same equipment our team installs every day.
        </p>
        <Link
          to="/contact"
          className="
            mt-3
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            bg-orange-500
            hover:bg-orange-600
            transition-colors
            duration-200
            w-fit">
          Contact us to order
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
};

export default MovecStoreCard;
