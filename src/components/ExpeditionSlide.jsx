import "./UpcomingExpeditions/UpcomingExpeditions.css";
import womanIcon from "../assets/svg/womanicon.svg";
import download from "../assets/svg/download.svg";

export default function ExpeditionSlide({ image, title, subtitle, date , brochure}) {
  return (
    <div
      className="expedition-slide"
      style={{ backgroundImage: `url(${image})` }}
    >
     <div className="slide-overlay">

  {/* DATE ON TOP */}
  <p className="slide-date-top">{date}</p>

  {/* TITLE */}
  <h1 className="slide-title">{title.toUpperCase()}</h1>

  {/* SUBTITLE */}
  <p className="slide-subtitle">
    {subtitle}
  </p>

  {/* CTA BUTTON (NEW) */}
<a href={brochure} download className="brochure-btn">
  <img src={download} alt="download" />
  Download Brochure
</a>

</div>
    </div>
  );
}
