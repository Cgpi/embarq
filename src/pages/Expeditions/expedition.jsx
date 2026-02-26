import { useParams } from "react-router-dom";
import { expeditions } from "./Expeditiondata";

import HeroSection from "../../components/expedition/HeroSection";
import AboutTrip from "../../components/expedition/AboutTrip";
import RoutePlan from "../../components/expedition/RoutePlan";
import Itinerary from "../../components/expedition/Itinerary";
import InclusionExclusion from "../../components/expedition/ExpeditionInclusionExclusion";
import ExpeditionsCardScroll from "../../components/expedition/ExpeditionsCardScroll";

function Expedition() {
  const { slug } = useParams(); // 👈 key step

  const expedition = expeditions[slug];

  // Optional safety
  if (!expedition) {
    return <div>Expedition not found</div>;
  }

  return (
    <div className="expedition">
      <HeroSection data={expedition.hero} />
      <AboutTrip data={expedition.about} />
      <RoutePlan data={expedition.route} />
      <Itinerary data={expedition.itinerary} />
      <InclusionExclusion data={expedition.inclusionExclusion} />
      <ExpeditionsCardScroll />
      
    </div>
  );
}

export default Expedition;