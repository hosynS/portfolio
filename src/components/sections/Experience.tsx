import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

type TExperienceCard = (typeof experiences)[number];

const ExperienceCard: React.FC<TExperienceCard> = (experience) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="relative h-[230px] w-full">
        <img
          src={experience.image}
          alt={experience.name}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          <div
            onClick={() => window.open(experience.sourceCodeLink, "_blank")}
            className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src={github}
              alt="github"
              className="h-1/2 w-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-[24px] font-bold text-white">{experience.name}</h3>
        <p className="text-secondary mt-2 text-[14px]">
          {experience.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
