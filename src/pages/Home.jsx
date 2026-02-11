import Hero from "../components/Hero/Hero";
import WhyRoads from "../components/WhyRoads/WhyRoads";
import ExpeditionIntro from "../components/ExpeditionIntro/ExpeditionIntro";
import UpcomingExpeditions from "../components/UpcomingExpeditions/UpcomingExpeditions";

function Home() {
  return (
    <>
      <Hero />
      <ExpeditionIntro />
      <UpcomingExpeditions />
      <WhyRoads />
    </>
  );
}

export default Home;
