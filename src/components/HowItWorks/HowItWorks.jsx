import { useEffect, useState } from "react";
import "./HowItWorks.css";
import bgImage from "../../assets/images/whydifferent.jpg";

import { Globe, Phone, Compass, Car, Users, Map } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".how-wrapper");
      const rect = section.getBoundingClientRect();

      const totalHeight = section.offsetHeight - window.innerHeight;
      const scrollProgress = Math.min(
        Math.max(-rect.top / totalHeight, 0),
        1
      );

      // 4 stages (3 steps + experience)
      const step = Math.floor(scrollProgress * 4);
      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="how-wrapper">
      <section
        className="how-section"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay" />

        <div className="content">
          {/* HOW IT WORKS */}
          <div className={`how-content ${activeStep === 3 ? "hide" : ""}`}>
            <h1>How it works</h1>
            <p>Your expedition, in 3 simple steps.</p>

            <div className="steps">
              <div className={`step ${activeStep === 0 ? "active" : ""}`}>
                <Globe size={20} />
                <span>Choose a departure (or a destination)</span>
              </div>

              <div className={`step ${activeStep === 1 ? "active" : ""}`}>
                <Phone size={20} />
                <span>Get the brochure + quick call</span>
              </div>

              <div className={`step ${activeStep === 2 ? "active" : ""}`}>
                <Compass size={20} />
                <span>Arrive. Drive. Discover.</span>
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className={`experience ${activeStep === 3 ? "show" : ""}`}>
            <h1>The Embarq Experience</h1>
            <p>
              Handpicked stays. Thoughtful food stops. Picture-perfect pit stops.
              A route that keeps getting better.
            </p>

            <div className="exp-list">
              <div><Car size={18}/> Premium self-drive vehicles</div>
              <div><Users size={18}/> Lead + support convoy</div>
              <div><Map size={18}/> Curated route plan</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}