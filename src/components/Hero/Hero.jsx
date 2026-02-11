import { useEffect, useRef } from "react";
import "./Hero.css";

import carDesktop from "../../assets/images/car1.png";
import carMobile from "../../assets/images/car4.png";
import roadVideo from "../../assets/video/hero.mp4";

import { Globe, Car, Map, Users } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const carRef = useRef(null);
  const overlayRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {

    // 1️⃣ MAIN SCROLL TIMELINE (scale, move, text, etc.)
let faded = false; // state flag (important)

const tl = gsap.timeline({
scrollTrigger: { trigger: heroRef.current, start: "top top", end: "+=300", scrub: true, pin: true, anticipatePin: 1,

    onUpdate: (self) => {
      // self.progress is between 0 → 1

      if (self.progress === 1 && !faded) {
        faded = true;

        gsap.to(carRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      }

      // restore when scrolling back
      if (self.progress < 1 && faded) {
        faded = false;

        gsap.to(carRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    },
  },
});


    tl.fromTo(
      videoRef.current,
      { y: -120 },
      { y: 0, ease: "none" },
      0
    );

    tl.to(
      carRef.current,
      {
        scale: 2,      // 👈 scroll-controlled zoom
        ease: "none",
      },
      0
    );

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, ease: "none" },
      0
    );

    tl.fromTo(
      leftRef.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, ease: "none" },
      0.2
    );

    tl.fromTo(
      rightRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, ease: "none" },
      0.25
    );





  }, heroRef);

  return () => ctx.revert();
}, []);


  return (
    <section ref={heroRef} className="hero">
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={roadVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div ref={overlayRef} className="hero-overlay" />

      {/* CAR PNG */}
      <picture ref={carRef} className="car-deck">
        <source media="(max-width: 768px)" srcSet={carMobile} />
        <img src={carDesktop} alt="car interior" />
      </picture>

      {/* CONTENT */}
      <div className="hero-inner">
        <div ref={leftRef} className="hero-left">
          <h1>
            Luxury self-drive expeditions:<br />
            fully guided,<br />
            wildly freeing.
          </h1>

          <p>
            Handcrafted road journeys in the world's most dramatic landscapes —
            premium vehicles, curated stays, and a like-minded crew.
          </p>

          <div className="buttons">
            <button className="primary">View Upcoming Expeditions</button>
            <button className="secondary">Plan a Bespoke Road Trip</button>
          </div>
        </div>

        <div ref={rightRef} className="hero-right desktop-features">
          <div className="feature"><Globe size={20} /> Limited departures</div>
          <div className="feature"><Car size={20} /> Premium convoy support</div>
          <div className="feature"><Map size={20} /> Curated routes</div>
          <div className="feature"><Users size={20} /> Small groups</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
