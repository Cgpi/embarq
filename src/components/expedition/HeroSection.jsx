import "./HeroSection.css";
import heroImage from "../../assets/expedition/expbg.jpg";
import mapImage from "../../assets/expedition/Vector.png";
import tornImage from "../../assets/svg/torn.svg";

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

      {/* Torn Bottom */}
      <div className="exp-hero-torn">
        <img src={tornImage} alt="Torn effect" />
      </div>

    </section>
  );
}

export default HeroSection;
