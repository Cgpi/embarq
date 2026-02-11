import "./AboutHero.css";
import desktopHero from "../../assets/aboutimages/about-hero-desktop.png";
import mobileHero from "../../assets/aboutimages/about-hero-mobile.png";
import { ChevronDown } from "lucide-react";

function AboutHero() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="about-hero">
      {/* Desktop Image */}
      <img
        src={desktopHero}
        alt="Embarq Journey"
        className="hero-image desktop"
      />

      {/* Mobile Image */}
      <img
        src={mobileHero}
        alt="Embarq Journey"
        className="hero-image mobile"
      />

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={handleScroll}>
        <div className="chevron-stack">
          <ChevronDown size={18} strokeWidth={1.5} />
          <ChevronDown size={18} strokeWidth={1.5} />
          <ChevronDown size={18} strokeWidth={1.5} />
          <ChevronDown size={18} strokeWidth={1.5} />
        </div>
        <span>SCROLL DOWN</span>
      </div>
    </section>
  );
}

export default AboutHero;
