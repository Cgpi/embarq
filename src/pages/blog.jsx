import React, { useState,useRef  } from "react";


import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Chip
} from "@mui/material";

import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpeg";
import heroImg from "../assets/blog/hero.jpg";

export default function Blog() {
  const [activePage, setActivePage] = useState(1);
  const blogScrollRef = useRef(null);

const scroll = (direction) => {
  if (!blogScrollRef.current) return;

  const scrollAmount = 240;

  blogScrollRef.current.scrollBy({
    left: direction === "next" ? scrollAmount : -scrollAmount,
    behavior: "smooth"
  });
};


 const allBlogs = [
    {
      id: 1,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 2,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 3,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 4,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 5,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 6,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 7,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 8,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 9,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 10,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    }

  ];

  const displayedBlogs = allBlogs.slice((activePage - 1) * 2, activePage * 2);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
     {/* ================= HERO ================= */}
<Box
  sx={{
    height: { xs: "55vh", md: "100vh" },
    display: "flex",
    alignItems: "center",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff"
  }}
>
  <Container maxWidth="lg">
    <Typography
      sx={{
        fontWeight: 800,
        lineHeight: 1.15,
        fontFamily: "'fraunces', serif",        maxWidth: { xs: "90%", md: "800px" },
        fontSize: { xs: "28px", md: "52px" }
      }}
    >
      Crafting Memories By Letting
      The Road Overtake
    </Typography>
  </Container>
</Box>


    {/* ================= LATEST BLOG ================= */}
<Container sx={{ py: { xs: 6, md: 10 } }}>

<Grid
  container
  alignItems="center"
  columnSpacing={{ xs: 4, md: 10 }}
  // sx={{
  //   "@media (min-width:900px) and (max-width:1020px)": {
  //     "& .latestBlogLeft": {
  //       transform: "scale(0.88)",
  //       transformOrigin: "left center"
  //     },
  //     "& .latestBlogRight": {
  //       marginLeft: "-50px"
  //     }
  //   }
  // }}
>


    {/* LEFT TEXT */}
    <Grid
  item
  xs={12}
  md={4}
  className="latestBlogLeft"
  sx={{
    "@media (min-width:900px) and (max-width:1020px)": {
      flexBasis: "25%",
      maxWidth: "25%"
    }
  }}
>

      <Typography sx={{ mb: 0, fontSize: 22,fontFamily: "'Roboto Flex', sans-serif"}}>
        Latest Blog
      </Typography>

      <Typography
        sx={{
          fontWeight: 800,
          fontFamily: "'fraunces', serif",
          mb: 1,
          fontSize: { xs: 28, md: 38 }
        }}
      >
        Adventure Drives
      </Typography>

      <Typography sx={{ mb: 2, color: "#666" }}>
        5 Ways in which Overlanding has changed me
      </Typography>

      <Button
        variant="contained"
        sx={{
          background: "#F6B43F",
          borderRadius: "40px",
          px: 3,
          py: 0.7,
          textTransform: "none",
          boxShadow: "none"
        }}
      >
        View Full Blog
      </Button>
    </Grid>

   {/* RIGHT CARDS */}
<Grid item xs={12} md={8}>

  {/* ================= MOBILE VIEW ================= */}
  <Box sx={{ display: { xs: "block", md: "none" } }}>

    {/* SCROLLABLE CARDS */}
    <Box
      ref={blogScrollRef}
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto",
        scrollBehavior: "smooth",
        pb: 2,
        "&::-webkit-scrollbar": { display: "none" }
      }}
    >
      {[blog1, blog2, blog3].map((img, i) => (
        <Card
          key={i}
          sx={{
            minWidth: 220,
            borderRadius: 4,
            flexShrink: 0,
            boxShadow: 0
          }}
        >
          <CardMedia
            component="img"
            image={img}
            sx={{ height: 260, borderRadius: 4 }}
          />
        </Card>
      ))}
    </Box>

    {/* MOBILE PREV NEXT */}
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <Box
        sx={{
          background: "#EFEFEF",
          borderRadius: "30px",
          p: "4px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Box
          onClick={() => scroll("prev")}
          sx={{
            px: 2,
            py: 0.6,
            borderRadius: "30px",
            color: "#B0B0B0",
            fontSize: 13,
            cursor: "pointer"
            ,fontFamily: "'Roboto Flex', sans-serif"
          }}
        >
          Prev
        </Box>

        <Box
          onClick={() => scroll("next")}
          sx={{
            px: 2,
            py: 0.6,
            borderRadius: "30px",
            background: "#fff",
            fontSize: 13,
            boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            cursor: "pointer"
            ,fontFamily: "'Roboto Flex', sans-serif"
          }}
        >
          Next
        </Box>
      </Box>
    </Box>
  </Box>

  {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
 <Box
  sx={{
    display: { xs: "none", md: "block" },
    position: "relative",
    height: 420,
    overflow: "visible"
  }}
>

<Box
  sx={{
    transform: {
      md: "scale(0.75)",
      lg: "scale(0.85)",
      xl: "scale(1)"
    },
    transformOrigin: "left top",
    width: {
      md: "133%",
      lg: "118%",
      xl: "100%"
    },
    height: "100%",
    position: "relative"
  }}
>



    <Box sx={{ position: "absolute", left: 0, top: 0 }}>
      <Card sx={{ width: 280, borderRadius: 4, boxShadow: 0 }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" image={blog1} sx={{ height: 360, borderRadius: 4 }} />
          <Typography sx={{ position: "absolute", bottom: 12, right: 12, color: "#fff", fontSize: 14 }}>
            Thailand
          </Typography>
        </Box>
      </Card>
      <Typography sx={{ mt: 1.5, fontSize: 14 ,fontFamily: "'Roboto Flex', sans-serif"}}>India - Thailand</Typography>
    </Box>

    <Card
      sx={{
        width: 210,
        position: "absolute",
        left: 300,
        top: 100,
        borderRadius: 4,
        overflow: "visible",
        boxShadow: 0
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={blog2}
          sx={{ height: 260, borderRadius: 4, transform: "translateY(40px)" }}
        />
        <Typography sx={{ position: "absolute", bottom: -30, left: 10, color: "#fff", fontSize: 13,fontFamily: "'Roboto Flex', sans-serif" }}>
          United Kingdom
        </Typography>
      </Box>
    </Card>

    <Card
      sx={{
        width: 210,
        position: "absolute",
        left: 540,
        top: 20,
        borderRadius: 4,
        overflow: "visible",
        boxShadow: 0
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={blog3}
          sx={{ height: 300, borderRadius: 4, transform: "translateY(20px)" }}
        />
        <Typography sx={{ position: "absolute", bottom: -20, left: 10, color: "#fff", fontSize: 13,fontFamily: "'Roboto Flex', sans-serif" }}>
          Italy
        </Typography>
      </Box>
    </Card>

    {/* DESKTOP PREV NEXT (UNCHANGED) */}
    <Box
      sx={{
        position: "absolute",
        bottom: -40,
        left: 600,
        background: "#EFEFEF",
        borderRadius: "30px",
        p: "4px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Box sx={{ px: 2, py: 0.6, borderRadius: "30px", color: "#B0B0B0", fontSize: 13, cursor: "pointer",fontFamily: "'Roboto Flex', sans-serif" }}>
        Prev
      </Box>

      <Box
        sx={{
          px: 2,
          py: 0.6,
          borderRadius: "30px",
          background: "#fff",
          fontSize: 13,
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
          cursor: "pointer"
          ,fontFamily: "'Roboto Flex', sans-serif"
        }}
      >
        Next
      </Box>
      </Box>
    </Box>

  </Box>

</Grid>

  </Grid>
</Container>


  {/* ================= PICK TOP CATEGORIES ================= */}
<Container sx={{ pb: 4 }}>
  
  {/* TITLE (LEFT ALIGNED) */}
  <Typography
    sx={{
      fontWeight: 700,
      mb: 2,
      fontSize: 28,
      fontFamily: "'Fraunces', sans-serif"
    }}
  >
    Pick Top Categories:
  </Typography>

  {/* ================= TABS CENTERED ================= */}
<Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
  <Box
    sx={{
      background: "#FFFFFF",
      borderRadius: "16px",
      p: "6px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",          // ← THIS makes it stretch
      maxWidth: "1500px",      // ← THIS keeps it like design
      boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
      mb: 5,
    }}
  >
    {["Adventure Drives", "Latest Blogs", "Travel", "Worldwide Drives"].map(
      (item, i) => (
        <Typography
          key={i}
          sx={{
            flex: 1,          // ← evenly distributes tabs
            textAlign: "center",
            py: 1,
            fontSize: 16,
            cursor: "pointer",
            position: "relative",
            color: i === 0 ? "#000" : "#7A7A7A",
            fontWeight: 500,
            fontFamily: "'Roboto Flex', sans-serif",

            "&::after":
              i === 0 && {
                content: '""',
                position: "absolute",
                left: "25%",
                bottom: -4,
                width: "50%",
                height: "2px",
                background: "#F3B05A",
              },
          }}
        >
          {item}
        </Typography>
      )
    )}
  </Box>
</Box>


 {/* ================= CARDS CENTERED ================= */}
<Box sx={{ width: "100%" }}>
  
  <Grid
    container
    spacing={8}
    justifyContent="center"
    sx={{
      maxWidth: "1000px",
      mx: "auto"
    }}
  >
    {[blog1, blog2, blog3].map((img, index) => (
      
      <Grid
        item
        key={index}
        sx={{
          width: {
            xs: "100%",
            sm: "48%",
            md: "290px"
          },
          display: "flex",
          justifyContent: "center"
        }}
      >
        
        <Box
          sx={{
            width: "100%",
            maxWidth: "200px",
            borderRadius: "22px",
            p: 2,
            background: "white",
            boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column"
          }}
        >

          <Box
            component="img"
            src={img}
            sx={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1.5,
              px: 0.5,
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 15,fontFamily: "'Roboto Flex', sans-serif" }}>
              {index === 0
                ? "Kyrgyzstan"
                : index === 1
                ? "Spain"
                : "Balkans"}
            </Typography>

            <Box
              sx={{
                background: "#fff",
                px: 1.2,
                py: 0.2,
                borderRadius: "20px",
                fontSize: 12,
                color: "#F3B05A",
                boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              ★★★★★
            </Box>
          </Box>

        </Box>

      </Grid>
    ))}
  </Grid>

</Box>


</Container>



      {/* ================= FEATURED BLOGS ================= */}
<Container sx={{ py: 6 }}>

  {/* ================= 2 COLUMN BLOG CONTAINER ================= */}
  <Box
    sx={{
      maxWidth: "1000px",
      mx: "auto",
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        md: "1fr 1fr"
      },
      columnGap: "60px",
      rowGap: "40px"
    }}
  >
    {displayedBlogs.map((blog) => (
      <Box key={blog.id}>
        
        {/* IMAGE */}
        <Box
          component="img"
          src={blog.img}
          sx={{
            width: "100%",
            height: 420,
            objectFit: "cover",
            borderRadius: "16px",
            mb: 2
          }}
        />

        {/* TITLE */}
        <Typography sx={{ fontWeight: 700,color: "#464545",mb: 1 }}>
          {blog.title}
        </Typography>

        {/* SUBTITLE */}
        <Typography sx={{ fontSize: 13,fontWeight: 600, color: "#464545", mb: 1 }}>
          {blog.subtitle}
        </Typography>

        {/* DESC */}
        <Typography
          sx={{
            fontSize: 13,
            color: "#464545",
            lineHeight: 1.7,
            maxWidth: "90%"
          }}
        >
          {blog.desc}
        </Typography>

      </Box>
    ))}
  </Box>

  {/* ================= PAGINATION ================= */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      mt: 6
    }}
  >
    {[1, 2, 3, 4, 5].map((num) => (
      <Box
        key={num}
        onClick={() => setActivePage(num)}
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          border: activePage === num ? "1px solid #bbb" : "none",
          fontSize: 14
        }}
      >
        {num}
      </Box>
    ))}

    <Typography sx={{ letterSpacing: 3 }}>......</Typography>
    <Typography sx={{ cursor: "pointer" }}>→</Typography>
  </Box>

</Container>


    </Box>
  );
}
