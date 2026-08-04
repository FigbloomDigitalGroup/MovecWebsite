import ItSupportFeatures from "../../dummydata/ItSupportFeatures";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import IspFeature from "../../components/cards/IspFeature";


const ItSupport = () => {
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
          backgroundImage: "url('/images/geralt-keyboard-3685823.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            IT Support & Networking
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Dependable IT support,
            <span className="text-orange-500"> whenever you need it</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            From network setup to day-to-day troubleshooting, we keep your
            systems running smoothly so your team can stay focused.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="itsupport"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            title="Reliable support,"
            span=" for your entire network"
            description="From setup to ongoing maintenance, we handle the IT infrastructure behind your business so you don't have to."/>

          {/* Feature Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6">
            {ItSupportFeatures.map((feature, index) => (
              <IspFeature key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ItSupport;