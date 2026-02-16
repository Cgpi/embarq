import "./HeroSection.css";
import heroImage from "../../assets/expedition/expbg.jpg";
import mapImage from "../../assets/expedition/Vector.png";

function HeroSection() {
  return (
    <section className="exp-hero">

      {/* Background */}
      <div className="exp-hero-bg">
        <img src={heroImage} alt="Georgia landscape" />
        <div className="exp-hero-overlay"></div>
      </div>

      {/* Left Vertical Pill */}
      <div className="exp-hero-pill">
        <span>Expedition</span>
      </div>

      {/* Content */}
      <div className="exp-hero-content">

        <img
          src={mapImage}
          alt="Georgia map"
          className="exp-hero-map"
        />

        <h1 className="exp-hero-heading">Georgia</h1>

        <div className="exp-hero-card">
          <h2 className="exp-hero-subheading">
            A Self-Drive Expedition
          </h2>

          <div className="exp-hero-badge">
            👩‍👩‍👧 All Women
          </div>

          <div className="exp-hero-text">
            <h3>Trip Overview:</h3>
            <p>
              A premium all-women self-drive road expedition through Georgia,
              covering historic cities, wine regions, dramatic mountain passes,
              alpine terrain, lush canyons, coastal landscapes, and mineral-rich
              valleys. The journey blends scenic driving, cultural immersion,
              and convoy-supported self-drive freedom, curated and led by the
              Embark co-founder.
            </p>
          </div>
        </div>

      </div>

      {/* TRUE ORGANIC TORN BOTTOM */}
      <div className="exp-hero-torn">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path
            d="
            M0,160
            C140,200 280,100 420,160
            C560,220 700,90 840,160
            C980,220 1120,100 1260,150
            C1340,180 1400,150 1440,165
            L1440,220
            L0,220
            Z
            "
            fill="#fcf5e4"
          />
        </svg>
      </div>

    </section>
  );
}

export default HeroSection;
