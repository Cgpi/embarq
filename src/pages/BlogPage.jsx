import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import heroImg from "../assets/blog/blogbg.webp";
import post1 from "../assets/blog/blogimage1.jpg";
import post2 from "../assets/blog/blogimage2.png";
import post3 from "../assets/blog/blogimage3.png";
import post4 from "../assets/blog/blogimage4.jpg";

const BlogPage = () => {
  const blogPosts = [
    {
      image: post1,
      date: "October 10, 2025",
      title: "5 Ways in which Overlanding has changed me",
    },
    {
      image: post2,
      date: "February 6, 2025",
      title: "A Journey Through the Roof of the World",
    },
    {
      image: post3,
      date: "February 3, 2025",
      title: "Ubud and Periyar Have My Love",
    },
    {
      image: post4,
      date: "September 27, 2024",
      title: "Colours of Kyrgyzstan",
    },
  ];

  const topPosts = [
    {
      image: post1,
      title: "5 Ways in which Overlanding has changed me",
      date: "October 10, 2025",
    },
    {
      image: post2,
      title: "Colours of Kyrgyzstan",
      date: "October 6, 2024",
    },
    {
      image: post3,
      title: "Ubud and Periyar Have My Love",
      date: "January 8, 2025",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f3f3f3" }}>
      {/* HERO */}
      <Box
        sx={{
          height: 520,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 600,
              fontFamily: "Playfair Display, serif",
            }}
          >
            Blog
          </Typography>
        </Container>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 3 }}>
            <Grid container spacing={4} justifyContent="center">
              {blogPosts.map((post, index) => (
                <Grid
                  item
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    sx={{
                      width: 340,
                      height: 380,
                      borderRadius: "20px",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "column",

                      // 🔥 Premium soft shadow
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",

                      // 🔥 Smooth animation
                      transition: "all 0.3s ease",

                      // 🔥 Hover effect
                      "&:hover": {
                        boxShadow: "0 18px 45px rgba(0, 0, 0, 0.15)",
                        transform: "translateY(-6px)",
                      },
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      sx={{
                        height: 230,
                        width: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* CONTENT */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        overflow: "hidden",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#9e9e9e",
                          fontSize: "13px",
                          mb: 1,
                        }}
                      >
                        {post.date}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "15px",
                          lineHeight: 1.5,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ flex: 1, minWidth: 280 }}>
            {/* Categories */}
            <Box
              sx={{
                backgroundColor: "#efe6d8",
                borderRadius: "16px",
                p: 3,
                mb: 4,
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 2 }}>
                Pick Top Categories
              </Typography>

              <Typography sx={{ mb: 1.2, fontSize: 14 }}>
                Adventure Diaries
              </Typography>
              <Typography sx={{ mb: 1.2, fontSize: 14 }}>
                Latest Blogs
              </Typography>
              <Typography sx={{ mb: 1.2, fontSize: 14 }}>Travel</Typography>
              <Typography sx={{ fontSize: 14 }}>Namaste Diem</Typography>
            </Box>

            {/* Top Posts */}
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                p: 3,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 3 }}>Top Posts</Typography>

              {topPosts.map((post, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    gap: 2,
                    mb: index !== topPosts.length - 1 ? 2.5 : 0,
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                      width: 65,
                      height: 65,
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        fontSize: 13.5,
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {post.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 12,
                        color: "#9e9e9e",
                        mt: 0.5,
                      }}
                    >
                      {post.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
