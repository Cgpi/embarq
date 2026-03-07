import { useState } from "react";
import "./HomeFAQ.css";

export default function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "What is a road trip?",
      answer:
        "As the name suggests, a road trip is a journey by road using a vehicle. It is the best way to experience different landscapes and terrains and soak in the culture of a place. Meant for those to whom the journey matters more than the destination.",
    },
    {
      question: "What is an Embarq guided tour?",
      answer:
        "An Embarq guided road-trip is a premium fixed departure trip with a fixed itinerary. The trip is designed by the co-founders after a detailed recce of the destination and various routes ensuring the best curated experiences & activities are planned along the route. The stays and food are hand picked. The travellers move in a convoy led and tailed by the Embarq crew that provides personalised attention and support throughout the tour.",
    },
    {
      question: "What are overland journeys/road-trips?",
      answer:
        "Overland Roadtrips are Self-Drive road trips that one does in his/her own vehicle where you experience the thrill of crossing India’s border and drive to other countries like Myanmar, Thailand, Malaysia, Singapore, Laos, Cambodia, Vietnam, China, Central Asia, Russia, UK, Europe etc. These road-trips require a lot of planning, paperwork and permits, visas etc. Our co-founders have done multiple overland road-trips across continents and we can help you plan it all and experience this epic once-in a life time journey!",
    },
    {
      question: "What are Embarq Bespoke Road-Trips?",
      answer:
        "Self-Drive Road-Trips that are customized for you at any of our listed destinations including overland journeys, considering your specific requirements.You could be a solo traveler or group of friends & family, you can choose the dates suitable to you and the budget that makes you smile! Our expert team will help you put the personalized itinerary together considering the dates, various routes, stay, food and rental car options to suit your needs! We can also customize luxury road-tripping holidays for you.",
    },
    {
      question:
        "What is the difference between your guided and self-guided tours?",
      answer: (
        <div className="faq-table-wrapper">
          <table className="faq-table">
            <thead>
              <tr>
                <th>SERVICE</th>
                <th>GUIDED-FIXED DEPARTURE</th>
                <th>BESPOKE</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rental Car</td>
                <td>YES</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>Lead Vehicle & Embarq Team</td>
                <td>YES</td>
                <td>NO</td>
              </tr>
              <tr>
                <td>Local Guide</td>
                <td>YES</td>
                <td>Optional</td>
              </tr>
              <tr>
                <td>Back-up/Escort Vehicle</td>
                <td>YES</td>
                <td>Optional</td>
              </tr>
              <tr>
                <td>Breakdown Assistance</td>
                <td>YES</td>
                <td>YES (T&C apply)</td>
              </tr>
              <tr>
                <td>Embarq Special Experiences</td>
                <td>YES</td>
                <td>Optional</td>
              </tr>
              <tr>
                <td>Flexible Dates for Departure</td>
                <td>NO</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>Group size restriction</td>
                <td>YES</td>
                <td>NO</td>
              </tr>
              <tr>
                <td>Tour Cost</td>
                <td>Standard</td>
                <td>As per individual budget</td>
              </tr>
              <tr>
                <td>Planned Itineraries</td>
                <td>YES</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>Accommodation</td>
                <td>YES</td>
                <td>YES</td>
              </tr>
              <tr>
                <td>Meals</td>
                <td>YES</td>
                <td>NO</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>YES</td>
                <td>NO</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      question: "What is the distance that we travel every day?",
      answer:
        "The daily distance we cover depends on the terrain and the scheduled activities. It typically varies between five to seven hours on an average. Please refer to the brochure for detailed itinerary.",
    },
    {
      question: "What happens if my vehicle breaks down during the trip?",
      answer: "Breakdown assistance is provided on all Embarq tours.",
    },
    {
      question: "Do all of your road trips have tour leaders?",
      answer: "All guided tours have a tour leader and support crew.",
    },
    {
      question: "Who are the tour leaders and how experienced are they?",
      answer:
        "Embarq guided tours are led by our co-founders themselves. They have more than five years of experience in organising road trips and have scouted the routes beforehand.",
    },
    {
      question: "Do we have to follow the tour leaders on a guided tour?",
      answer:
        "Yes. To get the best experience on our guided tours, we expect you to follow the group leader/lead vehicle.",
    },
    {
      question:
        "What information do I get from Embarq to plan for my road trip?",
      answer:
        "Based on what kind of road-trip you are signing up for (guided / overland / bespoke), we will provide you with relevant details like travel advisory, itinerary, visa instructions, luggage & spares checklist etc with all the terms and conditions that will help you prep for your trip.",
    },
    {
      question:
        "I have never driven outside India before - especially on the right-hand side - Will I manage?",
      answer:
        "Absolutely! We roll in convoy style, and there’s always a lead car to follow, making it a breeze to get used to driving on the right. Many first-time international drivers join our trips, so you’re in good company. What makes it even better is that all our cars are connected with walkie-talkies. Our lead car not only guides you on driving rules but also assists with navigation through these walkies. It’s like having a helpful friend leading the way!",
    },
    {
      question: "I don't drive - Can I Still join?",
      answer:
        "Absolutely! We’ll happily pair you up with fellow drivers who appreciate the open road just as much as you do. Get ready for a fantastic journey with some wonderful company!",
    },
    {
      question: "Do we stay in Tents? How’s the accommodation?",
      answer:
        "We believe in cosy comfort. No camping for us! We stay in nice hotels. In big countries like Scotland, New Zealand, and Peru, it’s luxury all the way. In smaller towns in Kyrgyzstan and Russia, the hotels are basic but super clean, and comfy, have heaters and other facilities. Your comfort is our priority!",
    },
    {
      question: "Are your drives Kids and Senior Citizen friendly?",
      answer:
        "Absolutely! Our drives are designed for pure comfort and luxury, catering to all age groups. We’ve had the pleasure of hosting spirited senior citizens, some in their 70s and energetic kids aged 5 and above. Our journeys are crafted to be enjoyed by everyone, creating memorable experiences for every generation on board.",
    },
    {
      question:
        "I am a solo traveller - How do I find someone to share the car/accommodation with?",
      answer:
        "We love bringing people together, and we often pair up solo travellers, both men and women. It’s a fantastic way to make new connections and share the journey with like-minded individuals.",
    },
    {
      question:
        "I am a pure vegetarian - I don't even eat eggs - How will I manage in countries like Kyrgyzstan / Russia / Mongolia?",
      answer:
        "Don’t worry! We offer pure vegetarian food on all our drives. We’ve had Vegans, Jains, and Pure vegetarians join us before, and everyone has been happy. We also carry ready-to-eat Indian food as a backup. Your dietary preferences are important to us, and we’ve got it covered!",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="homefaq-section">
      <h2 className="homefaq-title">frequently asked questions</h2>

      <div className="homefaq-container">
        {(showAll ? faqs : faqs.slice(0, 10)).map((faq, index) => (
          <div
            key={index}
            className={`homefaq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="homefaq-question" onClick={() => toggleFAQ(index)}>
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

      {!showAll ? (
        <button className="homefaq-btn" onClick={() => setShowAll(true)}>
          View more
        </button>
      ) : (
        <button
          className="homefaq-btn"
          onClick={() => {
            setShowAll(false);
            setActiveIndex(null);
            document
              .getElementById("homefaq-section")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          View less
        </button>
      )}
    </section>
  );
}
