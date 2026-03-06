import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import GallerySection from "../pages/GallerySection";

import GiftTrip from "../pages/GiftTrip";

import Blog2 from "../pages/b2";

import InTheMedia from "../pages/InTheMedia";

import Expedition from "../pages/Expeditions/expedition";
import PartnershipPage from "../pages/PartnershipPage";
import BlogPage from "../pages/BlogPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/testimonials" element={<Testimonials />} /> */}
      <Route path="/gallery" element={<GallerySection />} />
      <Route path="/gift-trip" element={<GiftTrip />} />

      <Route path="/blog" element={<BlogPage />} />
      <Route path="/b2" element={<Blog2 />} />

      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="/media" element={<InTheMedia />} />

      <Route path="/expedition/:slug" element={<Expedition />} />
      <Route path="/partnership" element={<PartnershipPage />} />
    </Routes>
  );
}

export default AppRoutes;
