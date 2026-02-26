import { motion } from "framer-motion";
import "./WhyRoads.css";
import whyRoadsImg from "../../assets/images/whyroads.webp";

export default function ExpWhyRoads() {
  return (
    <section className="expwr-section">
      <img
        src={whyRoadsImg}
        alt="Why Roads background"
        className="expwr-bg"
      />

      <div className="expwr-overlay" />

      <div className="expwr-inner">
        <motion.div
          className="expwr-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18, // 🔥 line-by-line delay
              },
            },
          }}
        >
          {/* Heading */}
          <motion.h1
            variants={fadeSlide}
            className="expwr-heading"
          >
            You ask, why roads?
            <br />
            We ask, why not?
          </motion.h1>

          {/* Paragraphs */}
          <motion.p variants={fadeSlide}>
            Ever felt the freedom and allure, Of a time that is captivating and
            pure.
          </motion.p>

          <motion.p variants={fadeSlide}>
            Ever felt the heart and soul beating in unity, For seconds that
            appears like an eternity.
          </motion.p>

          <motion.p variants={fadeSlide}>
            Ever let the road take hold and sweep you away, to a world of wonder
            where you are free to play.
          </motion.p>

          <motion.p variants={fadeSlide}>
            Ever let the journey become an eternal memory, An untold story, a
            cherished legacy.
          </motion.p>

          <motion.p variants={fadeSlide}>
            Embark on an expedition of life changing discovery, Let the road
            overtake and open up a new territory.
          </motion.p>

          <motion.p variants={fadeSlide}>
            Take a step forward and let your spirit lead the way, Rediscover
            yourself with our adventurous getaway.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* 🔥 animation variant */
const fadeSlide = {
  hidden: {
    x: -80,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
