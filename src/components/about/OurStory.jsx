import { motion } from "framer-motion";
import "./OurStory.css";

/* ===== ANIMATION VARIANTS ===== */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function OurStory() {
  return (
    <section className="our-story">
      <motion.div
        className="our-story-wrapper"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.h2 className="our-story-heading" variants={fadeUp}>
          Our Story
        </motion.h2>

        <motion.p className="our-story-subheading" variants={fadeUp}>
          The Story Behind Embarq
        </motion.p>

        <motion.p className="our-story-description" variants={fadeUp}>
          In July 2015, six friends set out from India in their own SUV's on an epic inter-continental road expedition. 
          Over 57 days, they traveled 23,000 km across 16 countries spanning Asia, Russia, and Europe, ultimately reaching 
          Morocco in North Africa. This life-changing journey inspired Medha Joseph and Sujal Patwardhan to quit their 
          corporate jobs and start Embarq Motorworld Pvt. Ltd. in October 2015 — turning their passion for road travel into 
          a company that creates curated luxury road trips and overland expeditions. Since then, Embarq has organized numerous 
          road trips across countries and continents that emphasize local culture, unique experiences, and adventurous routes.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default OurStory;