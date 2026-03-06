import "./GiftTripHero.css";
import heroImg from "../../assets/Gift/Gifthero.webp";

function GiftTripHero() {
  return (
    <section className="gifttrip-hero">
      
      <img
        src={heroImg}
        alt="Road trip view from car mirror"
        className="gifttrip-hero-img"
        loading="eager"
        fetchpriority="high"
      />

      <div className="gifttrip-hero-content">
        <h1>Gift a Trip</h1>
      </div>

    </section>
  );
}

export default GiftTripHero;