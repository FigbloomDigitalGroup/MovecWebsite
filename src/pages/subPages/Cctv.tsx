import CctvFeatures from "../../dummydata/CctvFeatures";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
//import IspFeature from "../../components/cards/IspFeature";
import CardFeatureII from "../../components/cards/CardFeatureII";


const Cctv = () => {
  return (
    <>
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
          backgroundImage: "url('/images/elasticcomputefarm-cctv-1144366.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            CCTV Security Systems
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Round-the-clock security,
            <span className="text-orange-500"> for total peace of mind</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Professional CCTV installation and monitoring to protect your
            home, business and assets, day and night.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="cctv"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            title="Complete surveillance,"
            span=" tailored to your space"
            description="From site survey to installation and remote monitoring, we cover every part of keeping your property secure." />

          {/* Feature Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6">
            {CctvFeatures.map((feature, index) => (
              <CardFeatureII key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cctv;


