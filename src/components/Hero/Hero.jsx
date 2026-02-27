import { useLayoutEffect, useRef } from "react";
import "./Hero.css";

import carDesktop from "../../assets/images/car1.webp";
// import carMobile from "../../assets/images/car4.png";
import carMobile from "../../assets/images/hero_optimized.png";
import roadVideo from "../../assets/video/hero2mb.mp4";
import hero1 from "../../assets/svg/hero1.svg";
import hero2 from "../../assets/svg/hero2.svg";
import hero3 from "../../assets/svg/hero3.svg";
import hero4 from "../../assets/svg/hero4.svg";

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

      tl.fromTo(
        videoRef.current,
        { y: -120 },
        { y: 0, ease: "none" },
        0
      );

      tl.to(
        carRef.current,
        { scale: 2, ease: "none" },
        0
      );

      tl.to(
        carRef.current,
        { opacity: 0, ease: "none" },
        0.9
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
  });

  return () => {
    cancelAnimationFrame(frame);

    if (videoRef.current) {
      videoRef.current.pause();
    }

    if (ctx) ctx.revert();
  };

}, []);


  return (
    <section ref={heroRef} className="hero">

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

      <div ref={overlayRef} className="hero-overlay" />

      <picture ref={carRef} className="car-deck">
        <source media="(max-width: 768px)" srcSet={carMobile} />
        <img src={carDesktop} alt="car interior" />
      </picture>

      <div className="hero-inner">
        <div ref={leftRef} className="hero-left">
          <h1>
            World's First<br />
            Women-Only<br />
            Self-Drive <br />Expedition
          </h1>

          <p>
            Handcrafted road journeys in the world’s most dramatic landscapes —premium vehicles, curated stays,
a lead-and-support convoy, and a like-minded crew. You drive. We choreograph the rest.
          </p>

          <div className="buttons">
            <button className="primary">View Upcoming Expeditions</button>
            <button className="secondary">Plan a Bespoke Road Trip</button>
          </div>
        </div>

     <div ref={rightRef} className="hero-right desktop-features">
  <div className="feature">
    <img src={hero1} alt="Limited departures" />
    Limited departures
  </div>

  <div className="feature">
    <img src={hero2} alt="Premium convoy support" />
    Premium convoy support
  </div>

  <div className="feature">
    <img src={hero3} alt="Curated routes" />
    Curated routes
  </div>

  <div className="feature">
    <img src={hero4} alt="Small groups" />
    Small groups
  </div>
</div>
      </div>
    </section>
  );
}

export default Hero;
