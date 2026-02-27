import "./Footer.css";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

import logo from "../../assets/logo.png";
import visa from "../../assets/footer/fcards.png";
import tripa from "../../assets/footer/tripa.png";


export default function Footer() {
  return (
    <footer id="footer-section">
      <div className="footer-container">
        
        {/* LEFT */}
        <div className="footer-col footer-brand">
          <img src={logo} alt="Embarq logo" className="footer-logo" />
          <h3>Embarq Motorworld Pvt. Ltd.</h3>

          <img src={tripa} alt="Tripadvisor" className="footer-trip-logo" />

          <button className="footer-review-btn">write a review</button>
        </div>

        {/* LINKS 1 */}
        <div className="footer-col">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/expeditions">Expeditions</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/media">Media</Link>
          <Link to="/blog">Blogs</Link>
        </div>

        {/* LINKS 2 */}
        <div className="footer-col">
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/gift-trip">Gift a Trip</Link>
          <Link to="/partnership">Partnership</Link>
          <Link to="/faq">FAQ’s</Link>
          <Link to="/cancellation-policy">Cancellation Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        {/* CONTACT */}
        <div className="footer-col footer-contact">
          <div className="footer-contact-item">
            <Phone size={16} />
            <div>
              <p>Call us</p>
              <span>(+91) 88678 09433</span>
              <span>(+91) 92721 66615</span>
            </div>
          </div>

          <div className="footer-contact-item">
            <Mail size={16} />
            <p>
              Mail us{" "}
              <a href="mailto:enquiries@embarq.in">
                enquiries@embarq.in
              </a>
            </p>
          </div>

          <div className="footer-social">
            <p>Follow us</p>
            <div className="footer-icons">
              <Facebook size={18} />
              <Instagram size={18} />
              <Twitter size={18} />
              <Linkedin size={18} />
              <Youtube size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
    <div className="footer-bottom">
  <p>
    Copyright © 2025 Embarq Motorworld Pvt. Ltd. | All Rights Reserved.
  </p>

  <div className="footer-payments">
    <img src={visa} alt="Payment methods" />
  </div>
</div>
    </footer>
  );
}