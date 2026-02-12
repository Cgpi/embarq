import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Plane, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  // Close on ESC
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
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
    <header className="navbar">

      <div className="nav-inner">

        {/* LOGO */}
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Embarq" className="logo" />
          </Link>
        </div>

        {/* DESKTOP */}
        <div className="nav-right">
          <nav className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/expeditions">Expeditions</Link>
            <Link to="/stories">Travel Stories</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/media">In the Media</Link>
          </nav>

          <button className="book-btn">
            <Plane size={16} />
            Book a Trip
          </button>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>

      </div>

      {/* GLASS OVERLAY */}
      {open && <div className="overlay" onClick={closeMenu}></div>}

      {/* MOBILE MENU */}
      <div ref={menuRef} className={`mobile-menu ${open ? "show" : ""}`}>

        <Link to="/about">About</Link>
        <Link to="/expeditions">Expeditions</Link>
        <Link to="/stories">Travel Stories</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/media">In the Media</Link>

        <button className="book-btn">
          <Plane size={16} />
          Book a Trip
        </button>

      </div>

    </header>
  );
}

export default Navbar;
