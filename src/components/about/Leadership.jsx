import "./Leadership.css";
import founder1 from "../../assets/aboutimages/founder1.jpg";
import founder2 from "../../assets/aboutimages/founder2.jpg";

function Leadership() {
  return (
    <section className="leadership">
      <h2 className="section-title">Founders & Leadership</h2>

      {/* ===== FIRST FOUNDER ===== */}
      <div className="leader-block">
        <div className="leader-image">
          <img src={founder1} alt="Medha Joseph" />
        </div>

        <div className="leader-text">
          <h3>Medha Joseph</h3>
          <div className="designation">
            <span>FOUNDER & DIRECTOR</span>
            <div className="line"></div>
          </div>
          <p>
            Our mission is simple yet profound, we aim to integrate age-old
            traditions with cutting-edge research to provide you with,
            all-natural, and organic products nature’s bounty, combined with
            the essence of Panchagavya, can nurture not only our physical
            health but also our mental and spiritual well-being.
            Furthermore, our commitment extends to the preservation of our
            precious planet.
          </p>
        </div>
      </div>

      {/* ===== SECOND FOUNDER ===== */}
      <div className="leader-block reverse">
        <div className="leader-image">
          <img src={founder2} alt="Sujal Patwardhan" />
        </div>

        <div className="leader-text">
          <h3>Sujal Patwardhan</h3>
          <div className="designation">
            <span>FOUNDER & DIRECTOR</span>
            <div className="line"></div>
          </div>
          <p>
            Sujal is a versatile organizer with strong people-management skills
            and a love for exploring the world by road. She was part of the
            original expedition to Morocco and has since led many international
            and domestic road journeys. Before Embarq, Sujal worked as Vice
            President at an investment bank and has extensive experience in
            human resources. Her interests include Bollywood movies, biryani,
            and collecting wristwatches.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Leadership;
