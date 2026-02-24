import Hero from "../components/Hero/Hero";
import WhyRoads from "../components/WhyRoads/WhyRoads";
import ExpeditionIntro from "../components/ExpeditionIntro/ExpeditionIntro";
import UpcomingExpeditions from "../components/UpcomingExpeditions/UpcomingExpeditions";
import WhyDifferent from "../components/WhyDifferent/WhyDifferent";
import HowItWorks from "../components/HowItWorks/HowItWorks";

function Home() {
  return (
    <>
      <Hero />
      
      <UpcomingExpeditions />
      <WhyRoads />
      <ExpeditionIntro />
      <WhyDifferent />
      {/* <HowItWorks /> */}
    </>
  );
}

export default Home;
