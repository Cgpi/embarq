import "./Member.css";
import viatorLogo from "../../assets/aboutimages/wm1.png";
import attaLogo from "../../assets/aboutimages/wm2.png";

export default function Members() {
  return (
    <section id="members-section">
      <div className="members-container">
        <h2 className="members-title">We are members of</h2>

        <div className="members-logos">
          <img src={viatorLogo} alt="Viator logo" />
          <img src={attaLogo} alt="Adventure Travel Trade Association logo" />
        </div>
      </div>
    </section>
  );
}