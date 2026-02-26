import "./RoutePlan.css";
import routeMap from "../../assets/expedition/Group996.png";
import routeMapMobile from "../../assets/expedition/routeverticle.png";

function RoutePlan({ data }) {
  return (
    <section className="route-plan">
      <div className="route-container">
        <h2 className="route-title">Route Plan</h2>

        <img src={data.desktop} className="desktop" />
        <img src={data.mobile} className="mobile" />
      </div>
    </section>
  );
}

export default RoutePlan;
