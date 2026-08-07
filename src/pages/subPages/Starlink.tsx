import ContentHeader from "../../components/ContentHeader/ContentHeader";
import StarlinkFeatures from "../../dummydata/StarlinkFeatures";
import { Seo } from "../../components/SEO/Seo";
import StarlinkCard from "../../components/cards/StarLink";

const Starlink = () => {
  return (
    <>
      <Seo
        title="Starlink Installation & Signal Optimization | Movec Connect"
        description="Professional Starlink satellite installation, dish alignment, network integration, and high-speed internet optimization for homes, businesses, and ISPs."
        path="/starlink"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Starlink Satellite Installation & Setup",
          "serviceType": "Satellite Broadband Installation",
          "provider": {
            "@type": "Organization",
            "name": "Movec Connect",
            "url": "https://movec-landing-page-xfza-git-main-maina-gits-projects.vercel.app"
          },
          "description": "Professional Starlink satellite dish mounting, cabling, Wi-Fi networking, and signal optimization."
        }}
      />
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
          backgroundImage: "url('/images/geralt-businessman-3075828.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Starlink Installation
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Fast, reliable internet,
            <span className="text-orange-500"> anywhere you are</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Professional Starlink setup and configuration to get you online
            quickly, with expert placement and signal optimization.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="starlink"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            title="Everything covered,"
            span=" from setup to support"
            description="From site assessment to full installation, we handle every step of getting you connected via Starlink." />

          {/* Feature Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-2
              gap-6">
            {StarlinkFeatures.map((feature, index) => (
              <StarlinkCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Starlink;