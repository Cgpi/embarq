import "./RoutePlan.css";
import routeMap from "../../assets/expedition/Group996.png";


function RoutePlan() {
  return (
    <section className="route-plan">
      <div className="route-container">
        <h2 className="route-title">Route Plan</h2>

        <div className="route-image-wrapper">
          <img
            src={routeMap}
            alt="Route map"
            className="route-image"
          />
        </div>
      </div>
    </section>
  );
}

export default RoutePlan;
