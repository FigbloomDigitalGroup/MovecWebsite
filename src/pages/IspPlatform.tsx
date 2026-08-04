
import { Features } from "../dummydata/Feaatures";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import IspFeature from "../components/cards/IspFeature";
import { Seo } from "../components/SEO/Seo";

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









