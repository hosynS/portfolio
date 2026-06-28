import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard = React.forwardRef<
  HTMLDivElement,
  {
    project: TProject;
    onOpenModal: (project: TProject) => void;
  }
>(({ project, onOpenModal }, ref) => {
  // Extract a concise summary teaser from the description
  const getTeaser = (desc: string) => {
    const lines = desc
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => line.replace(/^[•\-\*]\s*/, ""));
    return lines[0] || "";
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-[#1d1836]/60 backdrop-blur-md border border-[#232631] hover:border-blue-500/50 rounded-2xl p-5 flex flex-col justify-between h-full shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] transition-all duration-300 group"
    >
      <div className="flex flex-col">
        {/* Project Thumbnail Image */}
        <div className="relative h-[200px] w-full overflow-hidden rounded-xl bg-[#151030]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* External Hover Links */}
          <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.videoDemoLink && (
              <a
                href={project.videoDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:scale-110 transition-all duration-200"
                title="Watch Video Demo"
              >
                <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            )}
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-white shadow-md hover:scale-110 hover:bg-gray-700 transition-all duration-200"
              title="View Code"
            >
              <img src={github} alt="github" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>

        {/* Project Icon & Title */}
        <div className="mt-5 flex items-center gap-3">
          {project.icon && (
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white/10"
              style={{ backgroundColor: project.iconBg || "#383E56" }}
            >
              <img
                src={project.icon}
                alt={project.name}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          )}
          <h3 className="text-white text-[20px] font-bold line-clamp-1">{project.name}</h3>
        </div>

        {/* Teaser text */}
        <p className="text-secondary mt-3 text-[14px] leading-relaxed line-clamp-3">
          {getTeaser(project.description)}
        </p>
      </div>

      <div className="mt-4">
        {/* Keywords / Tags */}
        <div className="flex flex-wrap gap-1.5 items-center">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[12px] px-2.5 py-0.5 rounded-full bg-[#232631] border border-white/5 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <div className="mt-4 pt-3 border-t border-[#232631] flex justify-between items-center">
          <button
            onClick={() => onOpenModal(project)}
            className="text-[14px] font-medium text-blue-400 hover:text-white transition-colors flex items-center gap-1 group/btn"
          >
            View Details
            <svg
              className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
});

const Works = () => {
  const [activeProject, setActiveProject] = useState<TProject | null>(null);

  // Prevent background scrolling when details modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />
      
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          href="https://github.com/SaddamHosyn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-secondary hover:text-white transition-colors text-[14px] border border-[#4f86c6] hover:border-[#93c5fd] rounded-full px-4 py-2 w-fit"
        >
          <img src={github} alt="GitHub" className="w-4 h-4 object-contain" />
          GitHub Profile →
        </motion.a>
      </div>

      <div className="flex w-full mt-3">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-secondary max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Grid container matching the Projects style */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onOpenModal={setActiveProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project details modal popover rendered at document body root using Portal */}
      {createPortal(
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              {/* Dark modal overlay blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-sm"
              />

              {/* Modal Body Card container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="relative bg-[#1d1836] border border-[#232631] rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] min-h-0 flex flex-col shadow-2xl z-10"
              >
                {/* Modal Cover Image header */}
                <div className="relative w-full overflow-hidden bg-[#151030] flex items-center justify-center shrink-0 max-h-[200px] sm:max-h-[380px]">
                  {/* Blurred background image to fill wide screen aspect ratios */}
                  <img
                    src={activeProject.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover filter blur-md opacity-35 scale-105 select-none pointer-events-none"
                  />
                  
                  {/* Contain foreground image to prevent cropping and let it scale up to full width */}
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="relative z-10 w-full h-auto max-h-[200px] sm:max-h-[380px] object-contain"
                  />
                  
                  {/* Fade overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d1836] via-[#1d1836]/10 to-transparent z-20 pointer-events-none" />

                  {/* Close modal button */}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2.5 transition-all border border-white/10 hover:scale-110 z-30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Scrollable details text details */}
                <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                  <div className="flex items-center gap-4">
                    {activeProject.icon && (
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-white/10"
                        style={{ backgroundColor: activeProject.iconBg || "#383E56" }}
                      >
                        <img
                          src={activeProject.icon}
                          alt={activeProject.name}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      </div>
                    )}
                    <h2 className="text-[26px] font-bold text-white leading-tight">
                      {activeProject.name}
                    </h2>
                  </div>

                  {/* Detailed descriptions */}
                  <div className="mt-6">
                    <h4 className="text-[14px] font-semibold text-secondary uppercase tracking-wider">
                      Key Achievements
                    </h4>
                    <div className="mt-3 space-y-3.5 text-secondary text-[15px] leading-relaxed">
                      {activeProject.description
                        .split("\n")
                        .map((line) => line.trim())
                        .filter((line) => line.length > 0)
                        .map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1.5 text-xs select-none">✦</span>
                            <span className="text-white/80">{bullet.replace(/^[•\-\*]\s*/, "")}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Technology breakdown */}
                  <div className="mt-6">
                    <h4 className="text-[14px] font-semibold text-secondary uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`text-[13px] px-3 py-1 rounded-full bg-[#232631] border border-white/5 font-medium ${tag.color}`}
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons in footer */}
                <div className="p-5 border-t border-[#232631] bg-[#151030] flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
                  {activeProject.videoDemoLink && (
                    <a
                      href={activeProject.videoDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-[14px] hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all w-full sm:w-auto"
                    >
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Video Demo
                    </a>
                  )}
                  <a
                    href={activeProject.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gray-800 border border-gray-700 text-white font-medium text-[14px] hover:bg-gray-700 hover:scale-[1.02] transition-all w-full sm:w-auto"
                  >
                    <img src={github} alt="github" className="w-4 h-4 object-contain" />
                    View Source Code
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
