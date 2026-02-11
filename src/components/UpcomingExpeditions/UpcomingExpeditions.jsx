import { useEffect, useRef } from "react";
import "./UpcomingExpeditions.css";
import ExpeditionSlide from "../ExpeditionSlide";

import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/georgia.png";
import slide3 from "../../assets/images/skorea.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const expeditions = [
  {
    title: "Kutch to Kibithoo",
    subtitle: "Salt flats to North Eastern Mountains",
    date: "18–28 December 2026",
    image: slide1,
  },
  {
    title: "Georgia",
    subtitle: "Mountain passes. Offbeat routes.",
    date: "8–16 August 2026",
    image: slide2,
  },
  {
    title: "South Korea",
    subtitle: "Perfect roads. Mountain curves.",
    date: "21–29 November 2026",
    image: slide3,
  },
];

export default function UpcomingExpeditions() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth;

    // Horizontal scroll animation
    gsap.to(track, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Side label animation
    gsap.to(".side-label", {
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });

  }, sectionRef);

  return () => ctx.revert();
}, []);



  return (
    <section className="upcoming-wrapper" ref={sectionRef}>

         {/* LEFT EDGE LABEL */}
    <div className="side-label">
      <span>Upcoming Road Expeditions</span>
    </div>
      <div className="horizontal-track" ref={trackRef}>
        {expeditions.map((exp, index) => (
          <ExpeditionSlide key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
