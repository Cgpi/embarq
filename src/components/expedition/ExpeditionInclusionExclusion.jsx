import { useEffect, useRef } from "react";
import "./ExpeditionInclusionExclusion.css";
import expeditionBg from "../../assets/expedition/expeditionixbg.jpg";

function ExpeditionInclusionExclusion({ data }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("exp-ie-visible");
          }
        });
      },
      { threshold: 0.35 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
  }, []);

  return (
    <section
      className="exp-ie-section"
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <div className="exp-ie-bg-overlay" />

      <div className="exp-ie-container">
        {/* LEFT */}
        <div ref={leftRef} className="exp-ie-card exp-ie-left">
          <h2>Inclusions</h2>
          <ul>
            {data.inclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div ref={rightRef} className="exp-ie-card exp-ie-right">
          <h2>Exclusions</h2>
          <ul>
            {data.exclusions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExpeditionInclusionExclusion;
