import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  videoDemoLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full sm:w-[360px] md:w-[660px] lg:w-[360px] rounded-2xl p-5">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className={`h-full w-full rounded-2xl ${
                name === "Detecto" ? "object-contain bg-black" : "object-cover"
              }`}
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-2">
              {videoDemoLink && (
                <div
                  onClick={() => window.open(videoDemoLink, "_blank")}
                  className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  title="Watch Demo"
                >
                  <svg
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Video Demo</span>
                </div>
              )}
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                title="View Code"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-5 w-5 object-contain"
                />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Code</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] whitespace-pre-line">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />
      
      <motion.a
        variants={fadeIn("", "", 0.1, 1)}
        href="https://github.com/SaddamHosyn"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 text-secondary hover:text-white transition-colors text-[14px] border border-[#4f86c6] hover:border-[#93c5fd] rounded-full px-4 py-2"
      >
        <img src={github} alt="GitHub" className="w-4 h-4 object-contain" />
        GitHub Profile →
      </motion.a>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
