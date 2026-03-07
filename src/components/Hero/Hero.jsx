import { useLayoutEffect, useRef, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import loaderVideo from "../../assets/LoderVideo/Loader.mp4";

import carDesktop from "../../assets/images/MainCar1.webp";
// import carMobile from "../../assets/images/car4.png";
import carMobile from "../../assets/images/MobileFrame1.webp";
import roadVideo from "../../assets/video/hero2mb.mp4";
import roadVideomain from "../../assets/video/heronew2.webm";
import hero1 from "../../assets/svg/hero1.svg";
import hero2 from "../../assets/svg/hero2.svg";
import hero3 from "../../assets/svg/hero3.svg";
import hero4 from "../../assets/svg/hero4.svg";
import EnquiryPopup from "../../pages/EnquiryPopup";

import heroposter from "../../assets/images/heroposter.webp";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [open, setOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); 
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const carRef = useRef(null);
  const overlayRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const navigate = useNavigate();
  const menuRef = useRef(null);


  useLayoutEffect(() => {
    let ctx;

    // 🔥 Force video to play
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const frame = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=300",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.fromTo(videoRef.current, { y: -120 }, { y: 0, ease: "none" }, 0);

        tl.to(carRef.current, { scale: 2, ease: "none" }, 0);

        tl.to(carRef.current, { opacity: 0, ease: "none" }, 0.9);

        tl.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, ease: "none" },
          0,
        );

        tl.fromTo(
          leftRef.current,
          { x: -60, opacity: 0 },
          { x: 0, opacity: 1, ease: "none" },
          0.2,
        );

        tl.fromTo(
          rightRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, ease: "none" },
          0.25,
        );
      }, heroRef);
    });

    return () => {
      cancelAnimationFrame(frame);

      if (videoRef.current) {
        videoRef.current.pause();
      }

      if (ctx) ctx.revert();
    };
  }, []);

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

  const handleOpenEnquiry = () => {
    setEnquiryOpen(true);
    setOpen(false);
  };
  const handleCloseEnquiry = () => {
    setEnquiryOpen(false);
  };

  return (
    <section ref={heroRef} className="hero">
       {!videoLoaded && (
        <div className="hero-loader">
          <video autoPlay muted loop playsInline>
            <source src={loaderVideo} type="video/mp4" />
          </video>
        </div>
      )}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroposter}
        onLoadedData={() => setVideoLoaded(true)} 
      >
        <source src={roadVideomain} type="video/webm" />
        <source src={roadVideo  } type="video/mp4" />
      </video>

      <div ref={overlayRef} className="hero-overlay" />

      <picture ref={carRef} className="car-deck">
        <source media="(max-width: 768px)" srcSet={carMobile} />
        <img
          src={carDesktop}
          alt="car interior"
          loading="eager"
          fetchpriority="high"
        />
      </picture>

      <div className="hero-inner">
        <div ref={leftRef} className="hero-left">
          <h1>
            World's First
            <br />
            Women-Only
            <br />
            Self-Drive <br />
            Expedition
          </h1>

          <p>
            Handcrafted road journeys in the world’s most dramatic landscapes
            —premium vehicles, curated stays, a lead-and-support convoy, and a
            like-minded crew. You drive. We choreograph the rest.
          </p>

          <div className="buttons">
            <button
              className="primary"
              onClick={() => navigate("/expedition/k2k2026")}
            >
              View Upcoming Expeditions
            </button>
            <button className="secondary" onClick={handleOpenEnquiry}>
              Plan a Bespoke Road Trip
            </button>
            <EnquiryPopup open={enquiryOpen} handleClose={handleCloseEnquiry} />
          </div>
        </div>

        <div ref={rightRef} className="hero-right desktop-features">
          <div className="feature">
            <img src={hero1} alt="Limited departures" loading="lazy" />
            Limited departures
          </div>

          <div className="feature">
            <img src={hero2} alt="Premium convoy support" loading="lazy" />
            Premium convoy support
          </div>

          <div className="feature">
            <img src={hero3} alt="Curated routes" loading="lazy" />
            Curated and Receed Routes
          </div>

          <div className="feature">
            <img src={hero4} alt="Small groups" loading="lazy" />
            Small groups
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
