import { useEffect, useRef, useState } from "react";
import "./HowItWorks.css";

import bgImage from "../../assets/images/howitworks.webp";
import bgMobile from "../../assets/images/howitworksmobile.webp";

import wm1 from "../../assets/svg/hiw1.svg";
import wm2 from "../../assets/svg/hiw2.svg";
import wm3 from "../../assets/svg/hiw3.svg";

import GlobalScrollDownNRJ from "../scroll label/GlobalScrollDownNRJ";

function HowItWorks() {

  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lockScroll, setLockScroll] = useState(false);

  useEffect(() => {

    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.7) {
          setLockScroll(true);
        } else {
          setLockScroll(false);
        }
      },
      { threshold: [0.7] }
    );

    observer.observe(section);

    return () => observer.disconnect();

  }, []);

  useEffect(() => {

    const handleWheel = (e) => {

      if (!lockScroll) return;

      if (e.deltaY > 0) {

        e.preventDefault();

        setActiveStep((prev) => {

          if (prev < 2) return prev + 1;

          setLockScroll(false);
          return prev;

        });

      }

      if (e.deltaY < 0) {

        e.preventDefault();

        setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));

      }

    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);

  }, [lockScroll]);

  const steps = [
    { icon: wm1, text: "Choose a departure (or a destination)" },
    { icon: wm2, text: "Get the brochure + quick call to align preferences" },
    { icon: wm3, text: "Arrive. Drive. Discover." },
  ];

  return (

    <section ref={sectionRef} className="howworks-section-nrj">

      <div className="howworks-overlay-nrj" />

      <div className="howworks-container-nrj">

        <div className="howworks-content-nrj">

          <h2>How it works</h2>
          <p>Your expedition, in 3 simple steps.</p>

          <div className="howworks-timeline-nrj">

            {steps.map((step, index) => (

              <div
                key={index}
                className={`howworks-step-nrj ${activeStep === index ? "active" : ""}`}
              >

                <div className="howworks-icon-nrj">
                  <img src={step.icon} alt="" />
                </div>

                <div className="howworks-text-nrj">{step.text}</div>

              </div>

            ))}

          </div>

        </div>

      </div>
            <GlobalScrollDownNRJ />
    </section>

  );
}

export default HowItWorks;