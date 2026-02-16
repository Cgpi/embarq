import { useState, useEffect, useRef } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import logo from "../../assets/logo.png";
import EnquiryPopup from "../../pages/EnquiryPopup";
import { Link } from "react-router-dom";


export default function Footer() {
    const [open, setOpen] = useState(false);
     const [enquiryOpen, setEnquiryOpen] = useState(false);
const handleOpenEnquiry = () => {
  setEnquiryOpen(true);
  setOpen(false); // close mobile menu if open
};

const handleCloseEnquiry = () => {
  setEnquiryOpen(false);
};
    
  return (
    <Box sx={{ backgroundColor: "#FCF7E3" }}>

      {/* ================= TOP SECTION ================= */}
     <Container
  maxWidth={false}
  disableGutters
  sx={{
    display: "flex",          // make container a flexbox
    justifyContent: "center", // center the inner grid horizontally
    px: { xs: 3, md: 8, lg: 14 },
    py: { xs: 4, md: 6 },
    color: "#4B4B4B" // ✅ all child text inherits this color
  }}
>
  <Grid
  container
  spacing={10}
  alignItems="flex-start"
  rowSpacing={{ xs: 3, md: 0 }}
>


    {/* LOGO */}
    <Grid item xs={12} md={3} order={{ xs: 1, md: 1 }}>

      <Box>
        <img
          src={logo}   // ⭐ Replace with your logo path
          alt="Embarq Logo"
          style={{ width: "100px" }}
        />
      </Box>
    </Grid>

   <Grid item xs={6} md={3} order={{ xs: 2, md: 2 }}>

      <Typography
        sx={{
          fontWeight: 600,
          mb: 1,
          fontSize: "0.85rem",
          fontFamily: '"Roboto Flex", sans-serif'
        }}
      >
        Main Links
      </Typography>

      {[
  { text: "Home", to: "/" },
  { text: "About Us", to: "/about" },
  { text: "All Self-Drive Expeditions", to: "/expeditions" },
  { text: "Testimonials", to: "/testimonials" },
  { text: "Blogs", to: "/blogs" },
].map((item) => (
  <Link
    key={item.text}
    to={item.to}
    style={{
      display: "block",
      fontSize: "0.75rem",
      marginBottom: "4px",
      cursor: "pointer",
      fontFamily: '"Roboto Flex", sans-serif',
      textDecoration: "none",
      color: "#4B4B4B", // font color
    }}
  >
    {item.text}
  </Link>
))}

    </Grid>

    {/* POLICY LINKS */}
   <Grid item xs={6} md={3} order={{ xs: 3, md: 3 }} >

      {/* Invisible placeholder to align with Home row */}
      <Typography
        sx={{
          fontWeight: 600,
          mb: 1,
          fontSize: "0.85rem",
          fontFamily: '"Roboto Flex", sans-serif',
          visibility: "hidden",
        }}
      >
        Placeholder
      </Typography>

      {[
        "Cancellation Policy",
        "Media",
        "Gallery",
        "FAQ's",
        "Enquire Now",
      ].map((text) => (
        <Typography
          key={text}
          sx={{
            fontSize: "0.75rem",
            mb: 0,
            cursor: "pointer",
            fontFamily: '"Roboto Flex", sans-serif'
          }}
        >
          {text}
        </Typography>
      ))}
    </Grid>

    {/* CONTACT */}
  <Grid item xs={12} md={3} order={{ xs: 4, md: 4 }}>

  <Typography
    sx={{
      fontWeight: 600,
      fontSize: "0.8rem",
      mb: 0.5,
      fontFamily: '"Roboto Flex", sans-serif'
    }}
  >
    Call:
  </Typography>

  <Typography sx={{ fontSize: "0.75rem", mt:1,fontFamily: '"Roboto Flex", sans-serif' }}>
    (+91) 8867809433
  </Typography>
  <Typography sx={{ fontSize: "0.75rem", mb: 1.5, fontFamily: '"Roboto Flex", sans-serif' }}>
    (+91) 9272166615
  </Typography>

  <Typography
    sx={{
      fontWeight: 600,
      fontSize: "0.8rem",
      mt: 1,
      fontFamily: '"Roboto Flex", sans-serif'
    }}
  >
    Email ID:
  </Typography>

  <Typography sx={{ fontSize: "0.75rem", mb: 2, fontFamily: '"Roboto Flex", sans-serif' }}>
    enquiries@embarq.in
  </Typography>
</Grid>

{/* ENQUIRY BUTTON */}
<Grid
  item
  xs={12}
  md={3}
  order={{ xs: 5, md: 5 }}
  sx={{
    display: "flex",
    justifyContent: { xs: "flex-start", md: "center" },
    alignItems: "flex-end",
    mt: { xs: 2, md: 12 }
  }}
>

  <Button
              variant="contained"
              sx={{
                backgroundColor: "#f2a93b",
                borderRadius: "20px",
                textTransform: "none",
                fontSize: "0.75rem",
                px: 2.5,
                py: 0.5,
                "&:hover": { backgroundColor: "#e59c2d" }
              }}
              onClick={handleOpenEnquiry} // ✅ opens popup
            >
              Quick Enquiry
            </Button>
</Grid>


  </Grid>
</Container>


      {/* ================= BOTTOM STRIP ================= */}
      <Box
        sx={{
          backgroundColor: "#5A5A5C",
          textAlign: "center",
          py: 3
        }}
      >
        <Typography
          sx={{
            fontSize: "0.7rem",
            color: "#fff",
            fontFamily: '"Roboto Flex", sans-serif'
          }}
        >
          Copyright © 2025 Embarq Motorworld Pvt. Ltd. | All Rights Reserved.
        </Typography>
      </Box>
<EnquiryPopup
  open={enquiryOpen}
  handleClose={handleCloseEnquiry}
/>
    </Box>
  );
}
