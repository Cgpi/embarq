import Hero from "../components/Hero/Hero";
import WhyRoads from "../components/WhyRoads/WhyRoads";
import ExpeditionIntro from "../components/ExpeditionIntro/ExpeditionIntro";
import UpcomingExpeditions from "../components/UpcomingExpeditions/UpcomingExpeditions";
import WhyDifferent from "../components/WhyDifferent/WhyDifferent";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import TestimonialsSection from "../components/testimonialsection/TestimonialsSection";
import HomeFAQ from "../components/HomeFAQ/HomeFAQ";
import Wmembers from "../components/home_wam/wmembers";

function Home() {
  return (
    <>
      <Hero />
      
      <UpcomingExpeditions />
      <WhyRoads />
      <ExpeditionIntro />
      {/* <WhyDifferent /> */}
      {/* <HowItWorks /> */}
      <TestimonialsSection />
      <HomeFAQ />
      <Wmembers />
    </>
  );
}

export default Home;
