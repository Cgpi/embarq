import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import { Plane, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  // Close with ESC key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">

      <div className="nav-inner">

        {/* LOGO */}
        <div className="nav-left">
          <img src={logo} alt="Embarq" className="logo" />
        </div>

        {/* DESKTOP */}
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#" >About</a>
            <a href="#">Expeditions</a>
            <a href="#">Travel Stories</a>
            <a href="/testimonials">Testimonials</a>
            <a href="#">In the Media</a>
          </nav>

          <button className="book-btn">
            <Plane size={16} />
            Book a Trip
          </button>
        </div>

        {/* TOGGLE */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </div>

      </div>

      {/* MOBILE DRAWER */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>

        <a href="#" onClick={closeMenu}>About</a>
        <a href="#" onClick={closeMenu}>Expeditions</a>
        <a href="#" onClick={closeMenu}>Travel Stories</a>
        <a href="/testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#" onClick={closeMenu}>In the Media</a>

        <button className="book-btn" onClick={closeMenu}>
          <Plane size={16} />
          Book a Trip
        </button>

      </div>

    </header>
  );
}

export default Navbar;
