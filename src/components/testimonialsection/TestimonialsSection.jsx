import "./TestimonialsSection.css";
import { Link } from "react-router-dom";

import person1 from "../../assets/images/person1.webp";
import person2 from "../../assets/images/person2.webp";

export default function TestimonialsSection() {
  return (
    <section id="testi-section">
      <h2 className="testi-title">Testimonials</h2>

      <div className="testi-container">
        {/* CARD 1 */}
        <div className="testi-card">
          <img src={person1} alt="user" className="testi-img" />

          <div className="testi-content">
            <p>
             “My incredible New Zealand road trip with Embarq unveiled a new way to explore a country. The stunning natural beauty and well-developed infrastructure were enhanced by Embarq’s meticulous planning. Thanks to their detailed scouting, we witnessed breathtaking vistas off the beaten track. The journey fostered amazing connections among travellers and elevated the entire experience. Every detail – itinerary, local partnerships, hotels, and care – showed true professionalism.”
            </p>
            <h4>Sanchayeeeta Verma</h4>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="testi-card">
          <img src={person2} alt="user" className="testi-img" />

          <div className="testi-content">
            <p>
              “Though travel excites me, venturing off the beaten path sparks anxiety — especially around accommodations, safety, and food. As a hospitality professional with high expectations, my second self-drive trip with Embarq (after Spain) to Arunachal Pradesh, the Indo-China border, and Kaziranga exceeded all worries. Every route was thoroughly scouted, every hotel personally inspected, and menus thoughtfully curated. The local cuisine and stunning locations made it unforgettable.”
            </p>
            <h4>Anthony Huang</h4>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <Link to="/testimonials" className="testi-btn">
        View more
      </Link>
    </section>
  );
}