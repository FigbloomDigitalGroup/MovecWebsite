import ContentHeader from "../components/ContentHeader/ContentHeader";
import HeroHeader from "../components/heroheader/HeroHeader";
import NewsletterSubscribe from "../components/widgets/NewsletterSubscribe";
import SubscribeBenefits from "../components/widgets/SubscribeBenefits";
import { Seo } from "../components/SEO/Seo";

// Featured news post. The image is a full poster, so it's shown uncropped.
const featuredNews = {
  image: "/images/figbloom-vision-smart-security-booth.jpg",
  imageAlt:
    "Figbloom Vision Smart Security Systems exhibition booth with AI-powered recognition, Figillance app, security agency coordination and smart asset & threat detection",
  category: "Smart Security",
  title: "Figbloom Vision: Smart Security Systems",
  excerpt:
    "See more. Understand more. Respond faster. Figbloom Vision turns security cameras into smarter surveillance.",
  features: [
    "AI-powered recognition",
    "Figillance app for emergency response",
    "Security agency coordination",
    "Smart asset & threat detection",
  ],
};

const News = () => {
  return (
    <>
      <Seo
        title="News | Movec - Updates & Announcements"
        description="Latest updates, announcements and milestones from the Movec Connect team."
        path="/news"
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
          backgroundImage: "url('/images/ar130405-business-2082639_1920.jpg')",
        }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <HeroHeader
            eyebrow="News"
            title="What's happening"
            span="at Movec"
            description="Updates, announcements and milestones from the team."
            variant="dark"
            align="center"
          />
        </div>
      </section>

      {/* News Grid */}
      <section
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            eyebrow=""
            title="Latest"
            span="updates"
            description="The latest from Movec and the Figbloom family."
            align="center"
          />

          <article
            className="
              mt-10
              grid
              lg:grid-cols-2
              bg-white
              dark:bg-gray-900
              shadow-md
              overflow-hidden
              [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]">
            <img
              src={featuredNews.image}
              alt={featuredNews.imageAlt}
              loading="lazy"
              className="w-full h-full object-cover" />

            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="w-fit bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1">
                {featuredNews.category}
              </span>
              <h3 className="mt-5 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {featuredNews.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                {featuredNews.excerpt}
              </p>
              <ul className="mt-6 space-y-3">
                {featuredNews.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B982]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-[#0b1120]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Don't miss what's next
          </h2>
          <p className="mt-3 text-slate-400">
            Here's what you'll get when you subscribe:
          </p>
          <div className="mt-8">
            <SubscribeBenefits />
          </div>
          <div className="mt-10 flex justify-center">
            <NewsletterSubscribe variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
