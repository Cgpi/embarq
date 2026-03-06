import "./wmembers.css";
import viatorLogo from "../../assets/aboutimages/wm1.png";
import attaLogo from "../../assets/aboutimages/wm2.png";

export default function HomeWmembers() {
  return (
    <section id="homewmembers-section">
      <div className="homewmembers-container">
        <h2 className="homewmembers-title">We are members of</h2>

        <div className="homewmembers-logos">
          <img src={viatorLogo} alt="Viator logo" />
          <img src={attaLogo} alt="Adventure Travel Trade Association logo" />
        </div>
      </div>
    </section>
  );
}