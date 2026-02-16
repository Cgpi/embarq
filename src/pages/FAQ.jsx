import React, { useState } from "react";
import "./FAQ.css";
import faqbg from "../assets/faq/faqbg.jpg";

const faqData = [
  {
    question: "What is a road expedition?",
    answer:
      "A road expedition is a guided overland journey across remote destinations with a structured route and support team."
  },
  {
    question: "What is an Embarg guided expedition?",
    answer:
      "An Embarg guided road expedition is a premium travel experience with full support, expert leaders, and carefully planned routes."
  },
  {
    question: "What are overland journeys/road-expeditions?",
    answer:
      "These are long-distance journeys taken by road through scenic and remote regions."
  },
  {
    question: "What is the difference between guided and self-guided expeditions?",
    answer:
      "Guided expeditions include leaders and full support. Self-guided allow more independence."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <div
        className="faq-hero"
        style={{ backgroundImage: `url(${faqbg})` }}
      >
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
              <li>Service related</li>
              <li className="active">Service related</li>
              <li>Service related</li>
            </ul>
          </div>

          <div className="faq-questions">
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <span>{activeIndex === index ? "−" : "+"}</span>
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
