import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", duration: 0.8 },
    },
  };
  return (
    <div className="xl:mt-12 flex justify-center items-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex-[0.75] bg-[#121211] p-8 rounded-2xl mx-auto text-center"
        style={{ maxWidth: "1000px", padding: "4rem 2rem", minHeight: "500px" }}
      >
        <h3 className={`${styles.sectionHeadText} mb-4`}>Interested?</h3>
        <p className={styles.sectionSubText}>Fill Out This Form</p>

        <div className="mt-[6rem] ml-[5rem]">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfAjbKeAjjlNA4Mm2mKYeBYmo4hi3uqjgTMHsMaSY3s5nAtpQ/viewform?usp=sf_link" target="_blank">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfAjbKeAjjlNA4Mm2mKYeBYmo4hi3uqjgTMHsMaSY3s5nAtpQ/viewform?usp=sf_link"
              width="700"
              height="600"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              className="rounded-2xl"
            >
              Loading…
            </iframe>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
