import ContentHeader from "../components/ContentHeader/ContentHeader";
import ServiceCard from "../components/cards/ServiceCard";
import HeroHeader from "../components/heroheader/HeroHeader";
import { Seo } from "../components/SEO/Seo";

interface Service {
  img: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    img: "vector_icons/custom-coding-svgrepo-com.svg",
    title: "Custom Software Development",
    description:
      "We build reliable software solutions designed around your business needs, from web applications to business management systems.",
  },
  {
    img: "vector_icons/dollar-money-svgrepo-com.svg",
    title: "Billing Systems",
    description:
      "Automate your billing processes with secure and efficient systems that help manage payments, invoices and records.",
  },
  {
    img: "vector_icons/wifi-focus-1036-svgrepo-com.svg",
    title: "Starlink Installation",
    description:
      "Stay connected with high speed internet solutions for homes, offices and remote business locations.",
  },
  {
    img: "vector_icons/cctv-smart-cctv-safety-protection-monitoring-camera-cctv-camera-svgrepo-com.svg",
    title: "CCTV Security Systems",
    description:
      "Protect your property with professional CCTV installation and monitoring solutions.",
  },
  {
    img: "vector_icons/vertex-gps-svgrepo-com.svg",
    title: "GPS Fleet Tracking",
    description:
      "Monitor your vehicles, improve efficiency and manage your fleet with real-time tracking solutions.",
  },
  {
    img: "vector_icons/networking-connector-svgrepo-com.svg",
    title: "IT Support & Networking",
    description:
      "Reliable network setup, maintenance and technical support to keep your business running smoothly.",
  },
];

// Scattered positions around the center hub (desktop only)
// top/left are percentages within the orbit container
const positions = [
  { top: "6%", left: "18%", rotate: "-4deg" },
  { top: "4%", left: "62%", rotate: "3deg" },
  { top: "38%", left: "80%", rotate: "-2deg" },
  { top: "72%", left: "64%", rotate: "4deg" },
  { top: "74%", left: "14%", rotate: "-3deg" },
  { top: "36%", left: "-2%", rotate: "2deg" },
];

const Services = () => {
  return (
    <>
   
     <Seo
        title="What We Do | Movec - ISP Comparison Made Easy"
        description="Movec compares internet service providers by speed, price, and availability, giving you a clear side-by-side view so you can pick the right plan for your home or business."
        path="/services"/>
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
          backgroundImage: "url('images/buffik-business-5475661.jpg')",
        }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <HeroHeader
            eyebrow="Our Services"
            title="Technology Solutions"
            span="That Grow Your Business"
            description="We provide smart, reliable and affordable technology solutions that help businesses stay connected, secure and productive."
            variant="dark"
            align="center"
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="
          py-20
          bg-[#f5f5f5]
          dark:bg-black
          transition-colors
          duration-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ContentHeader
            eyebrow=" "
            title="Solutions built"
            span="around your business"
            description="Every service works together to keep your business connected, secure and running smoothly."
            align="center"/>

          {/* Scattered Solar-System Layout — desktop */}
          <div className="hidden lg:block relative h-[850px] mt-10">
            {/* Orbit rings (decorative) */}
            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[520px]
                h-[520px]
                rounded-full
                border
                border-dashed
                border-orange-500/30"/>
            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[760px]
                h-[760px]
                rounded-full
                border
                border-dashed
                border-[#10B982]/20"/>

            {/* Center hub */}
            <div
              className="
                absolute
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-28
                h-28
                [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]
                bg-orange-500
                flex
                items-center
                justify-center
                shadow-xl
                z-10">
              <span className="text-white font-bold text-sm text-center px-2">
                Our Services
              </span>
            </div>
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  absolute
                  w-72
                  transition-transform
                  duration-300
                  hover:scale-105
                  hover:z-20"
                style={{
                  top: positions[index].top,
                  left: positions[index].left,
                  transform: `rotate(${positions[index].rotate})`,
                }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden mt-10">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;



