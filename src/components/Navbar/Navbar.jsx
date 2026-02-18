import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Plane, Menu, X } from "lucide-react";
import EnquiryPopup from "../../pages/EnquiryPopup";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  const handleOpenEnquiry = () => {
    setEnquiryOpen(true);
    setOpen(false);
  };

  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  // ✅ SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* LOGO */}
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Embarq" className="logo" />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="nav-right">
          <nav className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/expedition">Expeditions</Link>
            <Link to="/stories">Travel Stories</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/testimonials">In the Media</Link>
          </nav>

          <button className="book-btn" onClick={handleOpenEnquiry}>
            <Plane size={16} />
            Book a Trip
          </button>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={closeMenu}></div>}

      {/* MOBILE MENU */}
      <div ref={menuRef} className={`mobile-menu ${open ? "show" : ""}`}>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/expedition" onClick={closeMenu}>Expeditions</Link>
        <Link to="/stories" onClick={closeMenu}>Travel Stories</Link>
        <Link to="/testimonials" onClick={closeMenu}>Testimonials</Link>
        <Link to="/gallery" onClick={closeMenu}>In the Media</Link>
        <Link to="/faq" onClick={closeMenu}>FAQ</Link>
        <Link to="/blog" onClick={closeMenu}>Blog</Link>

        <button className="book-btn" onClick={handleOpenEnquiry}>
          <Plane size={16} />
          Book a Trip
        </button>
      </div>

      <EnquiryPopup open={enquiryOpen} handleClose={handleCloseEnquiry} />
    </header>
  );
}

export default Navbar;
