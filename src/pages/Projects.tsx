import ContentHeader from "../components/ContentHeader/ContentHeader";
import HeroHeader from "../components/heroheader/HeroHeader";
import ProjectCard from "../components/cards/ProjectCard";
import { Seo } from "../components/SEO/Seo";
import { technicalProjects } from "../dummydata/TechnicalProjects";

// Our own product, listed first, ahead of the technical team's field projects.
const projects = [
  {
    video: "/video/141445-777657273.mp4",
    tag: "ISP Platform",
    title: "Movec Connect: ISP Management Platform",
    description:
      "Our all-in-one platform for ISPs, with automated billing and M-Pesa reconciliation, router management across brands and real-time network monitoring. Built from the problems ISP operators kept telling us about.",
  },
  ...technicalProjects,
];

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects | Movec - Our Work"
        description="What Movec is working on: the Movec Connect ISP platform, WiFi and internet installations for homes and businesses, and CCTV security systems."
        path="/projects"
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
          backgroundImage: "url('/images/geralt-businessman-3075828.jpg')",
        }}>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <HeroHeader
            eyebrow="Our Work"
            title="Projects we're"
            span="working on"
            description="The work our technical team is doing in the field — connecting homes and businesses and keeping their premises secure."
            variant="dark"
            align="center"
          />
        </div>
      </section>

      {/* Projects Grid */}
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
            title="Recent"
            span="work"
            description="From our own ISP platform to WiFi, internet and CCTV installations in the field, here's what we're working on."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
