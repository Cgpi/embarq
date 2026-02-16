import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StatisticsBar from "../components/about/StatsBar";

import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import bgImage from "../assets/testimonials/testimonials-bg.jpg";
import quoteImg from "../assets/testimonials/Vector 16.png";

import archana from "../assets/testimonials/Archana Singh.jpg";
import binaa from "../assets/testimonials/Binaa Shah.jpg";
import jyotsna from "../assets/testimonials/Jyotsna Kancherla.jpg";
import priyanka from "../assets/testimonials/Priyanka Rai.jpg";
import sanchayeeta from "../assets/testimonials/Sanchayeeta Verma.jpg";

const testimonialsData = [
  {
    name: "Sanchayeeta Verma",
    image: sanchayeeta,
    text: "“My incredible New Zealand road trip with Embarq unveiled a new way to explore a country. The stunning natural beauty and well-developed infrastructure were enhanced by Embarq’s meticulous planning. Thanks to their detailed scouting, we witnessed breathtaking vistas off the beaten track. The journey fostered amazing connections among travellers and elevated the entire experience. Every detail – itinerary, local partnerships, hotels, and care – showed true professionalism.”",
  },
  {
    name: "Binaa Shah",
    image: binaa,
    text: "“I have done two road trips with EMBARQ MOTORWORLD — India to Thailand via Myanmar (an all-women road trip) and Kyrgyzstan Snow Drive. Both were life-changing experiences with premium stays, great food, safety, and amazing terrain. Highly recommended and trustworthy.”",
  },
  {
    name: "Archana Singh",
    image: archana,
    text: "“One of the best self-drive group trips I’ve taken recently. Very well curated and organised with each person’s comfort in mind. Sujal is an amazing trip organiser and a great companion throughout the tour.”",
  },
  {
    name: "Jyotsna Kancherla",
    image: jyotsna,
    text: "“I love travelling. This s the first travelling in a group n i loved every bit of it. Embarq gave the best of stay n all of them r very frindly n like minded. The guide Andrea was very informative n she knew every bit of place n she gave good instructions in driving as well. My personal favourites r Scottish dancing n whisky tours.....on the whole my experience with Embarq was a life time one n would go bk again n again with them n make lovely memories. Big thumbs up to u Embarq.”",
  },
  {
    name: "Priyanka Rai",
    image: priyanka,
    text: "Taking away immense energy, abundance of incredible experiences and some very beautiful bonds to cherish for lifetime from the soul churning Kashmir to Kanyakumar - K2K2025 drive. ⁨Medha Joseph⁩ and ⁨Sujal Patwardhan⁩ Forever grateful to you guys for putting this in my dream list and checking it off to eye the next K2K already! More power to you and you’ve impacted us in ways we can’t possibly describe as yet!",
  },
];

const Testimonials = () => {
  const cardsRef = useRef([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateX(0)";
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform =
              entry.target.dataset.direction === "left"
                ? "translateX(-120px)"
                : "translateX(120px)";
          }
        });
      },
      { threshold: 0.05 },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [showAll]); // ✅ ADD THIS

  return (
    <>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(16,16,16,0.5)",
          }}
        />

        {/* HERO SECTION */}
        <Box
          sx={{
            position: "relative",
            height: { xs: 300, md: 680 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          {/* Title Wrapper */}
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* RIGHT TOP QUOTES */}
            <Box
              sx={{
                position: "absolute",
                top: { xs: -30, md: -60 },
                right: { xs: -60, md: -160 },
                display: "flex",
                gap: 1,
                transform: "scaleX(-1)",
              }}
            >
              <Box
                component="img"
                src={quoteImg}
                sx={{ height: { xs: 50, md: 120 } }}
              />
              <Box
                component="img"
                src={quoteImg}
                sx={{ height: { xs: 50, md: 120 } }}
              />
            </Box>

            {/* LEFT BOTTOM QUOTES */}
            <Box
              sx={{
                position: "absolute",
                bottom: { xs: -25, md: -60 },
                left: { xs: -60, md: -160 },
                display: "flex",
                gap: 1,
              }}
            >
              <Box
                component="img"
                src={quoteImg}
                sx={{ height: { xs: 50, md: 120 } }}
              />
              <Box
                component="img"
                src={quoteImg}
                sx={{ height: { xs: 50, md: 120 } }}
              />
            </Box>

            {/* TITLE TEXT */}
            <Typography
              sx={{
                fontFamily: "Fraunces, serif",
                fontWeight: 700,
                fontSize: { xs: "42px", md: "70px" },
                color: "#fff",
                lineHeight: 1.2,
                px: 2,
              }}
            >
              Impactful <br /> Successes
            </Typography>
          </Box>
        </Box>

        {/* CARDS */}
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 3,
            py: { xs: 5, md: 5 },
          }}
        >
          {(isMobile && !showAll
            ? testimonialsData.slice(0, 3)
            : testimonialsData
          ).map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: isRight ? "flex-end" : "flex-start",
                  },
                  px: { xs: 2, md: 10 },
                  mb: { xs: 6, md: 12 },
                  mt: { md: isRight ? 6 : 0 }, // 🔥 stagger effect
                }}
              >
                <Card
                  ref={(el) => (cardsRef.current[index] = el)}
                  data-direction={isRight ? "right" : "left"}
                  sx={{
                    width: { xs: "100%", md: "75%" }, // 🔥 wider like Figma
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: isRight ? "row-reverse" : "row",
                    },
                    alignItems: "center",
                    gap: { xs: 3, md: 6 },
                    p: { xs: 2, md: 3 }, // 🔥 more padding
                    borderRadius: "30px", // 🔥 large rounded corners
                    background: "rgba(255, 255, 255, 0.14)",
                    backdropFilter: "blur(2px)", // 🔥 stronger blur
                    WebkitBackdropFilter: "blur(2px)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    boxShadow: `
                      0 30px 80px rgba(63, 62, 62, 0.35),
                      inset 0 1px 1px rgba(255,255,255,0.4)`,
                    opacity: 0,
                    transform: isRight
                      ? "translateX(120px)"
                      : "translateX(-120px)",
                    transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  {/* IMAGE */}
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: { xs: "100%", md: 250 }, // 🔥 bigger image
                      height: { xs: "40%", md: 250 },
                      objectFit: "cover",
                      borderRadius: "24px", // softer rounded
                      flexShrink: 0,
                    }}
                  />

                  {/* TEXT */}
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        mb: 2,
                        fontSize: { xs: 16, md: 18 },
                      }}
                    >
                      {item.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: { xs: 11, md: 16 },
                        lineHeight: 1.7,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Container>
        {/* Toggle Arrow (Mobile Only) */}
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 6,
              cursor: "pointer",
              position: "relative",
              zIndex: 5,
            }}
            onClick={() => setShowAll((prev) => !prev)}
          >
            <Box
              sx={{
                width: 55,
                height: 55,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(6px)",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.15)",
                },
              }}
            >
              <KeyboardArrowDownIcon
                sx={{
                  color: "#fff",
                  fontSize: 35,
                  transition: "transform 0.4s ease",
                  transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
      {/* ✅ ADD THIS HERE */}
      <StatisticsBar />
    </>
  );
};

export default Testimonials;
