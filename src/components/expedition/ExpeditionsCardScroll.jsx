import { useRef, useState, useEffect } from "react";
import "./ExpeditionsCardScroll.css";

import kyrgyzstan from "../../assets/images/georgia.png";
import spain from "../../assets/images/finland.jpg";
import balkans from "../../assets/images/japan.jpg";
import russia from "../../assets/images/scotland.jpg";
import iceland from "../../assets/images/skorea.jpg";
import ladakh from "../../assets/images/slide1.png";

const data = [
  { title: "Kyrgyzstan", image: kyrgyzstan },
  { title: "Spain", image: spain },
  { title: "Balkans", image: balkans },
  { title: "Russia", image: russia },
  { title: "Iceland", image: iceland },
  { title: "Ladakh", image: ladakh },
];

export default function ExpeditionsCardScroll() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  /* ========================= */
  /* SCROLL PROGRESS           */
  /* ========================= */
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const percentage = (el.scrollLeft / maxScroll) * 100;
    setProgress(percentage);
  };

  /* ========================= */
  /* BUTTON SCROLL             */
  /* ========================= */
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 260;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /* ========================= */
  /* AUTO SCROLL               */
  /* ========================= */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="upcoming">
      <div className="upcoming-container">

        {/* LEFT */}
        <div className="upcoming-left">
          <h2>
            Upcoming <br /> Expeditions
          </h2>
        </div>

        {/* RIGHT */}
        <div className="upcoming-right">

          {/* SCROLL */}
          <div
            className="upcoming-scroll"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {data.map((item, index) => (
              <div className="upcoming-card" key={index}>
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="upcoming-controls">
            <button onClick={() => scroll("left")}>◀</button>
            <button onClick={() => scroll("right")}>▶</button>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}