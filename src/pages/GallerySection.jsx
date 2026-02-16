import React, { useState, useRef, useEffect } from "react";
import { Box, Container, Typography, Chip, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.png";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.png";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.png";
import img11 from "../assets/gallery/11.png";
import img12 from "../assets/gallery/12.png";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";

import Kyrgyzstan from "../assets/gallery/Kyrgyzstan.png";
import Spain from "../assets/gallery/Spain.png";
import Balkans from "../assets/gallery/Balkans.png";
import IndiaSpain from "../assets/gallery/IndiaSpain.png";

const initialDestinations = [
  { title: "Kyrgyzstan", img: Kyrgyzstan },
  { title: "Spain", img: Spain },
  { title: "Balkans", img: Balkans },
  { title: "India and Spain", img: IndiaSpain },
];

const CARD_WIDTH = 260;
const GAP = 24;

const GallerySection = () => {
  const [destinations, setDestinations] = useState(initialDestinations);
  const [backgroundImg, setBackgroundImg] = useState(
    initialDestinations[initialDestinations.length - 1].img,
  );

  const [expandingCard, setExpandingCard] = useState(null);
  const [cardStyle, setCardStyle] = useState({});
  const [sliderOffset, setSliderOffset] = useState(0);
  const [animateSlider, setAnimateSlider] = useState(false);
  const heroImages = destinations.map((item) => item.img);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const visible = destinations
        .filter((item) => item.img !== backgroundImg)
        .slice(0, 3);

      if (!visible.length) return;

      const selected = visible[0];
      const cardElement = cardRefs.current[0];

      if (!cardElement) return;

      const cardRect = cardElement.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      const relativeTop = cardRect.top - sectionRect.top;
      const relativeLeft = cardRect.left - sectionRect.left;

      setCardStyle({
        top: relativeTop,
        left: relativeLeft,
        width: cardRect.width,
        height: cardRect.height,
        borderRadius: 32,
      });

      setExpandingCard(selected);

      setTimeout(() => {
        setCardStyle({
          top: 0,
          left: 0,
          width: sectionRect.width,
          height: sectionRect.height,
          borderRadius: 0,
        });
      }, 20);

      /* SLIDE */
      setAnimateSlider(true);
      setSliderOffset(-(CARD_WIDTH + GAP));

      setTimeout(() => {
        setBackgroundImg(selected.img);

        const updated = [
          ...destinations.filter((item) => item.img !== selected.img),
          selected,
        ];

        setDestinations(updated);

        setSliderOffset(0);
        setAnimateSlider(false);
        setExpandingCard(null);
        setCurrentIndex(0);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, [destinations, backgroundImg]);

  const cardRefs = useRef([]);

  const handleCardClick = (index, visibleCards) => {
    const selected = visibleCards[index];
    const cardElement = cardRefs.current[index];
    if (!cardElement) return;

    const cardRect = cardElement.getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();

    const relativeTop = cardRect.top - sectionRect.top;
    const relativeLeft = cardRect.left - sectionRect.left;

    setCardStyle({
      top: relativeTop,
      left: relativeLeft,
      width: cardRect.width,
      height: cardRect.height,
      borderRadius: 32,
    });

    setExpandingCard(selected);

    setTimeout(() => {
      setCardStyle({
        top: 0,
        left: 0,
        width: sectionRect.width,
        height: sectionRect.height,
        borderRadius: 0,
      });
    }, 20);

    /* ========= SLIDER ANIMATION ========= */
    setAnimateSlider(true);

    const slideAmount = -(index * (CARD_WIDTH + GAP));
    setSliderOffset(slideAmount);

    setTimeout(() => {
      // Change background image
      setBackgroundImg(selected.img);

      // Move selected card to end
      const updated = [
        ...destinations.filter((item) => item.img !== selected.img),
        selected,
      ];

      setDestinations(updated);

      // Reset slider
      setSliderOffset(0);
      setAnimateSlider(false);
      setExpandingCard(null);
      setCurrentIndex(0);
    }, 800);
  };

  const handlePrev = () => {
    // rotate array backwards
    const rotated = [
      destinations[destinations.length - 1],
      ...destinations.slice(0, destinations.length - 1),
    ];
    setDestinations(rotated);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    // rotate array forwards
    const rotated = [...destinations.slice(1), destinations[0]];
    setDestinations(rotated);
    setCurrentIndex(0);
  };

  const GalleryItem = ({ img, rowSpan = 1, colSpan = 1 }) => (
    <Box
      sx={{
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${colSpan}`,
        overflow: "hidden",
        borderRadius: 3,
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
    </Box>
  );

  // 👇 Only show 3 non-active cards
  const visibleCards = destinations
    .filter((item) => item.img !== backgroundImg)
    .slice(0, 4);

  return (
    <>
      <Box
        ref={sectionRef}
        sx={{
          width: "100%",
          minHeight: "100vh",

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
            transition: "opacity 0.5s ease",
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
              transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
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
          <Typography
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 700,
              fontSize: { xs: "28px", md: "65px" },
              mb: 1,
              ml: { xs: 0, md: 10 },
            }}
          >
            Crafting Memories By Letting The Road Overtake
          </Typography>

          <Typography sx={{ mb: 1, ml: { xs: 0, md: 10 } }}>
            Mountain passes. Offbeat routes. Oldest wine making.
          </Typography>

          <Box sx={{ display: "flex", gap: 3, mb: 4, ml: { xs: 0, md: 10 } }}>
            <Chip
              label="All Women"
              sx={{
                backgroundColor: "#f5b942",
                color: "#000",
                fontWeight: 600,
              }}
            />
            <Typography>8th to 16th August, 2026</Typography>
          </Box>

          {/* SLIDER */}
          <Box sx={{ overflow: "hidden", ml: { xs: 0, md: 80 } }}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                alignItems: "flex-end",
                transform: `translateX(${sliderOffset}px)`,
                transition: animateSlider
                  ? "transform 0.8s cubic-bezier(.22,1,.36,1)"
                  : "none",
              }}
            >
              {visibleCards.map((item, index) => (
                <Box
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => handleCardClick(index, visibleCards)}
                  sx={{
                    width: CARD_WIDTH,
                    height: 300,
                    flexShrink: 0,
                    borderRadius: 4,
                    overflow: "hidden",
                    cursor: "pointer",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255,255,255,0.15)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    transition: "all 0.4s ease",
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "75%",
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography fontWeight={600}>{item.title}</Typography>
                  </Box>
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
                gap: 3,
                maxWidth: 600,
                ml: { xs: 0, md: 0 },
              }}
            >
              <IconButton
                onClick={handlePrev}
                sx={{ background: "rgba(255,255,255,0.2)" }}
              >
                <ArrowBackIosNewIcon sx={{ color: "#fff" }} />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{ background: "rgba(255,255,255,0.2)" }}
              >
                <ArrowForwardIosIcon sx={{ color: "#fff" }} />
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
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr", // 1 column mobile
                sm: "repeat(2, 1fr)", // 2 columns tablet
                md: "repeat(4, 1fr)", // 4 columns desktop
              },
              gap: 3,
              gridAutoRows: {
                xs: "auto", // 🔥 important
                md: "220px",
              },
            }}
          >
            <GalleryItem img={img1} rowSpan={2} />
            <GalleryItem img={img2} colSpan={2} />
            <GalleryItem img={img3} />

            <GalleryItem img={img4} />
            <GalleryItem img={img5} />
            <GalleryItem img={img6} rowSpan={2} />

            <GalleryItem img={img7} colSpan={2} />
            <GalleryItem img={img8} />

            <GalleryItem img={img9} rowSpan={2} />
            <GalleryItem img={img10} />
            <GalleryItem img={img11} />

            <GalleryItem img={img12} />
            <GalleryItem img={img13} />
            <GalleryItem img={img14} colSpan={2} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GallerySection;
