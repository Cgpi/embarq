import { useEffect, useRef } from "react";
import "./ExpeditionInclusionExclusion.css";
import expeditionBg from "../../assets/expedition/expeditionixbg.jpg";

function ExpeditionInclusionExclusion() {
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
      style={{ backgroundImage: `url(${expeditionBg})` }}
    >
      {/* DARK OVERLAY (Important) */}
      <div className="exp-ie-bg-overlay" />

      <div className="exp-ie-container">
        {/* LEFT CARD */}
        <div
          ref={leftRef}
          className="exp-ie-card exp-ie-left"
        >
          <h2>Inclusions</h2>
          <ul>
            <li>Recced, hand-picked driving routes</li>
            <li>Self-drive car rentals (Toyota RAV4 or similar)</li>
            <li>Fuel for the car</li>
            <li>All exclusive stays on twin sharing basis</li>
            <li>All meals during the expedition</li>
            <li>
              All internal sightseeing and special experiences as per itinerary
            </li>
            <li>
              Local guide and Embarq support team throughout the journey
            </li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div
          ref={rightRef}
          className="exp-ie-card exp-ie-right"
        >
          <h2>Exclusions</h2>
          <ul>
            <li>International air tickets and visa</li>
            <li>Individual insurance and documentation costs</li>
            <li>Refundable security deposit for rental car</li>
            <li>All personal expenses not mentioned in inclusions</li>
            <li>Any cost arising out of unforeseen circumstances</li>
            <li>TCS as applicable</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExpeditionInclusionExclusion;
