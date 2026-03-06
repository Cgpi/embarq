import "./WhatsAppButton.css";
import whatsappIcon from "../../assets/svg/whatsapp.svg"; // or any whatsapp icon

const WhatsAppButton = () => {
  const phoneNumber = "919529589130";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp Chat" />
      <span className="whatsapp-pulse"></span>
    </a>
  );
};

export default WhatsAppButton;