import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import MediaCard from "../components/MediaCard";
import mediabg from "../assets/media/mediabg.jpg";

import img1 from "../assets/media/1.png";
import img2 from "../assets/media/2.png";
import img3 from "../assets/media/3.png";
import img4 from "../assets/media/4.png";
import img5 from "../assets/media/5.png";
import img6 from "../assets/media/6.png";
import img7 from "../assets/media/7.png";
import img8 from "../assets/media/8.png";
import img9 from "../assets/media/9.png";

const allMediaData = [
  {
    image: img1,
    title: "The Bold Route: K2K",
    author: "By: Deccan Chronicle",
    date: "08 March, 2025",
    link: "https://www.deccanchronicle.com/tabloid/hyderabad-chronicle/the-bold-route-k2k-1865567",
  },
  {
    image: img2,
    title: "Kashmir to Kanyakumari 2025",
    author: "By: Jammu_in",
    date: "11 March, 2025",
    link: "https://www.instagram.com/p/DHBQGetSoJO/?igsh=MTg5Mjlya3BlNHBhcQ%3D%3D",
  },
  {
    image: img3,
    title: "Tips to get over fear of solo travel",
    author: "By: Her Zindagi Plus",
    date: "August, 2018",
    link: "https://www.youtube.com/watch?v=UcdZpM9enR8",
  },
  {
    image: img4,
    title: "The Bold Route Series: Sisterhood by Embarq",
    author: "By: Evo India",
    date: "May, 2025",
    link: "https://www.embarq.in/wp-content/uploads/2025/05/The-Bold-Route-Series-Sisterhood-by-Embarq.pdf",
  },
  {
    image: img5,
    title: "Driving the distance",
    author: "By: The Telegraph",
    date: "June, 2016",
    link: "https://www.telegraphindia.com/culture/driving-the-distance/cid/1322123#goog_rewarded",
  },
  {
    image: img6,
    title: "Universe of moms",
    author: "By: Unimo",
    date: "June, 2021",
    link: "https://www.facebook.com/watch/live/?ref=watch_permalink&v=544011303630461",
  },
  {
    image: img7,
    title: "Kashmir to Kanyakumari (Part 1)",
    author: "By: Thane News Paper",
    date: "05 March, 2025",
    link: "https://www.embarq.in/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-07-at-17.33.50.jpeg",
  },
  {
    image: img8,
    title: "#TimesSheUnLTD award article",
    author: "By: Times Entertainment",
    date: "Aug, 2020",
    link: "https://timesofindia.indiatimes.com/life-style/spotlight/fearless-and-fantastic-meet-the-enterprising-timessheunltd-winners-from-mumbai/articleshow/77290268.cms",
  },
  {
    image: img9,
    title: "Skoda Auto India celebrates Women’s Day with a pan-India drive",
    author: "By: Deccan Chronicle",
    date: "08 March, 2025",
    link: "https://www.knskashmir.com/skoda-auto-india-celebrates-women-s-day-with-a-pan-india-drive-from-kashmir-to-kanyakumari-193228",
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
    <Box sx={{ backgroundColor: "#dcd3c3" }}>
      {/* HERO SECTION */}
      <Box
        sx={{
          height: { xs: "280px", md: "100vh" },
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
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "42px" },
            }}
          >
            In The Media
          </Typography>
        </Container>
      </Box>

      {/* CARDS SECTION */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 15,
              justifyItems: "center",
            }}
          >
            {allMediaData.slice(0, visibleCount).map((item, index) => (
              <MediaCard key={index} {...item} />
            ))}
          </Box>

          {/* VIEW MORE / LESS */}
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
        </Container>
      </Box>
    </Box>
  );
};

export default InTheMedia;
