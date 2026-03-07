import { useState, useRef, useEffect } from "react";
import "./Itinerary.css";
import scrollCar from "../../assets/expedition/scrollcar.webp";
<<<<<<< HEAD

=======
>>>>>>> 09aa540 (updated expedition)

function Itinerary({ data }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const contentRef = useRef(null);
  const progressBarRef = useRef(null);

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
              style={{ left: `${scrollProgress}%` }}
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
