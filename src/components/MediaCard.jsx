import React from "react";
import { Card, Typography, Box } from "@mui/material";

const MediaCard = ({ image, title, author, date, link }) => {
  return (
    <Card
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "none",
        backgroundColor: "#f3f1ec",
        borderRadius: "28px",
        p: 3,
        height: 300, // taller like screenshot
        width: "100%",
        maxWidth: 340,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: "#e6b65c",
          transform: "translateY(-6px)",
          boxShadow: "0 16px 35px rgba(0,0,0,0.18)",
        },
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          borderRadius: "22px",
          mb: 0.5,
        }}
      />

      {/* Title */}
      <Typography
        sx={{
          fontSize: "16px", // 🔥 bigger like image
          fontWeight: 700,
          lineHeight: 1.3,
          color: "#111",
          mb: 2
        }}
      >
        {title}
      </Typography>

      {/* Author + Date */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px", // 🔥 bigger
            color: "#000000",
            fontWeight: 500,
          }}
        >
          {author}
        </Typography>

        <Typography
          sx={{
            fontSize: "16px", // 🔥 bigger
            color: "#000000",
            fontWeight: 500,
          }}
        >
          {date}
        </Typography>
      </Box>
    </Card>
  );
};

export default MediaCard;
