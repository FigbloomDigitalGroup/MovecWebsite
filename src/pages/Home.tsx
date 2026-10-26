import Hero from "../components/hero/Hero";
import AlternatingSection from "../components/alternate/AlternatingSection";
import { Link } from "react-router-dom";
import { Seo } from "../components/SEO/Seo";

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
      
      {/* Services — image left, content right */}
      <AlternatingSection
        id="services"
        eyebrow="Our Services"
        title="Technology Solutions"
        span="That Grow Your Business"
        description="From custom software to Starlink installation, CCTV security and GPS fleet tracking we provide smart, reliable and affordable technology solutions."
        image="/images/buffik-business-5475661.jpg "
        reverse={true}>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-200">
          Explore All Services
        </Link>
      </AlternatingSection>
      
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

      {/* Get In Touch — content left, image right */}
      <AlternatingSection
        id="contact"
        eyebrow="Get In Touch"
        title="We'd Love to Hear"
        span="From You"
        description="Whether you need software development, ISP management, networking, Starlink, CCTV or GPS fleet tracking  we're ready to help. Reach out and our team will respond within a day."
        image="/images/graphixmade-ai-generated-8990043.png"
        reverse={false}>
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