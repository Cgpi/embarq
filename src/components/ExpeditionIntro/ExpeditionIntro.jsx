import { useEffect, useRef } from "react";
import "./ExpeditionIntro.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bgImage from "../../assets/images/expbg.jpg";
import expcar1 from "../../assets/images/excar1.png";
import expcar2 from "../../assets/images/excar2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ExpeditionIntro() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bigCardRef = useRef(null);
  const smallCardRef = useRef(null);
  const edgeRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1.2, // smooth luxury follow
      }
    });

    // EDGE LABEL
    tl.fromTo(edgeRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, ease: "power2.out" },
      0
    );

    // TEXT
    tl.fromTo(textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, ease: "power2.out" },
      0.1
    );

    // BIG CAR (slight scale for cinematic depth)
    tl.fromTo(bigCardRef.current,
      { x: -60, opacity: 0, scale: 0.95 },
      { x: 0, opacity: 1, scale: 1, ease: "power2.out" },
      0.2
    );

    // SMALL CAR from bottom-right
    tl.fromTo(smallCardRef.current,
      { x: 120, y: 120, opacity: 0 },
      { x: 0, y: 0, opacity: 1, ease: "power2.out" },
      0.25
    );

  }, sectionRef);

  return () => ctx.revert();
}, []);



  return (
    <section
      ref={sectionRef}
      className="expedition-intro"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-overlay" />

      <div ref={edgeRef} className="edge-label">
        <span>We are Embarq</span>
      </div>

      <div className="expedition-content">

        <div ref={textRef} className="expedition-text">
          <h2>Where Your Great Expedition Begins</h2>

          <p>
            We are a luxury travel company focusing on road expeditions.
            We organize self-drive tours in the most incredible places on earth.
          </p>

          <p>
            Our experiences are exclusive and unforgettable. Our routes are handcrafted
            and full of adventure. Our vehicles are premium and luxurious.
          </p>

          <p>
            EMBARQ your holidays exploring various countries and their culture
            on our fully guided road expedition.
          </p>

          <p className="signature">Let the road overtake…</p>
        </div>

        <div className="expedition-cards">

          <div
            ref={bigCardRef}
            className="expedition-card big-card"
          >
            <img src={expcar1} alt="" />
          </div>

          <div
            ref={smallCardRef}
            className="expedition-card small-card"
          >
            <img src={expcar2} alt="" />
          </div>

        </div>
      </div>
    </section>
  );
}
