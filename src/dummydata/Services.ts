// Movec services, shown on the Services page and the home page.
export interface Service {
  img: string;
  title: string;
  description: string;
  // Page with the full details of this service.
  link: string;
}

export const services: Service[] = [
  {
    img: "vector_icons/custom-coding-svgrepo-com.svg",
    title: "Custom Software Development",
    link: "/software",
    description:
      "We build reliable software solutions designed around your business needs, from web applications to business management systems.",
  },
  {
    img: "vector_icons/dollar-money-svgrepo-com.svg",
    title: "Billing Systems",
    link: "/billing",
    description:
      "Automate your billing processes with secure and efficient systems that help manage payments, invoices and records.",
  },
  {
    img: "vector_icons/wifi-focus-1036-svgrepo-com.svg",
    title: "Starlink Installation",
    link: "/starlink",
    description:
      "Stay connected with high speed internet solutions for homes, offices and remote business locations.",
  },
  {
    img: "vector_icons/cctv-smart-cctv-safety-protection-monitoring-camera-cctv-camera-svgrepo-com.svg",
    title: "CCTV Security Systems",
    link: "/cctv",
    description:
      "Protect your property with professional CCTV installation and monitoring solutions.",
  },
  {
    img: "vector_icons/vertex-gps-svgrepo-com.svg",
    title: "GPS Fleet Tracking",
    link: "/gps",
    description:
      "Monitor your vehicles, improve efficiency and manage your fleet with real-time tracking solutions.",
  },
  {
    img: "vector_icons/networking-connector-svgrepo-com.svg",
    title: "IT Support & Networking",
    link: "/itsupport",
    description:
      "Reliable network setup, maintenance and technical support to keep your business running smoothly.",
  },
];
