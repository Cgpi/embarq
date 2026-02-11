import "./Leadership.css";
import founder1 from "../../assets/aboutimages/founder1.jpg";
import founder2 from "../../assets/aboutimages/founder2.jpg";

function Leadership() {
  return (
    <section className="leadership">
      <h2>Founders & Leadership</h2>

      <div className="leader-block">
        <img src={founder1} alt="Founder 1" />
        <div className="leader-text">
          <h3>Medha Joseph</h3>
          <span>Founder & Director</span>
          <p>
            Our mission is simple yet profound...
          </p>
        </div>
      </div>

      <div className="leader-block reverse">
        <img src={founder2} alt="Founder 2" />
        <div className="leader-text">
          <h3>Sujal Patwardhan</h3>
          <span>Founder & Director</span>
          <p>
            Sujal is a versatile organizer...
          </p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
