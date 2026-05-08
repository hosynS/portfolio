import { SectionWrapper } from "../../hoc";
import { certifications } from "../../constants";
import { config } from "../../constants/config";

const Certifications = () => {
  return (
    <>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        {config.sections.certifications.p}
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        {config.sections.certifications.h2}
      </h2>

      <div className="mt-10 flex flex-wrap gap-7">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-tertiary p-5 rounded-2xl w-full sm:w-[300px] border border-white/10"
          >
            <h3 className="text-white font-bold text-[18px]">{cert.title}</h3>
            <p className="text-secondary text-[14px] mt-1">{cert.issuer}</p>
            <p className="text-secondary text-[12px] mt-1">{cert.date}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-[13px] text-blue-400 hover:underline"
              >
                View Certificate →
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
