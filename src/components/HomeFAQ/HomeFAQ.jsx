import { useState } from "react";
import "./HomeFAQ.css";

export default function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is a road expedition?",
      answer:
        "As the name suggests, a road expedition is a journey by road using a vehicle. It is the best way to experience different landscapes and terrains and soak in the culture of a place. Meant for those to whom the journey matters more than the destination.",
    },
    {
      question: "What is an Embarq guided expedition?",
      answer:
        "A guided expedition includes expert trip leaders, curated routes, planned stays, and full support throughout your journey.",
    },
    {
      question: "What are overland journeys/road-expeditions?",
      answer:
        "These are long-distance road trips designed to explore regions deeply, often across multiple terrains and destinations.",
    },
    {
      question: "What are Embarq Bespoke Road expeditions?",
      answer:
        "Bespoke expeditions are customized trips tailored to your preferences, pace, and interests.",
    },
    {
      question:
        "What is the difference between your guided and self-guided expeditions?",
      answer:
        "Guided trips include support teams and planning, while self-guided gives you freedom with a pre-designed route.",
    },
    {
      question: "What is the distance that we travel every day?",
      answer:
        "Daily distances vary based on terrain and experience, typically ranging between 150–300 km.",
    },
    {
      question:
        "What happens if my vehicle breaks down during the expedition?",
      answer:
        "We provide on-ground support and assistance to ensure minimal disruption.",
    },
    {
      question:
        "Do all of your road trips have expedition leaders?",
      answer:
        "Most guided trips include experienced leaders, while self-guided trips do not.",
    },
    {
      question:
        "Who are the expedition leaders and how experienced are they?",
      answer:
        "They are seasoned travelers with extensive experience in handling diverse terrains and groups.",
    },
    {
      question:
        "Do we have to follow the expedition leaders on guided expeditions?",
      answer:
        "Yes, but with flexibility for personal exploration within the planned structure.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="homefaq-section">
      <h2 className="homefaq-title">frequently asked questions</h2>

      <div className="homefaq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`homefaq-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="homefaq-question"
              onClick={() => toggleFAQ(index)}
            >
              <p>{faq.question}</p>
              <span className="homefaq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="homefaq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="homefaq-btn">View more</button>
    </section>
  );
}