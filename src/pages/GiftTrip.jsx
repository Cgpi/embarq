import React from "react";
import { Box, Typography } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";

export default function GiftTrip() {
  const features = [
    {
      title: "Memories Over Material Things",
      text: "Unlike objects that gather dust, experiences last a lifetime. A road trip, an expedition, or a cultural deep dive creates stories to cherish forever.",
    },
    {
      title: "Perfect for All Occasions",
      text: "Whether it’s a birthday, anniversary, graduation, or just because — you can never go wrong with an adventure!",
    },
    {
      title: "Tailored Adventures with Embarq",
      text: "Imagine the excitement of an offbeat road trip through uncharted territories or the adrenaline rush of an expedition into the wild. Embarq crafts journeys that redefine the way we travel!",
    },
    {
      title: "Transformation Through Travel",
      text: " It’s more than just a vacation; it’s an opportunity for self-discovery, new perspectives, and unforgettable moments.",
    },
    {
      title: "A Gift of Escape",
      text: "Give your loved ones a break from routine and a chance to explore breathtaking landscapes, hidden gems, and thrilling new cultures.",
    },
  ];
  const FeatureCard = ({ item }) => (
    <Box
      sx={{
        backgroundColor: "#F3F3F3",
        borderRadius: "16px",
        p: 2.5,
        display: "flex",
        gap: 1.5,
      }}
    >
      <ExploreIcon sx={{ color: "#F4A100", fontSize: 20, mt: "2px" }} />
      <Box>
        <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 0.5 }}>
          {item.title}
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
          {item.text}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <> {/* ================= HERO SECTION ================= */}
    <Box
  sx={{
    width: "100%",
    height: { xs: "60vh", md: "100vh" },
    backgroundImage:
      "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
  }}
>
  {/* Overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.45)",
    }}
  />

  {/* Left Aligned Content Wrapper */}
  <Box
    sx={{
      position: "relative",
      maxWidth: "1200px",
      width: "100%",
      mx: "auto",
      px: { xs: 3, md: 6 },
    }}
  >
    <Typography
      variant="h2"
      sx={{
        color: "#fff",
        fontFamily: "'Fraunces', sans-serif",
        fontWeight: 700,
        textAlign: "left",
        fontSize: { xs: "36px", md: "64px" },
        letterSpacing: "1px",
      }}
    >
      Gift a Trip
    </Typography>
  </Box>
</Box>

    <Box sx={{ backgroundColor: "#ECECEC", py: 1 }}>
        
      <Box
        sx={{
            mt: 5,          maxWidth: "1200px",
          mx: "auto",
          px: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.2fr 1fr",
          },
          gap: {
            xs: 4,
            md: 6,
          },
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Why Gift a Trip?
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#555",
              mb: 4,
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            A trip isn’t just a gift — it’s an unforgettable experience wrapped
            in adventure and discovery!
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {features.slice(0, 3).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </Box>

          <Typography sx={{ mt: 4, fontSize: 13, color: "#666" }}>
            With Embarq, you're not just gifting a trip — you're gifting freedom.
          </Typography>
        </Box>

        {/* RIGHT */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* IMAGE GRID */}
          <Box
            sx={{
              p: 1.5,
              borderRadius: "24px",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                sm: "1fr 1fr",
                md: "1.2fr 1fr",
              },
              gridTemplateRows: {
                xs: "180px 120px ",
                sm: "200px 120px",
                md: "220px 120px",
              },
              gap: 2,
            }}
          >
            {/* BIG */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
                gridRow: {
                  xs: "1 / span 1",
                  sm: "1 / span 2",
                  md: "1 / span 2",
                },
              }}
            />

            {/* TOP RIGHT */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
                transform: {
                  xs: "translateY(0px)",
                  sm: "translateY(-14px)",
                  md: "translateY(-20px)",
                },
              }}
            />

            {/* BOTTOM RIGHT */}
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {features.slice(3).map((item, i) => (
              <FeatureCard key={i} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
}




