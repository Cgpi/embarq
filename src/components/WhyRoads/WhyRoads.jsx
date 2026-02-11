import { motion } from "framer-motion";
import "./WhyRoads.css";
import whyRoadsImg from "../../assets/images/whyroads.png";

export default function WhyRoads() {
  return (
    <section className="whyroads">
      <img
        src={whyRoadsImg}
        alt="Why Roads background"
        className="whyroads-bg"
      />

      <div className="whyroads-overlay" />

      <div className="whyroads-inner">
        <motion.div
          className="whyroads-content"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1>
            You ask, why roads?
            <br />
            We ask, why not?
          </h1>

          <p>
            Ever felt the freedom and allure, of a time that is captivating and
            pure. Ever let the road take hold and sweep you away.
          </p>

          <p>
            Let the journey become an eternal memory, an untold story, a
            cherished legacy. Embark on an expedition of life changing
            discovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
