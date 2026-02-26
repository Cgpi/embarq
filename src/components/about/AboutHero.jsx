import "./AboutHero.css";
import desktopHero from "../../assets/aboutimages/about_desktop_hero.webp";
import mobileHero from "../../assets/aboutimages/about_desktop_hero.webp";
import { ChevronDown } from "lucide-react";
import tornBottomImage from "../../assets/svg/torn.svg";

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

      {/* 🔥 Torn Bottom Effect */}
      <div className="torn-wrapper">
        <img src={tornBottomImage} alt="torn edge" />
      </div>

      {/* Scroll Indicator */}
      {/* <div className="scroll-indicator" onClick={handleScroll}>
        <div className="chevron-stack">
          <ChevronDown size={18} strokeWidth={1.5} />
          <ChevronDown size={18} strokeWidth={1.5} />
          <ChevronDown size={18} strokeWidth={1.5} />
          <ChevronDown size={18} strokeWidth={1.5} />
        </div>
        <span>SCROLL DOWN</span>
      </div> */}
    </section>
  );
}

export default AboutHero;