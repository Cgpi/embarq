import React, { useState, useRef, useEffect } from "react";
import { Box, Container, Typography, Chip, IconButton } from "@mui/material";
import rightArrow from "../assets/gallery/right-arrow.png";
import leftArrow from "../assets/gallery/left-arrow.png";

import balkansHero from "../assets/gallery/Balkans/Balkans.png";
import indiaSpainHero from "../assets/gallery/India and Spain/IndiaSpain.png";
import indiaThailandHero from "../assets/gallery/India and Thailand/india-Thailand.jpg";
import kashmirHero from "../assets/gallery/Kashmir/kashmir.avif";
import kyrgyzstanHero from "../assets/gallery/Kyrgyzstan/Kyrgyzstan.png";
import mongoliaHero from "../assets/gallery/Mongolia/Mongolia.jpg";
import newZealandHero from "../assets/gallery/New Zealand/new-zealand.jpg";
import northEastHero from "../assets/gallery/NorthEast/northeast.jpg";
import peruHero from "../assets/gallery/Peru/peru.jpg";
import russiaHero from "../assets/gallery/Russia/russia.jpg";
import scoatlandHero from "../assets/gallery/Scotland/scotland.jpg";
import spainHero from "../assets/gallery/Spain/spain.jpg";
import spitiHero from "../assets/gallery/Spiti/spiti.jpg";
import uzbekistanHero from "../assets/gallery/Uzbekistan/uzbekistan.jpg";

import kyrgyzstanGallery from "../../src/galleryData/kyrgyzstanGallery";
import spainGallery from "../../src/galleryData/spainGallery";
import balkansGallery from "../../src/galleryData/balkansGallery";
import indiaSpainGallery from "../../src/galleryData/indiaSpainGallery";
import indiaThailandGallery from "../galleryData/indiaThailandGallery";
import kashmirGallery from "../galleryData/kashmirGallery";
import mongoliaGallery from "../galleryData/mongoliaGallery";
import newZealandGallery from "../galleryData/newZealandGallery";
import northEastGallery from "../galleryData/northEastGallery";
import peruGallery from "../galleryData/peruGallery";
import russiaGallery from "../galleryData/russiaGallery";
import scotlandGallery from "../galleryData/scotlandGallery";
import spitiGallery from "../galleryData/spitiGallery";
import uzbekistanGallery from "../galleryData/uzbekistanGallery";

const initialDestinations = [
  {
    title: "Kyrgyzstan",
    img: kyrgyzstanHero,
  },
  {
    title: "Spain",
    img: spainHero,
  },
  {
    title: "Balkans",
    img: balkansHero,
  },
  {
    title: "India and Spain",
    img: indiaSpainHero,
  },
  {
    title: "India and Thailand",
    img: indiaThailandHero,
  },
  {
    title: "Kashmir",
    img: kashmirHero,
  },
  {
    title: "Mongolia",
    img: mongoliaHero,
  },
  {
    title: "New Zealand",
    img: newZealandHero,
  },
  {
    title: "North East",
    img: northEastHero,
  },
  {
    title: "Peru",
    img: peruHero,
  },
  {
    title: "Russia",
    img: russiaHero,
  },
  {
    title: "Scotland",
    img: scoatlandHero,
  },
  {
    title: "Spiti",
    img: spitiHero,
  },
  {
    title: "Uzbekistan",
    img: uzbekistanHero,
  },
];

const CARD_WIDTH = 260;
const GAP = 24;

const GallerySection = () => {
  const [destinations, setDestinations] = useState(initialDestinations);
  const [scrollY, setScrollY] = useState(0);
  const [activeDestination, setActiveDestination] = useState(
    initialDestinations[initialDestinations.length - 1],
  );

  const [textVisible, setTextVisible] = useState(true);

  const [backgroundImg, setBackgroundImg] = useState(
    initialDestinations[initialDestinations.length - 1].img,
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Cinematic zoom keyframes
  const zoomAnimation = {
    "@keyframes slowZoom": {
      "0%": { transform: "scale(1)" },
      "100%": { transform: "scale(1.08)" },
    },
  };

  const getGalleryData = () => {
    switch (activeDestination.title) {
      case "Kyrgyzstan":
        return kyrgyzstanGallery;
      case "Spain":
        return spainGallery;
      case "Balkans":
        return balkansGallery;
      case "India and Spain":
        return indiaSpainGallery;
      case "India and Thailand":
        return indiaThailandGallery;
      case "Kashmir":
        return kashmirGallery;
      case "Mongolia":
        return mongoliaGallery;
      case "New Zealand":
        return newZealandGallery;
      case "North East":
        return northEastGallery;
      case "Peru":
        return peruGallery;
      case "Russia":
        return russiaGallery;
      case "Scotland":
        return scotlandGallery;
      case "Spiti":
        return spitiGallery;
      case "Uzbekistan":
        return uzbekistanGallery;
      default:
        return [];
    }
  };

  const galleryData = getGalleryData();

  const [expandingCard, setExpandingCard] = useState(null);
  const [cardStyle, setCardStyle] = useState({});
  const [sliderOffset, setSliderOffset] = useState(0);
  const [animateSlider, setAnimateSlider] = useState(false);
  const heroImages = destinations.map((item) => item.img);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const visible = destinations
        .filter((item) => item.img !== backgroundImg)
        .slice(0, 3);

      if (!visible.length) return;

      const selected = visible[0];
      const cardElement = cardRefs.current[0];
      if (!cardElement || !sectionRef.current) return;

      const cardRect = cardElement.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      const relativeTop = cardRect.top - sectionRect.top;
      const relativeLeft = cardRect.left - sectionRect.left;

      /* =========================
       STEP 1 — Set initial card position
    ========================== */
      setCardStyle({
        top: relativeTop,
        left: relativeLeft,
        width: cardRect.width,
        height: cardRect.height,
        borderRadius: 32,
      });

      setExpandingCard(selected);

      /* =========================
       STEP 2 — Start expand animation
    ========================== */
      setTimeout(() => {
        setCardStyle({
          top: 0,
          left: 0,
          width: sectionRect.width,
          height: sectionRect.height,
          borderRadius: 0,
        });
      }, 20);

      /* =========================
       STEP 3 — Slide animation
    ========================== */
      setAnimateSlider(true);
      setSliderOffset(-(CARD_WIDTH + GAP));

      /* =========================
       STEP 4 — Fade text immediately
    ========================== */
      setTextVisible(false);

      /* =========================
       STEP 5 — Change content in middle of animation
    ========================== */
      setTimeout(() => {
        setBackgroundImg(selected.img);
        setActiveDestination(selected);
        setTextVisible(true);
      }, 400); // Half of 800ms animation

      /* =========================
       STEP 6 — Finish animation & reset
    ========================== */
      setTimeout(() => {
        const updated = [
          ...destinations.filter((item) => item.img !== selected.img),
          selected,
        ];

        setDestinations(updated);

        setSliderOffset(0);
        setAnimateSlider(false);
        setExpandingCard(null);

        setCurrentIndex((prev) =>
          prev === heroImages.length - 1 ? 0 : prev + 1,
        );
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [destinations, backgroundImg]);

  const cardRefs = useRef([]);

  const handleCardClick = (index, visibleCards) => {
    const selected = visibleCards[index];
    const cardElement = cardRefs.current[index];
    if (!cardElement || !sectionRef.current) return;

    const cardRect = cardElement.getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();

    const relativeTop = cardRect.top - sectionRect.top;
    const relativeLeft = cardRect.left - sectionRect.left;
    

    /* =========================
     STEP 1 — Set initial card position
  ========================== */
    setCardStyle({
      top: relativeTop,
      left: relativeLeft,
      width: cardRect.width,
      height: cardRect.height,
      borderRadius: 32,
    });

    setExpandingCard(selected);

    /* =========================
     STEP 2 — Start expand animation
  ========================== */
    setTimeout(() => {
      setCardStyle({
        top: 0,
        left: 0,
        width: sectionRect.width,
        height: sectionRect.height,
        borderRadius: 0,
      });
    }, 20);

    /* =========================
     STEP 3 — Slide animation
  ========================== */
    setAnimateSlider(true);
    const slideAmount = -(index * (CARD_WIDTH + GAP));
    setSliderOffset(slideAmount);

    /* =========================
     STEP 4 — Fade text immediately
  ========================== */
    setTextVisible(false);

    /* =========================
     STEP 5 — Change content in middle
  ========================== */
    setTimeout(() => {
      setBackgroundImg(selected.img);
      setActiveDestination(selected);
      setTextVisible(true);
    }, 400); // Half of expand duration

    /* =========================
     STEP 6 — Finish & reset
  ========================== */
    setTimeout(() => {
      const updated = [
        ...destinations.filter((item) => item.img !== selected.img),
        selected,
      ];

      setDestinations(updated);

      setSliderOffset(0);
      setAnimateSlider(false);
      setExpandingCard(null);

      // 🔥 UPDATE PROGRESS BAR
      setCurrentIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 800);
  };

  const handlePrev = () => {
    const rotated = [
      destinations[destinations.length - 1],
      ...destinations.slice(0, destinations.length - 1),
    ];
    setDestinations(rotated);

    setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    const rotated = [...destinations.slice(1), destinations[0]];
    setDestinations(rotated);

    setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const GalleryItem = ({ img, rowSpan = 1, colSpan = 1 }) => (
    <Box
      sx={{
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${colSpan}`,
        overflow: "hidden",
        borderRadius: "20px",
        position: "relative",
        cursor: "pointer",
        transition: "all 0.4s ease",
        "&:hover img": {
          transform: "scale(1.08)",
        },
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );

  // 👇 Only show 3 non-active cards
  const visibleCards = destinations
    .filter((item) => item.img !== backgroundImg)
    .slice(0, 5);

  return (
    <>
      <Box
        ref={sectionRef}
        sx={{
          width: "100%",
          minHeight: "100vh",
          ...zoomAnimation,
          position: "relative",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* BACKGROUND */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "slowZoom 12s ease-in-out infinite alternate",
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.2s ease-out",
          }}
        />

        {/* EXPANDING CARD */}
        {expandingCard && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              backgroundImage: `url(${expandingCard.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
              willChange: "transform, width, height",
              ...cardStyle,
            }}
          />
        )}

        {/* OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* CONTENT */}
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 3,
            pt: { xs: 14, md: 20 },
          }}
        >
          {/* SLIDER */}
          <Box
            sx={{ overflow: "hidden", ml: { xs: 0, md: 70 }, mt: { md: 20 } }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-end",
                transform: `translateX(${sliderOffset}px)`,
                transition: animateSlider
                  ? "transform 1s cubic-bezier(0.16, 1, 0.3, 1)"
                  : "none",
                willChange: "transform",
              }}
            >
              {visibleCards.map((item, index) => (
                <Box
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => handleCardClick(index, visibleCards)}
                  sx={{
                    width: 200,
                    height: 260,
                    flexShrink: 0,
                    borderRadius: "32px",
                    cursor: "pointer",
                    position: "relative",
                    padding: "14px",
                    background: "rgba(255, 255, 255, 0.14)",
                    backdropFilter: "blur(2px)", // 🔥 stronger blur
                    WebkitBackdropFilter: "blur(2px)",
                    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
                    transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
                  }}
                >
                  {/* INNER IMAGE CONTAINER */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "78%",
                      borderRadius: "22px",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={item.img}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* TITLE OUTSIDE IMAGE (LIKE SCREENSHOT) */}
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 18,
                      left: 22,
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "16px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
            {/* Controls */}
            <Box
              sx={{
                mb: 3,
                mt: 3,
                display: "flex",
                alignItems: "center",
                gap: 1,
                maxWidth: 600,
                ml: { xs: 0, md: 0 },
              }}
            >
              <IconButton onClick={handlePrev}>
                <Box
                  component="img"
                  src={leftArrow}
                  sx={{
                    width: 18,
                    height: 18,
                  }}
                />
              </IconButton>
              <IconButton onClick={handleNext}>
                <Box
                  component="img"
                  src={rightArrow}
                  sx={{
                    width: 18,
                    height: 18,
                  }}
                />
              </IconButton>

              <Box
                sx={{
                  flex: 1,
                  height: 4,
                  background: "rgba(255,255,255,0.3)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${((currentIndex + 1) / heroImages.length) * 100}%`,
                    height: "100%",
                    background: "#f5b942",
                    transition: "width 0.5s ease",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ background: "#f5f5f5", py: 8 }}>
        <Typography
          sx={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 700,
            fontSize: { xs: "40px", md: "60px" },
            ml: { xs: 5, md: 25 },
            mb: { xs: 0, md: 2 },
            color: "#F6A61D",
            textShadow: `
              0px 4px 10px rgba(0,0,0,0.5)
            `,
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? "translateY(0px)" : "translateY(30px)",
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {activeDestination.title}
        </Typography>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)", // 🔥 4 columns like modern galleries
              },
              gap: 3,
              gridAutoRows: "300px", // smaller row height = better control
            }}
          >
            {galleryData.map((item, index) => (
              <GalleryItem
                key={index}
                img={item.img}
                rowSpan={item.rowSpan || 1}
                colSpan={item.colSpan || 1}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GallerySection;
