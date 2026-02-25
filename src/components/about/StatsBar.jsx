import { useEffect, useRef, useState } from "react";
import "./StatsBar.css";

function Counter({ target, duration = 2000, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(easeOut * target);
      setCount(value);

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  return (
    <h3 ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </h3>
  );
}

function StatsBar() {
  return (
    <section className="stats">
      <div className="stat-item">
        <Counter target={10} />
        <p>Years of Excellence</p>
      </div>

      <div className="divider" />

      <div className="stat-item">
        <Counter target={17} />
        <p>17 plus countries in 57 days</p>
      </div>

      <div className="divider" />

      <div className="stat-item">
        <Counter target={1000} />
        <p>Happy Customers</p>
      </div>
    </section>
  );
}

export default StatsBar;