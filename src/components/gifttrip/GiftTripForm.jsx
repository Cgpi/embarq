import "./GiftTripForm.css";
import bg from "../../assets/Gift/gifttrip-form-bg.webp";

function GiftTripForm() {
  return (
    <section
      className="gifttrip-form"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="gifttrip-form-overlay">

        <h2 className="gifttrip-form-title">
          Buy the perfect gift! Get in touch
        </h2>

        <form className="gifttrip-form-container">

          <div className="gifttrip-row">
            <input type="text" placeholder="Enter your Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="gifttrip-row">
            <input type="tel" placeholder="Phone Number" />
            <input type="text" placeholder="City" />
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">SUBMIT</button>

        </form>

      </div>
    </section>
  );
}

export default GiftTripForm;