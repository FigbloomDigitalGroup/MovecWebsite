import SoftwareFeatures from "../../dummydata/SoftwareFeatures";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import IspFeature from "../../components/cards/IspFeature";


const Software = () => {
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
          backgroundImage: "url('/images/innovalabs-software-development-6523979.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Software Engineering
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Custom software,
            <span className="text-orange-500"> built around your business</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            From concept to deployment, we design and build software tailored to
            your workflows — scalable, reliable and made to grow with you.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="software"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            title="What we build,"
            span=" end to end"
            description="From planning and architecture to delivery and support, we handle every stage of your software project." />

          {/* Feature Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6">
            {SoftwareFeatures.map((feature, index) => (
              <IspFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Software;