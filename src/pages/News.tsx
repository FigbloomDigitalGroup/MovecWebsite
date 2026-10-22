import ContentHeader from "../components/ContentHeader/ContentHeader";
import HeroHeader from "../components/heroheader/HeroHeader";
import NewsCard from "../components/cards/NewsCard";
import NewsletterSubscribe from "../components/widgets/NewsletterSubscribe";
import { Seo } from "../components/SEO/Seo";

interface NewsItem {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

// PLACEHOLDER CONTENT — swap these out for real announcements/updates.
const newsItems: NewsItem[] = [
  {
    image: "/images/ar130405-business-2082639_1920.jpg",
    category: "Company",
    date: "Placeholder date",
    title: "Sample announcement headline goes here",
    excerpt:
      "Short summary of the update goes here — a sentence or two describing what happened and why it matters to clients.",
  },
  {
    image: "/images/geralt-business-5205180.jpg",
    category: "Services",
    date: "Placeholder date",
    title: "Another sample news headline",
    excerpt:
      "Replace with a real update about a new service, partnership, or milestone once it's ready to publish.",
  },
  {
    image: "/images/stakalo-ai-generated-8433540.jpg",
    category: "Team",
    date: "Placeholder date",
    title: "A third sample entry for layout purposes",
    excerpt:
      "This grid is built to hold any number of entries — add or remove items from the newsItems array as needed.",
  },
];

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
            description="Updates, announcements and milestones from the team — this page is currently populated with placeholder entries."
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
            description="Real announcements will replace these placeholders once content is ready."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {newsItems.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-[#0b1120]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Don't miss what's next
          </h2>
          <p className="mt-3 text-slate-400">
            Subscribe to get notified whenever there's news or an event
            happening at Movec.
          </p>
          <div className="mt-8 flex justify-center">
            <NewsletterSubscribe variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
