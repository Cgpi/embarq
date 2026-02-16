import "./AboutTrip.css";

function AboutTrip() {
  return (
    <section className="about-trip">
      <div className="about-container">
        <h2 className="about-title">About the Trip</h2>

        <div className="about-grid">
          <div className="about-column">
            <div className="about-item">
              <h3>Destination</h3>
              <p>Georgia</p>
            </div>

            <div className="about-item">
              <h3>Duration</h3>
              <p>8 Days / 7 Nights</p>
            </div>

            <div className="about-item">
              <h3>Trip Cost</h3>
              <p>
                USD 4,000.00 per person
                <span className="cost-note">
                  (Considering 2 people in 1 car and stay on twin sharing)
                </span>
              </p>
            </div>
          </div>

          <div className="about-column">
            <div className="about-item">
              <h3>Travel Dates</h3>
              <p>
                8<sup>th</sup> August to 16<sup>th</sup> August, 2026
              </p>
            </div>

            <div className="about-item">
              <h3>Vehicle</h3>
              <p>Self-Drive 4x4 SUV</p>
            </div>

            <div className="about-item">
              <h3>Driving Distance</h3>
              <p>Approx. 1,845 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTrip;
