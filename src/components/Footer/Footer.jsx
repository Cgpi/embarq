import "./Footer.css";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  X,
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

          <a
  href="https://www.tripadvisor.in/UserReviewEdit-g187514-d24140656-Embarq_Motorworld_Pvt_Ltd-Madrid.html"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="footer-review-btn">Write a Review</button>
</a>
        </div>

        {/* LINKS 1 */}
        <div className="footer-col">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          {/* <Link to="/expeditions">Expeditions</Link> */}
          <Link to="/gallery">Gallery</Link>
          <Link to="/media">Media</Link>
          <Link to="/blog">Blogs</Link>
        </div>

        {/* LINKS 2 */}
        <div className="footer-col">
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/gift-trip">Gift a Trip</Link>
          <Link to="/partnership">Partnership</Link>
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
              <a href="mailto:enquiries@embarq.in">enquiries@embarq.in</a>
            </p>
          </div>

          <div className="footer-social">
            <p>Follow us</p>
            <div className="footer-icons">
              <a
                href="https://www.facebook.com/Embarqmotorworld/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/embarqmotorworld/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://x.com/embarq_official"
                target="_blank"
                rel="noopener noreferrer"
                className="x-icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="currentColor"
                >
                  <path d="M18.901 1.153h3.68l-8.043 9.192 9.46 12.502h-7.406l-5.804-7.584-6.633 7.584H.475l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932z" />
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/company/embarq-motorworld-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.youtube.com/@EmbarqTravelExperiences"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={18} />
              </a>
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
