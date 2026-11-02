
import { Features } from "../dummydata/Feaatures";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import IspFeature from "../components/cards/IspFeature";
import { Seo } from "../components/SEO/Seo";
import { FaArrowRight } from "react-icons/fa";

const IspPlatform = () => {
  return (
    <>
    <Seo
        title="ISP Platform | Compare Internet Providers - Movec"
        description="Browse and compare internet service providers on Movec's platform — check speeds, prices, and coverage in your area before you sign up."
        path="/ispplatform"/>
      {/* Hero Section */}
      <section
        className="
          relative
          py-32
          bg-cover
          bg-center
          bg-fixed
          flex
          items-center"
        style={{
          backgroundImage: "url('images/charlvera-computer-8589000.png  ')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
      
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            ISP Platform
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Everything you need to
            <span className="text-[#10B982]"> run your ISP</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Manage customers, billing and your network from one powerful
            platform built to simplify ISP operations, improve reliability
            and scale your internet business.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>

      </section>

      {/* Why We Built The ISP Platform */}
      <section
        id="isp-platform-story"
        className="
          py-20
          bg-white
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
              Why We Built It
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Our ISP Platform started with
              <span className="text-[#10B982]"> a problem we kept hearing</span>
            </h2>
            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              ISP operators kept telling us the same things: reconciling
              M-Pesa payments by hand, juggling a different dashboard for
              every router brand on the network, and no real way to see
              what was actually happening on their network in real time.
              So we built Movec Connect — one platform for billing,
              routers and monitoring, instead of five.
            </p>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              It's built by the same team handling networking, security
              and connectivity work for our clients every day — so every
              feature comes from a real operational headache, not a guess.
            </p>
            <a
              href="https://movecconnect.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
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
                duration-200
                w-fit">
              Visit movecconnect.com
              <FaArrowRight />
            </a>
          </div>

          <div className="relative h-80 lg:h-96 overflow-hidden rounded-sm [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="w-full h-full object-cover">
              <source src="/video/141445-777657273.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="ispplatform"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            title="Powerful features,"
            span=" built for ISPs"
            description="Every tool you need to run day to day operations  from billing to network monitoring  packed into one platform."/>

          {/* Feature Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6">
            {Features.map((feature, index) => (
              <IspFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IspPlatform;









