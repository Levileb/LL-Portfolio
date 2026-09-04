import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  const images = project.images || [];

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (images.length > 1) {
        if (event.key === "ArrowRight") {
          nextImage();
        }

        if (event.key === "ArrowLeft") {
          previousImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white dark:bg-[#111111]"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-200 p-6 dark:border-white/10">
          <div>
            <p className="text-sm text-blue-600 dark:text-gray-400">
              {project.subtitle}
            </p>

            <h2 className="mt-1 text-2xl font-semibold text-[#171717] dark:text-white">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Close project preview"
          >
            <X size={22} />
          </button>
        </div>

        {/* Gallery */}
        {images.length > 0 ? (
          <div className="p-6">

            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-[#0A0A0A]">

              <img
                src={images[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                className="max-h-[65vh] w-full object-contain"
              />

              {/* Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 rounded-full bg-black/70 p-3 text-white transition-colors hover:bg-black"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={22} />
                  </button>

                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 rounded-full bg-black/70 p-3 text-white transition-colors hover:bg-black"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 ${
                      activeImage === index
                        ? "border-blue-600"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center p-6">
            <p className="text-gray-500 dark:text-gray-400">
              Screenshots for this project are not available yet.
            </p>
          </div>
        )}

        {/* Project Information */}
        <div className="border-t border-gray-200 p-6 dark:border-white/10">

          <p className="leading-7 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-600 dark:bg-white/5 dark:text-gray-400"
              >
                {technology}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Visit Project
              <ExternalLink size={16} />
            </a>
          )}

        </div>
      </div>
    </div>
  );
}

export default ProjectModal;