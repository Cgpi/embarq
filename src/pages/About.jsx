import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import Leadership from "../components/about/Leadership";
import TeamMembers from "../components/about/TeamMembers";
import StatsBar from "../components/about/StatsBar";
import Experience from "../components/about/Experience2";
import StoryGallery from "../components/about/StoryGallery";
import Members from "../components/about/Members";

function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <StoryGallery />
      <Leadership />
      <TeamMembers />
      <StatsBar />
      <Experience />
      <Members />
    </>
  );
}

export default AboutPage;
