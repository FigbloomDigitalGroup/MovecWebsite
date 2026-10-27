interface ProjectCardProps {
  project: {
    image?: string;
    // When set, the card plays this looping, muted video instead of the image.
    video?: string;
    tag: string;
    title: string;
    description: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="
        group
        h-full
        flex
        flex-col
        bg-white
        dark:bg-gray-900
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        overflow-hidden
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]">
      <div className="relative h-56 overflow-hidden">
        {project.video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        <span
          className="
            absolute
            bottom-4
            left-4
            bg-[#10B982]
            text-white
            text-xs
            font-semibold
            uppercase
            tracking-wider
            px-3
            py-1">
          {project.tag}
        </span>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
