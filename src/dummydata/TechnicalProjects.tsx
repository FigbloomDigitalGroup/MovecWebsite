// Technical team projects — shown on the About page ("What our technical
// team is working on") and on the Projects page.
export interface TechnicalProject {
  badge: string;
  tag: string;
  ongoing: boolean;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  link: string;
  linkLabel: string;
}

export const technicalProjects: TechnicalProject[] = [
  {
    badge: "Ongoing",
    tag: "WiFi & Internet · Ongoing",
    ongoing: true,
    title: "WiFi & Internet Installation",
    description:
      "Our technical team is currently rolling out WiFi and internet connections for homes and businesses — from site survey to a live, tested connection.",
    points: [
      "Site surveys and coverage planning",
      "Router, access point and cabling installation",
      "Fibre, wireless and Starlink connectivity",
      "Testing, handover and ongoing support",
    ],
    image: "/images/pexels-margo-evardson-2158292018-37166577.jpg",
    imageAlt: "Internet and WiFi network installation",
    link: "/contact",
    linkLabel: "Request an installation",
  },
  {
    badge: "What we do best",
    tag: "CCTV",
    ongoing: false,
    title: "CCTV Installation",
    description:
      "We're experts at CCTV installation — designing and fitting camera systems that keep homes, offices and business premises secure around the clock.",
    points: [
      "Security assessment and camera placement",
      "HD indoor and outdoor camera installation",
      "Remote viewing on your phone or computer",
      "Maintenance and system upgrades",
    ],
    image: "/images/elasticcomputefarm-cctv-1144366.jpg",
    imageAlt: "CCTV security camera installation",
    link: "/cctv",
    linkLabel: "Explore CCTV services",
  },
];
