import { useState } from "react";

import Container from "../components/ui/Container";
import ProjectCard from "../components/common/ProjectCard";
import ProjectModal from "../components/common/ProjectModal";

import projects from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="border-t border-gray-200 py-24 dark:border-white/10 sm:py-28"
    >
      <Container>

        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-white">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl dark:text-white">
            Selected work and projects.
          </h2>

          <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
            A collection of web and mobile applications focused on solving
            practical problems through software.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

      </Container>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;