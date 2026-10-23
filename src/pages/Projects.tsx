import ContentHeader from "../components/ContentHeader/ContentHeader";
import HeroHeader from "../components/heroheader/HeroHeader";
import ProjectCard from "../components/cards/ProjectCard";
import { Seo } from "../components/SEO/Seo";

interface Project {
  image: string;
  tag: string;
  title: string;
  description: string;
}

// PLACEHOLDER CONTENT — swap these out for real completed/ongoing projects.
const projects: Project[] = [
  {
    image: "/images/geralt-businessman-3075828.jpg",
    tag: "CCTV",
    title: "Sample project title",
    description:
      "Short description of the project goes here — what was built, for whom, and the outcome. Replace with a real case study.",
  },
  {
    image: "/images/u_grs7xmagi8-ai-generated-9449768.jpg",
    tag: "ISP",
    title: "Another sample project",
    description:
      "This grid is built to hold any number of entries — add or remove items from the projects array once real case studies are ready.",
  },
  {
    image: "/images/graphixmade-ai-generated-8337333_1920.png",
    tag: "Software",
    title: "A third sample project",
    description:
      "Use this placeholder to check the layout, then swap in real project names, images and descriptions.",
  },
];

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects | Movec - Our Work"
        description="A look at projects Movec Connect has delivered for clients across software, security, networking and connectivity."
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
            title="Projects we've"
            span="delivered"
            description="A sample of the kind of work Movec takes on — this page is currently populated with placeholder entries."
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
            description="Real case studies will replace these placeholders once content is ready."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
