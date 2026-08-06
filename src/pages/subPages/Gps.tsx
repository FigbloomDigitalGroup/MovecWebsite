import GpsFeatures from "../../dummydata/GpsFeatures";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import CardFeatureII from "../../components/cards/CardFeatureII";
import { Seo } from "../../components/SEO/Seo";

const Gps = () => {
  return (
    <>
      <Seo
        title="GPS Fleet Tracking & Vehicle Monitoring | Movec Connect"
        description="Real-time GPS vehicle tracking, fuel monitoring, route optimization, and geofencing for corporate fleets, motorbikes, and commercial transport."
        path="/gps"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "GPS Fleet Tracking & Telematics",
          "serviceType": "Fleet Telematics & Vehicle Tracking",
          "provider": {
            "@type": "Organization",
            "name": "Movec Connect",
            "url": "https://movec-landing-page-xfza-git-main-maina-gits-projects.vercel.app"
          },
          "description": "Real-time GPS vehicle tracking, speed alerts, fuel management, and automated fleet reports."
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
          backgroundImage: "url('/images/as_photography-digital-marketing-1725340.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            GPS Fleet Tracking
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Know where your fleet is,
            <span className="text-orange-500"> at all times</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Real-time GPS tracking to help you monitor vehicles, improve
            routes and keep your fleet running safely and efficiently.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="gps"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            title="Full visibility,"
            span=" over every vehicle"
            description="From live tracking to driver behavior insights, our fleet tracking tools help you cut costs and stay in control." />

          {/* Feature Cards */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6">
            {GpsFeatures.map((feature, index) => (
              <CardFeatureII key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gps;
