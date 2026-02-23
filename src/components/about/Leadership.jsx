import { motion } from "framer-motion";
import "./Leadership.css";
import founder1 from "../../assets/aboutimages/founder1.jpg";
import founder2 from "../../assets/aboutimages/founder2.jpg";

/* ===== ANIMATION VARIANTS ===== */

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageRevealLeft = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageRevealRight = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineGrow = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "120px",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

function Leadership() {
  return (
    <section className="leadership">
      
      {/* ===== TITLE ===== */}
      <motion.h2
        className="section-title"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Founders & Leadership
      </motion.h2>

      {/* ===== FIRST FOUNDER ===== */}
      <div className="leader-block">
        
        {/* IMAGE */}
        <motion.div
          className="leader-image"
          variants={imageRevealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={founder1} alt="Medha Joseph" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="leader-text"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3 variants={textFade}>Medha Joseph</motion.h3>

          <div className="designation">
            <motion.span variants={textFade}>
              FOUNDER & DIRECTOR
            </motion.span>

            <motion.div
              className="line"
              variants={lineGrow}
            />
          </div>

          <motion.p variants={textFade}>
            Our mission is simple yet profound, we aim to integrate age-old
            traditions with cutting-edge research to provide you with,
            all-natural, and organic products nature’s bounty, combined with
            the essence of Panchagavya, can nurture not only our physical
            health but also our mental and spiritual well-being.
            Furthermore, our commitment extends to the preservation of our
            precious planet.
          </motion.p>
        </motion.div>
      </div>

      {/* ===== SECOND FOUNDER ===== */}
      <div className="leader-block reverse">
        
        {/* IMAGE */}
        <motion.div
          className="leader-image"
          variants={imageRevealRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={founder2} alt="Sujal Patwardhan" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="leader-text"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3 variants={textFade}>Sujal Patwardhan</motion.h3>

          <div className="designation">
            <motion.span variants={textFade}>
              FOUNDER & DIRECTOR
            </motion.span>

            <motion.div
              className="line"
              variants={lineGrow}
            />
          </div>

          <motion.p variants={textFade}>
            Sujal is a versatile organizer with strong people-management skills
            and a love for exploring the world by road. She was part of the
            original expedition to Morocco and has since led many international
            and domestic road journeys. Before Embarq, Sujal worked as Vice
            President at an investment bank and has extensive experience in
            human resources. Her interests include Bollywood movies, biryani,
            and collecting wristwatches.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Leadership;