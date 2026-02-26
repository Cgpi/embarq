import { motion } from "framer-motion";
import "./ExpeditionIntro.css";

import bgImage from "../../assets/images/expbg.webp";
import expcar1 from "../../assets/images/excar1.webp";
import expcar2 from "../../assets/images/excar2.webp";

// TEXT STAGGER CONTAINER
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// TEXT ANIMATION
const fadeLeft = {
  hidden: {
    x: -80,
    opacity: 0,
    filter: "blur(6px)",   // 👈 add this
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",   // 👈 smooth clarity effect
    transition: {
      duration: 1.4,       // 👈 slower (was 0.8)
      ease: [0.22, 1, 0.36, 1], // 👈 premium easing
    },
  },
};

// EDGE LABEL
const edgeAnim = {
  hidden: {
    x: -60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// BIG CARD
const bigCardAnim = {
  hidden: {
    x: -60,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

// SMALL CARD
const smallCardAnim = {
  hidden: {
    x: 120,
    y: 120,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};
export default function ExpeditionIntro() {
  return (
    <section
      className="expedition-intro"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-overlay" />

      {/* EDGE LABEL */}
      <motion.div
        className="edge-label"
        variants={edgeAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <span>We are Embarq</span>
      </motion.div>

      <div className="expedition-content">

        {/* TEXT */}
        <motion.div
          className="expedition-text"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <motion.h2 variants={fadeLeft}>
            Where Your Great Expedition Begins
          </motion.h2>

          <motion.p variants={fadeLeft}>
            We are a luxury travel company focusing on road expeditions.
            We organize self-drive tours in the most incredible places on earth.
          </motion.p>

          <motion.p variants={fadeLeft}>
            Our experiences are exclusive and unforgettable. Our routes are handcrafted
            and full of adventure. Our vehicles are premium and luxurious.
          </motion.p>

          <motion.p variants={fadeLeft}>
            EMBARQ your holidays exploring various countries and their culture
            on our fully guided road expedition.
          </motion.p>

          <motion.p variants={fadeLeft} className="signature">
            Let the road overtake…
          </motion.p>
        </motion.div>

        {/* CAR CARDS */}
        <div className="expedition-cards">

          <motion.div
            className="expedition-card big-card"
            variants={bigCardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <img src={expcar1} alt="" />
          </motion.div>

          <motion.div
            className="expedition-card small-card"
            variants={smallCardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <img src={expcar2} alt="" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}