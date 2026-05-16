import { motion } from "framer-motion";

import { styles } from "../constants/styles";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
    function HOC() {
    return (
      <motion.section
        initial={false}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        // Conditionally apply max-w-[1600px] ONLY for the projects/experience section
        className={`${styles.padding} relative z-0 mx-auto ${
          idName === "projects" ? "max-w-[1600px]" : "max-w-7xl"
        }`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
