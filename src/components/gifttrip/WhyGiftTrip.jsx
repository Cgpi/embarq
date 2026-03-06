import "./WhyGiftTrip.css";

import img1 from "../../assets/Gift/giftcollage1.webp";
import img2 from "../../assets/Gift/giftcollage2.webp";
import pointer from "../../assets/svg/giftarrow.svg";

const points = [
  {
    title: "Memories Over Material Things",
    text: "Unlike objects that gather dust, experiences last a lifetime. A road trip, an expedition, or a cultural deep dive creates stories to cherish forever."
  },
  {
    title: "Perfect for All Occasions",
    text: "Whether it’s a birthday, anniversary, graduation, or just because — you can never go wrong with an adventure!"
  },
  {
    title: "A Gift of Escape",
    text: "Give your loved ones a break from routine and a chance to explore breathtaking landscapes, hidden gems, and thrilling new cultures."
  },
  {
    title: "Tailored Adventures with Embarq",
    text: "Each experience is crafted carefully so every trip becomes unforgettable."
  },
  {
    title: "Transformation Through Travel",
    text: "Travel opens perspectives and creates stories that remain long after the journey ends."
  }
];

function WhyGiftTrip() {
  return (
    <section className="whytrip">

      <div className="whytrip-container">

        {/* IMAGE COLLAGE LEFT */}
        <div className="whytrip-images">

          <img
            src={img1}
            alt="Adventure convoy"
            loading="lazy"
            className="whytrip-img img-top"
          />

          <img
            src={img2}
            alt="Travel moment"
            loading="lazy"
            className="whytrip-img img-bottom"
          />

        </div>

        {/* TEXT CONTENT RIGHT */}
        <div className="whytrip-content">

          <h2>Why gift a Trip?</h2>

          <p className="whytrip-intro">
            A trip isn’t just a gift — it’s an unforgettable experience wrapped in adventure
            and discovery! When you’re struggling to find the perfect present for someone who has it
            all, gifting travel is the ultimate way to surprise and delight.
          </p>

          <div className="whytrip-points">
            {points.map((item, index) => (
              <div key={index} className="whytrip-point">

                <img src={pointer} alt="" className="whytrip-icon" />

                <div className="whytrip-point-text">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>

              </div>
            ))}
          </div>

          {/* EXTRA TEXT AFTER POINTS */}

          <p className="whytrip-extra">
            With Embarq, you’re not just gifting a trip, you’re gifting freedom,
            exploration, and the magic of the unknown. Ready to surprise someone
            with the adventure of a lifetime?
          </p>

          <h3 className="whytrip-how-title">How It Works?</h3>

          <p className="whytrip-how-text">
            You can choose any value for the gift, and the recipient can apply
            it toward any of Embarq’s upcoming trips.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WhyGiftTrip;