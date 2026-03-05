import { useEffect, useRef, useState } from "react";
import "./WhyDifferent.css";

import bgImage from "../../assets/images/whydifferent.jpg";
import wm1 from "../../assets/svg/wm1.svg";
import wm2 from "../../assets/svg/wm2.svg";
import wm3 from "../../assets/svg/wm3.svg";
import wm4 from "../../assets/svg/wm4.svg";
import wm5 from "../../assets/svg/wm5.svg";

import GlobalScrollDownNRJ from "../scroll label/GlobalScrollDownNRJ";

const points = [
  {
    icon: wm1,
    title: "Curated routes, not generic itineraries",
    desc: "Scenic drives, offbeat detours, and “how is this real?” stops: built from on-ground scouting.",
  },
  {
    icon: wm2,
    title: "Premium vehicles + premium pace",
    desc: "Scenic drives, offbeat detours...",
  },
  {
    icon: wm3,
    title: "Convoy support = real freedom",
    desc: "Scenic drives, offbeat detours...",
  },
  {
    icon: wm4,
    title: "Privacy of your own car, vibe of a crew",
    desc: "Scenic drives, offbeat detours...",
  },
  {
    icon: wm5,
    title: "Details handled end-to-end",
    desc: "Scenic drives, offbeat detours...",
  },
];

function WhyDifferent() {

  const sectionRef = useRef(null);
  const pointRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const height = section.offsetHeight;

      const scrolled = Math.min(
        Math.max(-rect.top / height, 0),
        1
      );

      setProgress(scrolled);

      const index = Math.min(
        points.length - 1,
        Math.floor(scrolled * points.length)
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <section
      ref={sectionRef}
      className="why"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      <div className="why-container">

        {/* LEFT */}
        <div className="why-left">
          <h2>What makes Embarq different</h2>
          <p>You get the thrill of a road trip without the chaos.</p>
        </div>

        {/* RIGHT */}
        <div className="why-right">

          <div className="scroll-track" />

          {/* animated progress bar */}
          <div
            className="scroll-indicator"
            style={{
              height: `${progress * 100}%`
            }}
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
      {/* <GlobalScrollDownNRJ/> */}
    </section>
  );
}

export default WhyDifferent;