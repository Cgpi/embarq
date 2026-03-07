import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Plane, Menu, X, PhoneCall } from "lucide-react";
import EnquiryPopup from "../../pages/EnquiryPopup";
import { motion, AnimatePresence } from "framer-motion";
import navcar from "../../assets/svg/navcar.svg";

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

  // Add this above return
  const expeditionList = [
    { name: "K2k2026", slug: "k2k2026" },
    { name: "Scotland", slug: "scotland" },
    { name: "Romania", slug: "romania" },
    { name: "Georgia", slug: "georgia" },
    { name: "South Korea", slug: "southkorea" },
    { name: "Finland", slug: "finland" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
            <div
              className="dropdown-wrapper"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="dropdown-title">Expeditions</span>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {expeditionList.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/expedition/${item.slug}`}
                        className="dropdown-item"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* <Link to="/stories">Travel Stories</Link> */}
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/media">In the Media</Link>
          </nav>

          {/* <a href="tel:8867809433" className="call-btn">
  <PhoneCall size={16} />
  Call
</a> */}

          <button className="book-btn" onClick={handleOpenEnquiry}>
            <img src={navcar} alt="car icon" className="navcar-icon" />
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
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <div className="mobile-dropdown">
          <div
            className="mobile-dropdown-header"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          >
            Expeditions
          </div>

          <AnimatePresence>
            {mobileDropdownOpen && (
              <motion.div
                className="mobile-dropdown-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {expeditionList.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/expedition/${item.slug}`}
                    onClick={() => {
                      closeMenu();
                      setMobileDropdownOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* <Link to="/stories" onClick={closeMenu}>
          Travel Stories
        </Link> */}
        <Link to="/testimonials" onClick={closeMenu}>
          Testimonials
        </Link>
        <Link to="/media" onClick={closeMenu}>
          In the Media
        </Link>
        {/* <Link to="/faq" onClick={closeMenu}>
          FAQ
        </Link> */}
        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>

        {/* <a href="tel:8867809433" className="call-btn">
  <PhoneCall size={16} />
  Call
</a> */}

        <button className="book-btn" onClick={handleOpenEnquiry}>
          <img src={navcar} alt="car icon" className="navcar-icon" />
          Book a Trip
        </button>
      </div>

      <EnquiryPopup open={enquiryOpen} handleClose={handleCloseEnquiry} />
    </header>
  );
}

export default Navbar;
