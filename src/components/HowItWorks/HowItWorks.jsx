import { useLayoutEffect, useRef, useState } from "react";
import "./HowItWorks.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import wm1 from "../../assets/svg/hiw1.svg";
import wm2 from "../../assets/svg/hiw2.svg";
import wm3 from "../../assets/svg/hiw3.svg";

gsap.registerPlugin(ScrollTrigger);

function HowItWorks() {

  const sectionRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { icon: wm1, text: "Choose a departure (or a destination)" },
    { icon: wm2, text: "Get the brochure + quick call to align preferences" },
    { icon: wm3, text: "Arrive. Drive. Discover." }
  ];

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const totalSteps = steps.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + totalSteps * 600,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: -1,
          fastScrollEnd: true,

          onUpdate: (self) => {

            const progress = self.progress;

            const index = Math.min(
              totalSteps - 1,
              Math.floor(progress * totalSteps)
            );

            setActiveStep(index);

          }
        }
      });

      stepRefs.current.forEach((_, i) => {

        tl.to({}, {
          duration: 1 / totalSteps,
          onStart: () => setActiveStep(i)
        });

      });

    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();

  }, []);

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
                ref={(el) => (stepRefs.current[index] = el)}
                className={`howworks-step-nrj ${activeStep === index ? "active" : ""}`}
              >

                <div className="howworks-icon-nrj">
                  <img src={step.icon} alt="" />
                </div>

                <div className="howworks-text-nrj">
                  {step.text}
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;