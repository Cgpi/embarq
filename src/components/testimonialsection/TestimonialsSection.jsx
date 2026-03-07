import "./TestimonialsSection.css";
import { Link } from "react-router-dom";

import person1 from "../../assets/images/person1.webp";
import person2 from "../../assets/images/person2.webp";
import bgImage from "../../assets/images/testibg.webp";

export default function TestimonialsSection() {
  return (
    <section
      id="testi-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="testi-overlay">
        <h2 className="testi-title">Testimonials</h2>

        <div className="testi-container">

          {/* CARD 1 */}
          <div className="testi-card">

            <div className="testi-img-box">
              <img src={person1} alt="user" />
            </div>

            <div className="testi-content">
              <p>
                My incredible New Zealand road trip with Embarq unveiled a new way to explore a country. The stunning natural beauty and well-developed infrastructure were enhanced by Embarq’s meticulous planning. Thanks to their detailed scouting, we witnessed breathtaking vistas off the beaten track. The journey fostered amazing connections among travellers and elevated the entire experience. Every detail – itinerary, local partnerships, hotels, and care – showed true professionalism.
              </p>
              <h4>Sanchayeeeta Verma</h4>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="testi-card">

            <div className="testi-img-box">
              <img src={person2} alt="user" />
            </div>

            <div className="testi-content">
              <p>
                One of the best self-drive group trips I’ve taken recently. Very well curated and organised with each person’s comfort in mind. Sujal is an amazing trip organiser and a great companion throughout the tour.
              </p>
              <h4>Archana Singh</h4>
            </div>

          </div>

        </div>

        <Link to="/testimonials" className="testi-btn">
          View more
        </Link>
      </div>
    </section>
  );
}