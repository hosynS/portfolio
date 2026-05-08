import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { config } from "../../constants/config";

const Tech = () => {
  return (
    <>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        {config.sections.techStack.p}
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {config.sections.techStack.h2}
      </h2>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech-stack");
