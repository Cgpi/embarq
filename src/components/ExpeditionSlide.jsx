// src/components/ExpeditionSlide.jsx
import "./UpcomingExpeditions/UpcomingExpeditions.css";

export default function ExpeditionSlide({ image, title, subtitle, date }) {
  return (
    <div
      className="expedition-slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="slide-overlay">
        <h1 className="slide-title">{title}</h1>

        <p className="slide-subtitle">{subtitle}</p>

        <div className="slide-meta">
          <span className="badge">All Women</span>
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
}

