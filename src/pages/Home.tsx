import Hero from "../components/hero/Hero";
import AlternatingSection from "../components/alternate/AlternatingSection";
import { Link } from "react-router-dom";
import { Seo } from "../components/SEO/Seo";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import { services } from "../dummydata/Services";

const Home = () => {
  return (
    <>
    {/* Seo */}
    <Seo
        title="Movec | Compare Internet Service Providers Near You"
        description="Movec helps you find and compare the best internet service providers in your area — speeds, prices, and plans side by side, so you can choose with confidence."
        path="/"/>
      {/* Hero stays exactly as is — full first section */}
      <Hero />
      
      {/* About — content left, image right */}
      <AlternatingSection
        id="about"
        eyebrow="About Us"
        title="Who we are and"
        span="what drives us"
        description="We're a technology company built on reliability and trust  helping businesses grow with the right tools, systems and support behind them."
        image="/images/geralt-monitor-1307227.jpg"
        reverse={false}>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          Learn More About Us
        </Link>
      </AlternatingSection>
      
      {/* Services — every service at a glance, each linking to its page */}
      <section id="services" className="py-24 bg-doodle">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            eyebrow="Our Services"
            title="Technology solutions"
            span="that grow your business"
            description="Smart, reliable and affordable technology for homes and businesses. Pick a service to see the details."
            align="center" />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.link}
                to={service.link}
                className="
                  group
                  flex
                  flex-col
                  p-6
                  bg-white
                  dark:bg-gray-900
                  border
                  border-gray-200
                  dark:border-white/10
                  rounded-2xl
                  shadow-sm
                  hover:shadow-lg
                  hover:border-orange-500
                  transition-all
                  duration-300">
                <img src={`/${service.img}`} alt="" className="w-12 h-12" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-orange-500 group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* ISP Platform — content left, image right */}
      <AlternatingSection
        id="ispplatform"
        eyebrow="ISP Platform"
        title="Everything you need to"
        span="run your ISP"
        description="Manage customers, billing and your network from one powerful platform built to simplify ISP operations, improve reliability and scale your internet business."
        image="/images/charlvera-computer-8589000.png"
        reverse={false}>
        <Link
          to="/ispplatform"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          Discover The Platform 
        </Link>
      </AlternatingSection>

      {/* Projects — image left, content right */}
      <AlternatingSection
        id="projects"
        eyebrow="Our Projects"
        title="What we're"
        span="working on"
        description="Our Movec Connect ISP platform, ongoing WiFi and internet installations for homes and businesses, and CCTV systems that keep premises secure."
        image="/images/pexels-margo-evardson-2158292018-37166577.jpg"
        reverse={true}>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          View Our Projects
        </Link>
      </AlternatingSection>

      {/* Movec Store — content left, image right */}
      <AlternatingSection
        id="store"
        eyebrow="Movec Store"
        title="Shop the equipment"
        span="we install every day"
        description="CCTV cameras and kits, routers and WiFi equipment, and Starlink kits. Buy them on their own, or let our team install them for you."
        image="/images/pexels-wifi6-router-32698507.jpg"
        reverse={false}>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          Contact Us to Order
        </Link>
      </AlternatingSection>

      {/* News — image left, content right */}
      <AlternatingSection
        id="news"
        eyebrow="Latest News"
        title="What's happening"
        span="at Movec"
        description="Figbloom Vision Smart Security Systems: AI-powered recognition, the Figillance emergency response app and smart threat detection that turn security cameras into smarter surveillance."
        image="/images/figbloom-vision-smart-security-booth.jpg"
        reverse={true}>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          Read the News
        </Link>
      </AlternatingSection>

      {/* Team & reviews — content left, image right */}
      <AlternatingSection
        id="team"
        eyebrow="Our Team"
        title="Meet the people"
        span="behind Movec"
        description="Our leadership, sales, development and technical teams work every day to keep clients connected, secure and supported. Meet them, and read what our clients say about working with us."
        image="/images/geralt-handshake-6135751_1920.jpg"
        reverse={false}>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          Meet the Team
        </Link>
      </AlternatingSection>

      {/* Get In Touch — image left, content right */}
      <AlternatingSection
        id="contact"
        eyebrow="Get In Touch"
        title="We'd Love to Hear"
        span="From You"
        description="Whether you need software development, ISP management, networking, Starlink, CCTV or GPS fleet tracking  we're ready to help. Reach out and our team will respond within a day."
        image="/images/graphixmade-ai-generated-8990043.png"
        reverse={true}>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          Contact Us
        </Link>
      </AlternatingSection>
    </>
  );
};

export default Home;