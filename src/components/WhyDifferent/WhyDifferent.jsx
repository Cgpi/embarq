import "./WhyDifferent.css";
import bgImage from "../../assets/images/whydifferent.jpg";
import wm1 from "../../assets/svg/wm1.svg";
import wm2 from "../../assets/svg/wm2.svg";
import wm3 from "../../assets/svg/wm3.svg";
import wm4 from "../../assets/svg/wm4.svg";
import wm5 from "../../assets/svg/wm5.svg";
const points = [
  {
    icon: wm1,
    title: "Curated routes, not generic itineraries",
    desc: "Scenic drives, offbeat detours, and “how is this real?” stops: built from on-ground scouting.",
  },
  {
    icon: wm2,
    title: "Premium vehicles + premium pace",
    desc: "Scenic drives, offbeat detours...",
  },
  {
    icon: wm3,
    title: "Convoy support = real freedom",
    desc: "Scenic drives, offbeat detours...",
  },
  {
    icon: wm4,
    title: "Privacy of your own car, vibe of a crew",
    desc: "Scenic drives, offbeat detours...",
  },
  {
    icon: wm5,
    title: "Details handled end-to-end",
    desc: "Scenic drives, offbeat detours...",
  },
];

function WhyDifferent() {
  return (
    <section
      className="why"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* <div className="overlay" /> */}

      <div className="why-container">
        
        {/* LEFT */}
        <div className="why-left">
          <h2>What makes Embarq different</h2>
          <p>You get the thrill of a road trip: without the chaos.</p>
        </div>

        {/* RIGHT */}
        <div className="why-right">
          <div className="scroll-track" />
          <div className="scroll-indicator" />

          <div className="points">
            {points.map((item, index) => (
              <div className={`point ${index === 0 ? "active" : ""}`} key={index}>
                <div className="icon">
  <img src={item.icon} alt="" />
</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyDifferent;