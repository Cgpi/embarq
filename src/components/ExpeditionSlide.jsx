import "./UpcomingExpeditions/UpcomingExpeditions.css";
import womanIcon from "../assets/images/womanicon.svg";

export default function ExpeditionSlide({ image, title, subtitle, date }) {
  return (
    <div
      className="expedition-slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="slide-overlay">
        <h1 className="slide-title">{title}</h1>

        <p className="slide-subtitle">
          {subtitle}. India at its widest
        </p>

        <div className="slide-meta">
          <span className="badge">
            <img src={womanIcon} alt="women" />
            All Women
          </span>
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
}
