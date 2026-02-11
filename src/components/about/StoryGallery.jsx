import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./StoryGallery.css";

// Importing images
import g1 from "../../assets/aboutimages/g1.jpg";
import g2 from "../../assets/aboutimages/g1.jpg";
import g3 from "../../assets/aboutimages/g1.jpg";
import g4 from "../../assets/aboutimages/g1.jpg";
import g5 from "../../assets/aboutimages/g1.jpg";
import g6 from "../../assets/aboutimages/g1.jpg";
import g7 from "../../assets/aboutimages/g1.jpg";
import g8 from "../../assets/aboutimages/g1.jpg";
import g9 from "../../assets/aboutimages/g1.jpg";
import g10 from "../../assets/aboutimages/g1.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

const StoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Handle the vertical rotation for mobile
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    // GSAP Animation for smooth vertical slide
    // Only triggers on mobile where the slider is visible
    gsap.to(sliderRef.current, {
      y: -(currentIndex * 320), // 320 matches image height + gap
      duration: 0.6,
      ease: "power2.out",
    });
  }, [currentIndex]);

  return (
    <div className="gallery-container">
      {/* Desktop Grid View */}
      <div className="desktop-grid">
        {images.map((img, index) => (
          <div key={index} className={`grid-item item-${index + 1}`}>
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className="mobile-slider-wrapper">
        <div className="slider-viewport">
          <div className="slider-track" ref={sliderRef}>
            {/* Doubling array to ensure smooth infinite feel, 
                though index logic handles the loop */}
            {images.map((img, index) => (
              <div key={index} className="mobile-slide">
                <img src={img} alt={`Mobile Gallery ${index}`} />
              </div>
            ))}
          </div>
        </div>
        
        <button className="down-arrow" onClick={handleNext}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoryGallery;