import "./AboutTrip.css";

function AboutTrip({ data }) {
  return (
    <section className="about-trip">
      <div className="about-container">
        <h2 className="about-title">About the Trip</h2>

        <div className="about-grid">
          <div className="about-column">
            <div className="about-item">
              <h3>Destination</h3>
              <p>{data.destination}</p>
            </div>

            <div className="about-item">
              <h3>Duration</h3>
              <p>{data.duration}</p>
            </div>

            <div className="about-item">
              <h3>Trip Cost</h3>
              <p>{data.cost}</p>
            </div>
          </div>

          <div className="about-column">
            <div className="about-item">
              <h3>Travel Dates</h3>
              <p>{data.travelDates}</p>
            </div>

            <div className="about-item">
              <h3>Vehicle</h3>
              <p>{data.vehicle}</p>
            </div>

            <div className="about-item">
              <h3>Driving Distance</h3>
              <p>{data.distance}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTrip;
