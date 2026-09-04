function ProjectCard({ project, onClick }) {
  return (
    <article
      onClick={() => onClick(project)}
      className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/30"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-[#0A0A0A]">

        {project.cover ? (
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm text-gray-400">
              Project Preview
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black">
            View Project
          </span>
        </div>

        {/* Screenshot Count */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-3 py-1 text-xs text-white">
            {project.images.length} Screenshots
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-sm font-medium text-blue-600 dark:text-gray-400">
          {project.subtitle}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-[#171717] dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600 dark:bg-white/5 dark:text-gray-400"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;