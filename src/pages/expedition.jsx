
import HeroSection from '../components/expedition/HeroSection';
import AboutTrip from '../components/expedition/AboutTrip';
import RoutePlan from '../components/expedition/RoutePlan';
import Itinerary from '../components/expedition/Itinerary';
import InclusionExclusion from '../components/expedition/ExpeditionInclusionExclusion';

function Expedition() {
  return (
    <div className="expedition">
     
      <HeroSection />
      <AboutTrip />
      <RoutePlan />
      <Itinerary />
      <InclusionExclusion />
    </div>
  );
}

export default Expedition;
