import "./Experience2.css";
import {
  Car,
  Map,
  Route,
  LifeBuoy,
  Users,
} from "lucide-react";

export default function Experience2() {
  return (
    <section id="exp2-section">
      <div className="exp2-container">
        <h2 className="exp2-title">The Embarq Experience</h2>

        <p className="exp2-subtext">
          Handpicked stays. Thoughtful food stops. Picture-perfect pit stops.
          A route that keeps getting better.
        </p>

        <p className="exp2-included">Included on most expeditions:</p>

        <ul className="exp2-list">
          <li className="exp2-item">
            <Car className="exp2-icon" />
            <span>Premium self-drive vehicles (or equivalent category)</span>
          </li>

          <li className="exp2-item">
            <Route className="exp2-icon" />
            <span>Lead + support convoy</span>
          </li>

          <li className="exp2-item">
            <Map className="exp2-icon" />
            <span>Curated day-by-day route plan</span>
          </li>

          <li className="exp2-item">
            <LifeBuoy className="exp2-icon" />
            <span>On-ground assistance and coordination</span>
          </li>

          <li className="exp2-item">
            <Users className="exp2-icon" />
            <span>A small, high-spirited group of travelers.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}