import React, { useState, useEffect } from "react";
import "./FAQ.css";
import faqbg from "../assets/faq/faqbg.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const faqData = {
  service1: [
    {
      question: "What is a road expedition?",
      answer:
        "A road expedition is a guided overland journey across remote destinations with a structured route and support team.",
    },
    {
      question: "What is an Embarg guided expedition?",
      answer:
        "An Embarg guided road expedition is a premium travel experience with full support, expert leaders, and carefully planned routes.",
    },
  ],

  service2: [
    {
      question: "What are overland journeys/road-expeditions?",
      answer:
        "These are long-distance journeys taken by road through scenic and remote regions.",
    },
    {
      question:
        "What is the difference between guided and self-guided expeditions?",
      answer:
        "Guided expeditions include leaders and full support. Self-guided allow more independence.",
    },
  ],

  service3: [
    {
      question: "What is a road expedition?",
      answer:
        "A road expedition is a guided overland journey across remote destinations with a structured route and support team.",
    },
    {
      question: "What is an Embarg guided expedition?",
      answer:
        "An Embarg guided road expedition is a premium travel experience with full support, expert leaders, and carefully planned routes.",
    },
  ],
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("service1");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <div className="faq-hero" style={{ backgroundImage: `url(${faqbg})` }}>
        <div className="faq-overlay">
          <h1>Find the answer here, or call us right away!</h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-container">
        <h2>Frequently asked questions</h2>

        <div className="faq-content">
          <div className="faq-categories">
            <h4>FAQ Category</h4>
            <ul>
              <li
                className={activeCategory === "service1" ? "active" : ""}
                onClick={() => {
                  setActiveCategory("service1");
                  setActiveIndex(null);
                }}
              >
                Service related 1
              </li>

              <li
                className={activeCategory === "service2" ? "active" : ""}
                onClick={() => {
                  setActiveCategory("service2");
                  setActiveIndex(null);
                }}
              >
                Service related 2
              </li>

              <li
                className={activeCategory === "service3" ? "active" : ""}
                onClick={() => {
                  setActiveCategory("service3");
                  setActiveIndex(null);
                }}
              >
                Service related 3
              </li>
            </ul>
          </div>

          <div className="faq-questions">
            {faqData[activeCategory].map((item, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  {item.question}
                  <KeyboardArrowDownIcon
                    className={`faq-icon ${activeIndex === index ? "open" : ""}`}
                  />
                </div>

                {activeIndex === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
