import {
  Route,
  Car,
  MapPin,
  Users,
  ShieldCheck,
} from "lucide-react";

import "./WhyDifferent.css";
import bgImage from "../../assets/images/whydifferent.jpg";

const steps = [
  {
    title: "Curated routes, not generic itineraries",
    desc: "Scenic drives, offbeat detours, built from on-ground scouting.",
    icon: Route,
  },
  {
    title: "Premium vehicles + premium pace",
    desc: "Scenic drives, offbeat detours, built from on-ground scouting.",
    icon: Car,
  },
  {
    title: "Convoy support = real freedom",
    desc: "Scenic drives, offbeat detours, built from on-ground scouting.",
    icon: MapPin,
  },
  {
    title: "Privacy of your own car, vibe of a crew",
    desc: "Scenic drives, offbeat detours, built from on-ground scouting.",
    icon: Users,
  },
  {
    title: "Details handled end-to-end",
    desc: "Scenic drives, offbeat detours, built from on-ground scouting.",
    icon: ShieldCheck,
  },
];

export default function WhyDifferent() {
  return (
    <section className="why-wrapper">
      
      {/* ✅ BACKGROUND */}
      <div
        className="why-bg"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(196,196,196,0.35),
              rgba(17,5,5,0.9)
            ),
            url(${bgImage})
          `,
        }}
      />

      {/* ✅ CONTENT */}
      <div className="why-content">

        <div className="why-container">
          
          {/* LEFT */}
          <div className="why-left">
            <h1>What makes Embarq different</h1>
            <p>You get the thrill of a road trip without the chaos.</p>
          </div>

          {/* RIGHT */}
          <div className="why-right">
            <div className="why-line" />

            {steps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="why-item">
                  <Icon size={28} className="why-icon" />

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}