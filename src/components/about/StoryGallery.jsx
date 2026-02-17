import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./StoryGallery.css";

import g1 from "../../assets/aboutimages/g1.jpg";
import g2 from "../../assets/aboutimages/g2.jpg";
import g3 from "../../assets/aboutimages/g3.jpg";
import g4 from "../../assets/aboutimages/g4.jpg";
import g5 from "../../assets/aboutimages/g5.jpg";
import g6 from "../../assets/aboutimages/g6.jpg";
import g7 from "../../assets/aboutimages/g7.jpg";
import g8 from "../../assets/aboutimages/g8.jpg";
import g9 from "../../assets/aboutimages/g9.jpg";
import g10 from "../../assets/aboutimages/g10.jpg";

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

const StoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const slideHeightRem = 16;   // 16rem image height
  const gapRem = 1.25;         // 1.25rem gap
  const totalHeight = slideHeightRem + gapRem;

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation
  useEffect(() => {
    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      y: `-${currentIndex * totalHeight}rem`,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        if (currentIndex >= galleryImages.length) {
          gsap.set(trackRef.current, { y: 0 });
          setCurrentIndex(0);
        }
      }
    });
  }, [currentIndex]);

  return (
    <div className="sg-wrapper">

      {/* Desktop Grid */}
      <div className="sg-desktop-grid">
        {galleryImages.map((img, i) => (
          <div key={i} className={`sg-grid-item sg-item-${i + 1}`}>
            <img src={img} alt={`Gallery ${i}`} />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sg-mobile-wrapper">
        <div className="sg-viewport">
          <div className="sg-track" ref={trackRef}>
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} className="sg-slide">
                <img src={img} alt={`Mobile ${i}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="sg-arrow-btn" onClick={nextSlide}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="1.2rem"
            height="1.2rem"
          >
            <path d="M7 10l5 5 5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoryGallery;
