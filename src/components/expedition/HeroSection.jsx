import "./HeroSection.css";
import tornImage from "../../assets/svg/torn.svg";
import womanIcon from "../../assets/svg/womanicon.svg";

function HeroSection({ data }) {
  return (
    <section className="exp-hero">
      
      <div className="exp-hero-bg">
        <img src={data.bgImage} alt={data.title} />
        <div className="exp-hero-overlay"></div>
      </div>

      <div className="exp-hero-content">
        <div className="exp-hero-card-wrapper">

          <h1 className="exp-hero-heading">{data.title}</h1>

          <div className="exp-hero-card">
            <h2 className="exp-hero-subheading">{data.subtitle}</h2>

            <div className="exp-hero-badge">
              <img src={womanIcon} alt="women icon" className="badge-icon" />
              <span>{data.badge}</span>
            </div>

            <div className="exp-hero-text">
              <h3>Trip Overview:</h3>
              <p>{data.description}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="exp-hero-torn-wrapper">
        <img src={tornImage} alt="torn edge" />
      </div>

    </section>
  );
}

export default HeroSection;