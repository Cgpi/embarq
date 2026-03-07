import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import MediaCard from "../components/MediaCard";
import mediabg from "../assets/media/mediabg.webp";

import img1 from "../assets/media/herstory.avif";
import img2 from "../assets/media/Women-Travel-Groups.jpg";
import img3 from "../assets/media/homegrown_K2K.avif";
import img4 from "../assets/media/4.png";

const allMediaData = [
  {
    image: img4,
    title:
      "This Women’s Day, Over 30 Women Will Drive 4,000+ Km, Covering 11 Cities In 20 Days",
    author: "By: Tanvi Shrivastava ",
    date: "February 12, 2026,",
    link: "https://curlytales.com/india/experiences/this-womens-day-over-women-will-drive-km-covering-cities-in-days/amp/",
  },
  {
    image: img3,
    title:
      "How An All-Women Driving Expedition Is Journeying Across India This Women's Day",
    author: "By: Rubin Mathias",
    date: "February 20, 2026",
    link: "https://homegrown.co.in/homegrown-explore/how-an-all-women-driving-expedition-is-journeying-across-india-this-womens-day",
  },
  {
    image: img1,
    title:
      "How Embarq’s women-only expeditions are reshaping who owns the road",
    author: "Saranya Chakrapani",
    date: "February 18, 2026",
    link: "https://yourstory.com/herstory/2026/02/how-embarqs-women-only-expeditions-are-reshaping-who-owns-road",
  },
  {
    image: img4,
    title:
      "K2K 2026: The Most Ambitious Women Only Luxury Drive India Has Ever Seen",
    author: "By: Yashita Damani",
    date: "February 16, 2026",
    link: "https://luxebook.in/k2k-2026-the-most-ambitious-women-only-luxury-drive-india-has-ever-seen/",
  },
  {
    image: img2,
    title:
      "These Women-Focused Travel Companies Will Change The Way You See The World",
    author: "By: Sneha Chakraborty",
    date: "February 21, 2026",
    link: "https://www.travelandleisureasia.com/in/trips/women-travel-groups-that-will-change-the-way-you-see-the-world/",
  },
  {
    image: img4,
    title:
      "Embarq to launch K2K 2026 women-only self-drive expedition on Women’s Day",
    author: "By: India and You",
    date: "February 11, 2026 ",
    link: "https://mediaindia.eu/events/embarq-to-launch-k2k-2026-women-only-self-drive-expedition-on-womens-day/",
  },
];

const InTheMedia = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    if (visibleCount === 6) {
      setVisibleCount(allMediaData.length);
    } else {
      setVisibleCount(6);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fcf5e4" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: { xs: "280px", md: "70vh" },
          width: "100%",
          position: "relative",
          backgroundImage: `url(${mediabg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontFamily: "Fraunces, serif",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "42px" },
            }}
          >
            In The Media
          </Typography>
        </Container>
      </Box>

      {/* CARDS SECTION */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              columnGap: "40px",
              rowGap: "50px",
              justifyItems: "center",
            }}
          >
            {allMediaData.slice(0, visibleCount).map((item, index) => (
              <MediaCard key={index} {...item} />
            ))}
          </Box>

          {/* VIEW MORE / LESS */}
          {allMediaData.length > 6 && (
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                onClick={handleToggle}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  color: "#555",
                  fontSize: "14px",
                }}
              >
                {visibleCount === 6 ? "View More" : "View Less"}
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default InTheMedia;
