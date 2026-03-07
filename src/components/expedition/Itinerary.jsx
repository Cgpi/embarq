import { useState, useRef, useEffect } from "react";
import "./Itinerary.css";
import scrollCar from "../../assets/expedition/scrollcar.webp";

function Itinerary({ data, pageKey }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const contentRef = useRef(null);
  const progressBarRef = useRef(null);

  // Reset scroll when page loads or expedition changes
  useEffect(() => {
    setScrollProgress(0);

    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [pageKey]);

  // Sync scroll when progress changes
  useEffect(() => {
    if (!contentRef.current) return;

    const { scrollHeight, clientHeight } = contentRef.current;
    const maxScroll = scrollHeight - clientHeight;

    contentRef.current.scrollTop = (scrollProgress / 100) * maxScroll;
  }, [scrollProgress]);

  const handleScroll = () => {
    if (!contentRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
    const maxScroll = scrollHeight - clientHeight;

    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
  };

  const updatePosition = (clientX) => {
    if (!progressBarRef.current || !contentRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const percentage = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    );

    const { scrollHeight, clientHeight } = contentRef.current;
    const maxScroll = scrollHeight - clientHeight;

    contentRef.current.scrollTop = (percentage / 100) * maxScroll;
    setScrollProgress(percentage);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const move = (e) => {
      if (!isDragging) return;
      updatePosition(e.type === "mousemove" ? e.clientX : e.touches[0].clientX);
    };

    const up = () => setIsDragging(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("touchend", up);
    };
  }, [isDragging]);
const width = window.innerWidth;

let minClamp;
let maxClamp;

if (width <= 423) {
  // phone
  minClamp = 13;
  maxClamp = 87;
}
else if (width <= 450) {
  // tablet
  minClamp = 12;
  maxClamp = 88;
} else if (width <= 544) {
  // tablet
  minClamp = 10;
  maxClamp = 90;
} else if (width <= 544) {
  // tablet
  minClamp = 10;
  maxClamp = 90;
} 
else if (width <= 670) {
  // tablet
  minClamp = 6;
  maxClamp = 94;
} else if (width <= 768) {
  // tablet
  minClamp = 5;
  maxClamp = 95;
} else {
  // desktop
  minClamp = 5;
  maxClamp = 95;
}

const clampedProgress = Math.min(maxClamp, Math.max(minClamp, scrollProgress));
  return (
    <section className="exp-itinerary">
      <div className="exp-itinerary-container">
        <h2 className="exp-itinerary-title">Itinerary</h2>

        <div className="exp-itinerary-layout">
          <div className="exp-itinerary-left-bar">
            <div
              className="exp-itinerary-left-progress"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          <div
            ref={contentRef}
            onScroll={handleScroll}
            className="exp-itinerary-scroll"
            data-lenis-prevent
          >
            {data.map((day) => (
              <div key={day.day} className="exp-itinerary-item">
                <div className="exp-itinerary-day-badge">
                  DAY {day.day}
                </div>

                <div className="exp-itinerary-content">
                  <h3>{day.title}</h3>
                  <p className="exp-itinerary-description">
                    {day.description}
                  </p>
                  <p className="exp-itinerary-details">
                    {day.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="exp-itinerary-progress-wrapper">
          <div ref={progressBarRef} className="exp-itinerary-progress-bar">
            <img
              src={scrollCar}
              alt="car"
              className="exp-itinerary-progress-car"
              style={{
  left: `${clampedProgress}%`
}}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              draggable={false}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Itinerary;