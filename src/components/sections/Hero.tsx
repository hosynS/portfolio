import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  const headingPrefix = "Hi, I'm ";
  const headingName = config.hero.name;
  const subtitle = config.hero.p.join(" ");
  const [typedHeading, setTypedHeading] = useState("");
  const [typedSubtitle, setTypedSubtitle] = useState("");

  useEffect(() => {
    let headingIndex = 0;
    let subtitleIndex = 0;
    let timer: ReturnType<typeof setTimeout>;

    const typeHeading = () => {
      if (headingIndex < headingPrefix.length + headingName.length) {
        headingIndex += 1;
        const typed = `${headingPrefix}${headingName}`.slice(0, headingIndex);
        setTypedHeading(typed);
        timer = setTimeout(typeHeading, 75);
        return;
      }

      timer = setTimeout(typeSubtitle, 350);
    };

    const typeSubtitle = () => {
      if (subtitleIndex < subtitle.length) {
        subtitleIndex += 1;
        setTypedSubtitle(subtitle.slice(0, subtitleIndex));
        timer = setTimeout(typeSubtitle, 45);
      }
    };

    typeHeading();
    return () => clearTimeout(timer);
  }, [headingName, subtitle]);

  const typedPrefix = typedHeading.slice(0, headingPrefix.length);
  const typedName = typedHeading.slice(headingPrefix.length);
  const headingComplete = typedHeading.length === headingPrefix.length + headingName.length;

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {typedPrefix}
            <span className="text-[#915EFF]">{typedName}</span>
            {!headingComplete && <span className="ml-1 inline-block h-[1em] w-[0.12em] animate-pulse bg-[#915EFF] align-[-0.1em]" />}
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {typedSubtitle}
            {headingComplete && <span className="ml-1 inline-block h-[1em] w-[0.1em] animate-pulse bg-white align-[-0.1em]" />}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
