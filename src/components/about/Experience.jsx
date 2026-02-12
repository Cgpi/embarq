import { useEffect, useRef } from "react";
import "./Experience.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".emb-exp-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const data = [
    {
      number: "01",
      text: "Premium self-drive vehicles (suitable for the terrain)",
    },
    {
      number: "02",
      text: "Convoy with Lead + support vehicles",
    },
    {
      number: "03",
      text: "Curated day-wise itinerary and immersive experiences",
    },
    {
      number: "04",
      text: "Handpicked stays with a taste of regional flavours",
    },
    {
      number: "05",
      text: "On-ground assistance and coordination",
    },
    {
      number: "06",
      text: "A small, high-spirited group of travelers",
    },
  ];

  return (
    <section className="emb-exp-section" ref={sectionRef}>
      <h2 className="emb-exp-title">The Embarq Experience</h2>

      <div className="emb-exp-grid">
        {data.map((item, index) => (
          <div className="emb-exp-item" key={index}>
            <span className="emb-exp-number">{item.number}</span>
            <p className="emb-exp-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
