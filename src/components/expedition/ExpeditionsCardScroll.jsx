import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ExpeditionsCardScroll.css";

import Georgia from "../../assets/images/georgia.webp";
import k2k from "../../assets/images/k2k.webp";
import scotland from "../../assets/images/scotland.webp";
import romania from "../../assets/images/romania.webp";
import korea from "../../assets/images/skorea.webp";
import finland from "../../assets/images/finland.webp";

const data = [
  { title: "K2K Expedition", image: k2k, slug: "k2k2026" },
  { title: "Scotland", image: scotland, slug: "scotland" },
  { title: "Romania", image: romania, slug: "romania" },
  { title: "Georgia", image: Georgia, slug: "georgia" },
  { title: "South Korea", image: korea, slug: "southkorea" },
  { title: "Finland", image: finland, slug: "finland" },
];

export default function ExpeditionsCardScroll() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  /* SCROLL PROGRESS */
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const percentage = (el.scrollLeft / maxScroll) * 100;
    setProgress(percentage);
  };

  /* BUTTON SCROLL */
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 260;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /* AUTO SCROLL */
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

        <div className="upcoming-left">
          <h2>
            Upcoming <br /> Expeditions
          </h2>
        </div>

        <div className="upcoming-right">

          <div
            className="upcoming-scroll"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {data.map((item, index) => (
              <Link
                key={index}
                to={"/expedition/" + item.slug}
                className="upcoming-card"
              >
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>

          <div className="upcoming-controls">
            <button onClick={() => scroll("left")}>◀</button>
            <button onClick={() => scroll("right")}>▶</button>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: progress + "%" }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}