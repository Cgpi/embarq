import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import GallerySection from "../pages/GallerySection";

import GiftTrip from "../pages/GiftTrip";

import FAQ from "../pages/FAQ";
import Blog from "../pages/blog";

import InTheMedia from "../pages/InTheMedia";

import Expedition from "../pages/Expeditions/expedition";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/gallery" element={<GallerySection />} />
      <Route path="/gift-trip" element={<GiftTrip />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/blog" element={<Blog />} />

      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="/media" element={<InTheMedia />} />

      <Route path="/expedition/:slug" element={<Expedition />} />
    </Routes>
  );
}

export default AppRoutes;
