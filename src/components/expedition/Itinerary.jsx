import { useState, useRef, useEffect } from "react";
import "./Itinerary.css";
import scrollCar from "../../assets/expedition/scrollcar.png";

const itineraryData = [
  {
    day: 1,
    title: "Arrival in Tbilisi",
    description:
      "Arrive in Georgia's capital, Tbilisi, where your journey begins.",
    details:
      "Transfer to the hotel and ease into the city's unique blend of old-world charm and modern vibrancy. The day is kept relaxed to recover from travel and prepare for the road journey ahead.",
  },
  {
    day: 2,
    title: "Tbilisi Exploration",
    description: "Discover the vibrant streets of Tbilisi.",
    details:
      "Visit the Old Town, sulfur baths, Narikala Fortress, and enjoy traditional Georgian cuisine.",
  },
  {
    day: 3,
    title: "Tbilisi to Kazbegi",
    description: "Drive through the dramatic Georgian Military Highway.",
    details:
      "Stop at Ananuri Fortress and arrive in Kazbegi for stunning mountain views.",
  },
  {
    day: 4,
    title: "Kazbegi Adventures",
    description: "Explore the mountains and visit Gergeti Trinity Church.",
    details:
      "Hike or drive to this iconic church with breathtaking views of Mount Kazbek.",
  },
  {
    day: 5,
    title: "Kazbegi to Gudauri",
    description: "Continue your mountain journey to Gudauri.",
    details:
      "Enjoy scenic drives and optional activities in this mountain resort town.",
  },
  {
    day: 6,
    title: "Wine Region Tour",
    description: "Drive to Kakheti wine region.",
    details:
      "Visit traditional wineries and taste Georgian wines made in ancient qvevri clay vessels.",
  },
  {
    day: 7,
    title: "Sighnaghi and Countryside",
    description: "Explore the charming town of Sighnaghi.",
    details:
      "Walk through the town of love with beautiful views over Alazani Valley.",
  },
  {
    day: 8,
    title: "Return to Tbilisi",
    description: "Drive back to Tbilisi for departure.",
    details:
      "Last-minute shopping and farewell dinner before your journey home.",
  },
];
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
