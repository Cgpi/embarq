import { useEffect, useRef, useState } from "react";
import "./CinematicHero.css";
import gsap from "gsap";

import kyrgyzstan from "../../assets/images/slide1.png";
import spain from "../../assets/images/georgia.png";
import balkans from "../../assets/images/slide1.png";
import indiaSpain from "../../assets/images/skorea.jpg";
import georgia from "../../assets/images/georgia.png";

const slidesData = [
  { title: "Crafting Memories By Letting The Road Overtake",
    subtitle: "Mountain passes. Offbeat routes. Oldest wine making.",
    tag: "All Women",
    date: "8th to 16th August, 2026",
    location: "Kyrgyzstan",
    image: kyrgyzstan
  },
  { title: "Architecture, Art & Timeless Streets",
    subtitle: "Cathedrals. Flamenco. Mediterranean sunsets.",
    tag: "Cultural Escape",
    date: "12th to 20th Sept, 2026",
    location: "Spain",
    image: spain
  },
  { title: "Hidden Rivers & Ancient Towns",
    subtitle: "Untouched Europe at its best.",
    tag: "Explorer",
    date: "5th to 14th Oct, 2026",
    location: "Balkans",
    image: balkans
  },
  { title: "Two Worlds. One Journey.",
    subtitle: "India meets Spain.",
    tag: "Signature",
    date: "1st to 12th Nov, 2026",
    location: "India & Spain",
    image: indiaSpain
  },
  { title: "Where Europe Begins",
    subtitle: "Wine valleys & mountain monasteries.",
    tag: "Premium",
    date: "10th to 18th Dec, 2026",
    location: "Georgia",
    image: georgia
  }
];

export default function CinematicHero() {
  const bgRef = useRef();
  const contentRef = useRef();
  const cardsRef = useRef();
  const progressRef = useRef();

  const [slides, setSlides] = useState(slidesData);

  useEffect(() => {
    startTimeline();
  }, []);

  const startTimeline = () => {

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to(progressRef.current, {
      width: "100%",
      duration: 7,
      ease: "none"
    });

    tl.call(() => morphSlide());

    tl.set(progressRef.current, { width: "0%" });
  };

 const morphSlide = () => {

  const firstCard = cardsRef.current.children[0];
  if (!firstCard) return;

  const img = firstCard.querySelector("img");
  const rect = img.getBoundingClientRect();

  // Clone ONLY the image
  const clone = img.cloneNode(true);
  document.body.appendChild(clone);

  gsap.set(clone, {
    position: "fixed",
    top: rect.top,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    borderRadius: "20px",
    zIndex: 9999
  });

  const tl = gsap.timeline();

  // Fade out content
  tl.to(contentRef.current, {
    opacity: 0,
    y: 40,
    duration: 0.6
  });

  // Scale image to fullscreen
  tl.to(clone, {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    borderRadius: 0,
    duration: 1.6,
    ease: "power3.inOut"
  });

  // After fullscreen reached
  tl.call(() => {

    // Set background permanently
    bgRef.current.style.backgroundImage =
      `url(${slides[1].image})`;

    // Rotate slides
    const newSlides = [...slides];
    const first = newSlides.shift();
    newSlides.push(first);
    setSlides(newSlides);

    clone.remove();
  });

  // Fade in new content
  tl.fromTo(contentRef.current,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1 }
  );

  // Shift cards left smoothly
  tl.to(cardsRef.current, {
    x: -250,
    duration: 0.8,
    ease: "power2.inOut"
  }, "-=1");

  tl.set(cardsRef.current, { x: 0 });
};

useEffect(() => {
  const interval = setInterval(() => {
    morphSlide();
  }, 7000);

  return () => clearInterval(interval);
}, []);



  return (
    <section className="cinematic-hero">

      <div
        className="background-layer"
        ref={bgRef}
        style={{ backgroundImage: `url(${slides[0].image})` }}
      />

      <div className="bg-overlay" />

      <div className="hero-content" ref={contentRef}>
        <h1>{slides[0].title}</h1>
        <p className="subtitle">{slides[0].subtitle}</p>
        <div className="meta">
          <span className="tag">{slides[0].tag}</span>
          <span className="date">{slides[0].date}</span>
        </div>
      </div>

      <div className="cards-row" ref={cardsRef}>
        {slides.slice(1).map((slide, i) => (
          <div className="card" key={i}>
            <img src={slide.image} alt="" />
            <div className="card-title">{slide.location}</div>
          </div>
        ))}
      </div>

      <div className="progress-wrapper">
        <div className="progress-bar" ref={progressRef} />
      </div>

    </section>
  );
}
