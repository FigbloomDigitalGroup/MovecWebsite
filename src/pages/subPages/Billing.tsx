import BillingFeatures from "../../dummydata/BillingFeatures";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import BillingCard from "../../components/cards/BillingCard";
import { Seo } from "../../components/SEO/Seo";

const Billing = () => {
  return (
    <>
      <Seo
        title="Automated ISP Billing Systems | Movec Connect"
        description="Streamline invoicing, automated M-Pesa payments, subscriber bandwidth control, and customer accounts with Movec's ISP billing platform."
        path="/billing"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Movec Automated Billing System",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Automated billing, M-Pesa integration, and subscriber account management for Internet Service Providers.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
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
          backgroundImage: "url('/images/geralt-binary-3725329.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Billing Systems
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
            Automated billing,
            <span className="text-orange-500"> built for accuracy</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Streamline invoicing, payments and customer accounts with a
            billing platform designed to reduce errors and save you time.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-8" />
        </div>
      </section>

      {/* Features Section */}
      <section
        id="billing"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            title="Everything you need,"
            span=" to manage billing"
            description="From invoicing to payment tracking, our billing systems keep your revenue organized and your customers informed." />

          {/* Feature Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-2
              gap-6">
            {BillingFeatures.map((feature, index) => (
              <BillingCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;