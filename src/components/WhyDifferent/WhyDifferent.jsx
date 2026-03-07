import { useLayoutEffect, useRef, useState } from "react";
import "./WhyDifferent.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgImage from "../../assets/images/whydifferent.jpg";
import wm1 from "../../assets/svg/wm1.svg";
import wm2 from "../../assets/svg/wm2.svg";
import wm3 from "../../assets/svg/wm3.svg";
import wm4 from "../../assets/svg/wm4.svg";
import wm5 from "../../assets/svg/wm5.svg";

gsap.registerPlugin(ScrollTrigger);

const points = [
  {
    icon: wm1,
    title: "Curated routes, not generic itineraries",
    desc: "Scenic drives, offbeat detours, and “how is this real?” stops: built from on-ground scouting.",
  },
  {
    icon: wm2,
    title: "Premium vehicles + premium pace",
    desc: "Scenic drives, offbeat detours, and “how is this real?” stops: built from on-ground scouting.",
  },
  {
    icon: wm3,
    title: "Convoy support = real freedom",
    desc: "Scenic drives, offbeat detours, and “how is this real?” stops: built from on-ground scouting.",
  },
  {
    icon: wm4,
    title: "Privacy of your own car, vibe of a crew",
    desc: "Scenic drives, offbeat detours, and “how is this real?” stops: built from on-ground scouting.",
  },
  {
    icon: wm5,
    title: "Details handled end-to-end",
    desc: "Scenic drives, offbeat detours, and “how is this real?” stops: built from on-ground scouting.",
  },
];

function WhyDifferent() {

  const sectionRef = useRef(null);
  const pointRefs = useRef([]);
  const progressRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {

    let ctx;

    const frame = requestAnimationFrame(() => {

      ctx = gsap.context(() => {

        const totalPoints = pointRefs.current.length;

        ScrollTrigger.matchMedia({

          /* ========================= */
          /* DESKTOP PINNED ANIMATION */
          /* ========================= */

          "(min-width: 768px)": () => {

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: `+=${totalPoints * 700}`,
                scrub: true,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                refreshPriority: -1,

                onUpdate: (self) => {

                  const progress = self.progress;

                  const index = Math.min(
                    totalPoints - 1,
                    Math.floor(progress * totalPoints)
                  );

                  setActiveIndex(index);

                  gsap.to(progressRef.current, {
                    height: `${progress * 100}%`,
                    duration: 0.2,
                    overwrite: true
                  });

                }
              }
            });

            pointRefs.current.forEach((_, i) => {

              tl.to({}, {
                duration: 1 / totalPoints,
                onStart: () => setActiveIndex(i)
              });

            });

          },

          /* ========================= */
          /* MOBILE SCROLL ACTIVATION */
          /* ========================= */

          "(max-width: 767px)": () => {

            pointRefs.current.forEach((el, index) => {

              ScrollTrigger.create({
                trigger: el,
                start: "top 70%",
                end: "bottom 40%",

                onEnter: () => setActiveIndex(index),
                onEnterBack: () => setActiveIndex(index),

                onUpdate: (self) => {

                  const progress = (index + self.progress) / totalPoints;

                  gsap.to(progressRef.current, {
                    height: `${progress * 100}%`,
                    duration: 0.2,
                    overwrite: true
                  });

                }
              });

            });

          }

        });

      }, sectionRef);

      ScrollTrigger.refresh();

    });

    return () => {
      cancelAnimationFrame(frame);
      ctx && ctx.revert();
    };

  }, []);

  return (

    <section
      ref={sectionRef}
      className="why"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <div className="why-container">

        <div className="why-left">
          <h2>What makes Embarq different</h2>
          <p>You get the thrill of a road trip without the chaos.</p>
        </div>

        <div className="why-right">

          <div className="scroll-track" />

          <div
            ref={progressRef}
            className="scroll-indicator"
          />

          <div className="points">

            {points.map((item, index) => (

              <div
                ref={(el) => (pointRefs.current[index] = el)}
                className={`point ${activeIndex === index ? "active" : ""}`}
                key={index}
              >

                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default WhyDifferent;