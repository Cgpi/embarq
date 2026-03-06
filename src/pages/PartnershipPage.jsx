import React, { useRef, useState ,useEffect} from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


import BannerImg from "../assets/partnership/banner.png";
import ExpeditionImg from "../assets/partnership/Partnership.png";
import InfluncersImg1 from "../assets/partnership/Shirodhara-kerala 1.png"
import InfluncersImg2 from "../assets/partnership/Shirodhara-kerala 2.png"
import PurposeImg from "../assets/partnership/image 10.png";
import K2KImg from "../assets/partnership/image 12.png";
import Partners1 from "../assets/partnership/OurSpiritualHome.png"
import kyrgyzstan from "../assets/images/georgia.png";
import spain from "../assets/images/finland.jpg";
import balkans from "../assets/images/japan.jpg";
import russia from "../assets/images/scotland.jpg";
import iceland from "../assets/images/skorea.jpg";
import ladakh from "../assets/images/slide1.png";
import image1 from "../assets/partnership/image 13.png";
import image2 from "../assets/partnership/image 14.png";
const expeditionData = [
  {
    title: "K2K 2025: Kashmir To Kanyakumari",
    desc: `To mark Embarq’s 10th year, we launched The Bold Route Series with an all-women drive from Kashmir to Kanyakumari. The expedition covered 4,000 KM, involved 50 women, 25 cars, and travelled across NH 44 in just 10 days, in partnership with Škoda India.
Škoda India came on board as the presenting partner, reflecting shared values of mobility, inclusivity, and community engagement`,
  },
  {
    title: "Aamby Valley",
    desc: "The recently concluded SOUL Weekend Drive, an initiative by Tata Motors’ SUV Owners United League (SOUL), unfolded on April 5th and 6th, 2025, against the stunning backdrop of Aamby Valley City near Lonavala. Designed to celebrate the spirit of exploration and community, the event brought together passionate Tata SUV owners for an unforgettable weekend of adventure and connection.",
  },
  {
  title: "India to Thailand",
  desc: `A journey to cross a few Boundaries and to Break a Few
3000 kms – 12 days – 3 countries – India > Myanmar > Thailand
6 compact SUV’s – 14 women
The trip started in Imphal, Manipur (India) and ended in Bangkok (Thailand)
A grand flag off in Imphal by the tourism ministry of Manipur.`,
}
  
];

const data = [
  { title: "Kyrgyzstan", image: kyrgyzstan },
  { title: "Spain", image: spain },
  { title: "Balkans", image: balkans },
  { title: "Russia", image: russia },
  { title: "Iceland", image: iceland },
  { title: "Ladakh", image: ladakh },
];



function ImageContentSections() {
  const sections = [
    {
      title: "Partner with Purpose",
      description:
        "We’re gearing up for an exciting new adventure, and you can be a part of it! Join us as a brand partner on the next Bold Route expedition, offering unmatched visibility, real-world engagement, and purpose-driven storytelling that resonates with audiences and drives meaningful impact",
      image: PurposeImg,
    },
    {
      title: "K2K 2026: Kutch to Kibithoo",
      description:
        "The Bold Route Series continues with a transformative journey from India’s westernmost point (Kutch) to the easternmost point (Kibithoo), uniting diverse communities along the way.",
      image: K2KImg,
    },
   
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 },px: { xs: 6, md: 10 }, background: "#fff" }}>
      <Container maxWidth="xl">
        {sections.map((item, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 4, md: 8 },
              mb: { xs: 6, md: 10 },
              flexDirection: {
                xs: "column",
                md: i % 2 === 0 ? "row" : "row-reverse",
              },
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: { xs: "100%", md: "40%" },
                borderRadius: "16px",
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography
                sx={{
                  fontFamily: "'Roboto Flex', sans-serif",
                  fontWeight: 600,
                  mb: 2,
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                    md: "30px",
                    lg: "34px",
                  },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#555",
                  lineHeight: 1.7,
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
/* ================= PINNED SCROLL ================= */

function PinnedExpedition() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const contentRef = useRef(null);

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;

    const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
  };

  return (
    <Box sx={{  bgcolor: "white",py: 2 }}>
     <Container maxWidth="lg" sx={{ overflow: "visible" }}>

        <Typography
          align="center"
          sx={{
            fontFamily: "Fraunces, serif",
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            mb: 6,
            mt: 6,
          }}
        >
          Catch a glimpse of the 2025 expedition and gear up for the next adventure!
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: { xs: 1.5, sm: 2, md: 0 },
          }}
        >

          {/* SCROLL CONTENT */}

          <Box
  ref={contentRef}
  onScroll={handleScroll}
  sx={{
    height: "420px",
    overflowY: "auto",
    flex: 1,
    pr: 0,
    pl: { md: "110px", lg: "10px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",   // centers cards
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  }}
  data-lenis-prevent
>
            {expeditionData.map((item, index) => (
         <Box
  key={index}
  sx={{
    mt: 3,
    mb: 6,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }}
>
 <Card
  sx={{
    position: "relative",
    borderRadius: "26px",
    background: "#FCF5E4",
    boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
    maxWidth: "880px",
    width: "100%",
    minHeight: { xs: "auto", sm: "350px" },
    padding: {
      xs: "20px",
      sm: "40px 40px 40px 300px", // padding-left for image only above 700px
    },
    overflow: "visible",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" }, // stack below 700px
   alignItems: { xs: "flex-start", sm: "center" },
    marginLeft: { xs: 0, sm: "100px" }, // pull left on larger screens
  }}
>
    {/* IMAGE */}

   <Box
  component="img"
  src={ExpeditionImg}
  sx={{
    position: { xs: "relative", sm: "absolute" }, // 'sm' will be 700px breakpoint
    left: { xs: 0, sm: "-100px",md: "-140px" }, // pull left on larger screens
   top: { xs: 0, sm: "50%" },
transform: { xs: "translateY(0)", sm: "translateY(-50%)" },
    width: { xs: "100%", sm: 300 },
    height: { xs: 220, sm: 220 },
    borderRadius: "20px",
    objectFit: "cover",
    mb: { xs: 2, sm: 0 },
  }}
/>

    {/* TEXT */}

    <CardContent
  sx={{
    p: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: { sm: "center" }, // vertical centering
    height: "100%",
  }}
>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.2rem",
          mt: { xs: 1, md: 5 },
          color: "#000",
        }}
      >
        {item.title}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "#333",
          maxWidth: "520px",
          mt: 2,
          whiteSpace: "pre-line",
        }}
      >
        {item.desc}
      </Typography>
    </CardContent>
  </Card>
</Box>
            ))}
          </Box>

          {/* RIGHT PROGRESS BAR */}

          <Box
            sx={{
              position: "relative",
              width: "4px",
              height: "420px",
              background: "#ddd",
              borderRadius: 10,
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: `${scrollProgress}%`,
                background: "#e49a2f",
                borderRadius: 10,
                transition: "height 0.15s linear",
              }}
            />
          </Box>

        </Box>
      </Container>
    </Box>
  );
}

function Counter({ end, suffix = "", decimals = 0, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let value = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      value += increment;

      if (value >= end) {
        value = end;
        clearInterval(timer);
      }

      setCount(value);
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <Typography
      sx={{
        fontSize: { xs: "18px", sm: "24px", md: "32px" },
        fontWeight: 700,
      }}
    >
      {count.toFixed(decimals)}
      {suffix}
    </Typography>
  );
}
function MilestoneReach() {
  const stats = [
    { end: 2.235, label: "Instagram views", suffix: "M+", decimals: 3 },
    { end: 30, label: "Regional media stories", suffix: "+", decimals: 0 },
    { end: 10, label: "National features", suffix: "+", decimals: 0 },
  ];

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
  ref={sectionRef}
  sx={{ background: "#FCF7E3", py: { xs: 6, md: 10 } }}
>
      <Container maxWidth="lg">

        {/* Title */}
        <Typography
          align="center"
          sx={{
            color: "#E49A2F",
            fontFamily: "Fraunces, serif",
            fontWeight: 600,
            mb: 6,
            fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
            lineHeight: 1.3,
          }}
        >
          This milestone gained impressive reach
        </Typography>

        {/* Stats */}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          {stats.map((item, i) => (
            <Grid
              item
              xs={4}
              md={4}
              key={i}
              sx={{
                textAlign: "center",
                position: "relative",
                py: { xs: 1, sm: 2 },
                px: { xs: 1, sm: 4.8, md: 8,lg: 15 },
                "&:not(:last-of-type)": {
                  borderRight: "1px solid #9E9E9E",
                },
              }}
            >
             <Counter
  start={startCount}
  end={item.end}
  suffix={item.suffix}
  decimals={item.decimals}
/>

              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "12px", md: "14px" },
                  color: "#444",
                }}
              >
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Influencer Title
        <Typography
          align="center"
          sx={{ mt: 7, mb: 4, fontSize: "18px", fontWeight: 500 }}
        >
          Covered by influencers like
        </Typography> */}

        {/* Influencers */}
       {/* <Grid
  container
  spacing={{ xs: 2, sm: 3, md: 5, lg: 8 }}
  justifyContent="center"
>
          <Grid item>
            <Box textAlign="center">
              <Box
                component="img"
                src={InfluncersImg1}
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: "16px",
                  objectFit: "cover",
                  mb: 1.5,
                }}
              />
              <Typography sx={{ fontWeight: 500 }}>
                Nidhi Bhanushali
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                (1.2M Followers)
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box textAlign="center">
              <Box
                component="img"
                src={InfluncersImg2}
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: "16px",
                  objectFit: "cover",
                  mb: 1.5,
                }}
              />
              <Typography sx={{ fontWeight: 500 }}>
                Garima Avtar
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>
                (476K Followers)
              </Typography>
            </Box>
          </Grid>
        </Grid> */}

        {/* Bottom Text */}
        {/* <Typography
          align="center"
          sx={{ mt: 6, fontSize: "18px", fontWeight: 600 }}
        >
          Endorsed By NHAI & Sri Nitin Gadkari
        </Typography> */}

      </Container>
    </Box>
  );
}
function ExpeditionsCardScroll() {

  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  /* SCROLL PROGRESS */
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const percentage = (el.scrollLeft / maxScroll) * 100;
    setProgress(percentage);
  };

  /* BUTTON SCROLL */
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 260;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  /* AUTO SCROLL */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 260, behavior: "smooth" });
      }

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (

    <Box
      sx={{
        background: "#FCF5E4",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 12 },
        marginTop: 6,
      }}
    >

      <Box
        sx={{
          display: "flex",
          gap: { xs: 4, md: 10 },
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }
        }}
      >

        {/* LEFT TITLE */}

       <Box
  sx={{
    minWidth: { md: 340 },
    display: "flex",
    flexDirection: "column",
    gap: 2
  }}
>
  <Typography
    sx={{
      fontFamily: "Fraunces, serif",
      fontSize: { xs: 34, md: 56 },
      color: "#F6B43F",
      lineHeight: 1.2
    }}
  >
    Explore More
  </Typography>

  <Typography
    sx={{
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: { xs: 14, md: 16 },
      color: "#0b0b0b",
      maxWidth: 280
    }}
  >
    View more amazing places to travel and discover unforgettable expeditions around the world.
  </Typography>
</Box>
        {/* RIGHT SECTION */}

        <Box sx={{ flex: 1, overflow: "hidden", width: "100%" }}>

          {/* SCROLL AREA */}

          <Box
            ref={scrollRef}
            onScroll={handleScroll}
            sx={{
              display: "flex",
              gap: 3,
              overflowX: "auto",
              scrollBehavior: "smooth",
              pb: 3,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" }
            }}
          >

            {data.map((item, index) => (

              <Box
                key={index}
                sx={{
    minWidth: {
      xs: "50%",
      sm: "30%",
      md: "45%",
      lg: "23%"
    },
                  height: { xs: 220, md: 280 },
                  background: "#fff",
                  borderRadius: "22px",
                  p: 1.5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  scrollSnapAlign: "start"
                }}
              >

                {/* IMAGE */}

                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 140, md: 190 },
                    borderRadius: "16px",
                    overflow: "hidden"
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </Box>

                {/* TITLE */}

                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    mt: 1
                  }}
                >
                  {item.title}
                </Typography>

              </Box>

            ))}

          </Box>

          {/* CONTROLS */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 1
            }}
          >

            <IconButton onClick={() => scroll("left")}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton onClick={() => scroll("right")}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* PROGRESS BAR */}

            <Box
              sx={{
                flex: 1,
                height: 4,
                background: "#d9d9d9",
                borderRadius: 5,
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: `${progress}%`,
                  background: "#F6B43F",
                  transition: "width 0.3s ease"
                }}
              />
            </Box>

          </Box>

        </Box>

      </Box>

    </Box>
  );
}
function PartnerForm() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        textAlign: "center",
        mt: 8,
        px: 3,
        bgcolor: "white",
      }}
    >
      <Typography variant="h5" fontWeight="bold" fontFamily="Fraunces, serif" gutterBottom>
        Interested in partnering?
      </Typography>

      <Typography
  variant="body2"
  color="text.secondary"
  sx={{ fontFamily: "Roboto Flex, sans-serif", mb: 4 }}
>
        Fill out the form below to collaborate with us!
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
      >
        <TextField
  variant="standard"
  label="Name"
  fullWidth
  sx={{
    "& .MuiInputBase-input": {
      fontFamily: "Roboto Flex, sans-serif",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Roboto Flex, sans-serif",
    },
  }}
/>

<TextField
  variant="standard"
  label="Email"
  fullWidth
  sx={{
    "& .MuiInputBase-input": {
      fontFamily: "Roboto Flex, sans-serif",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Roboto Flex, sans-serif",
    },
  }}
/>

<TextField
  variant="standard"
  label="Phone Number"
  fullWidth
  sx={{
    "& .MuiInputBase-input": {
      fontFamily: "Roboto Flex, sans-serif",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Roboto Flex, sans-serif",
    },
  }}
/>

<TextField
  variant="standard"
  label="City"
  fullWidth
  sx={{
    "& .MuiInputBase-input": {
      fontFamily: "Roboto Flex, sans-serif",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Roboto Flex, sans-serif",
    },
  }}
/>

<TextField
  variant="standard"
  label="Message"
  multiline
  rows={3}
  fullWidth
  sx={{
    "& .MuiInputBase-input": {
      fontFamily: "Roboto Flex, sans-serif",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "Roboto Flex, sans-serif",
    },
  }}
/>

        <Button
          variant="contained"
          sx={{
            mt: 2,
           alignSelf: "flex-start",
            px: 5,
            borderRadius: "20px",
            fontFamily: "Roboto Flex, sans-serif",

            backgroundColor: "#f4a62a",
            "&:hover": { backgroundColor: "#e6951f" }
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
function MembersSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        background: "#fff"
      }}
    >
      <Container maxWidth="lg">

        {/* Heading */}

       <Typography
  align="center"
  sx={{
    fontFamily: "'Roboto Flex', sans-serif",
    fontSize: { xs: 28, md: 42 },
    fontWeight: 600,
    mb: 6,
    color: "black",
  }}
>
  We Are Members Of
</Typography>

        {/* Images */}

        <Grid
          container
          spacing={{ xs: 3, md: 10 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image1}
              alt="Member 1"
              sx={{
                width: "100%",
                maxHeight: 220,
                objectFit: "contain"
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={image2}
              alt="Member 2"
              sx={{
                width: "100%",
                maxHeight: 220,
                objectFit: "contain"
              }}
            />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
/* ================= MAIN PAGE ================= */

export default function PartnershipPage() {
  return (
    <Box sx={{ bgcolor: "white"}}>
      {/* HERO */}

      <Box
        sx={{
          position: "relative",
          height: { xs: "70vh", md: "85vh" },
          backgroundImage: `url(${BannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
          }}
        />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 600,
              maxWidth: "900px",
              fontSize: { xs: "1.8rem", md: "2.6rem" },
              lineHeight: 1.3,
              fontFamily: "Fraunces, serif",
            }}
          >
            Interested in partnering on an epic journey that drives change and
            visibility?
          </Typography>
        </Container>
      </Box>

      {/* BRAND SECTION */}

      <Box sx={{ bgcolor: "#FBF9F9", py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  color: "#e49a2f",
                  fontWeight: 500,
                  fontSize: { xs: "1.1rem", md: "1.2rem" },
                  fontFamily: "Fraunces, serif",
                }}
              >
                Brand Activation
              </Typography>
            </Grid>

            <Grid item xs={12} md={9}>
             <Typography
  sx={{
    color: "#555",
    fontSize: { xs: "0.9rem", md: "0.95rem" },
    lineHeight: 1.8,
    maxWidth: "900px",
    fontFamily: "'Roboto Flex', sans-serif",
  }}
>
  At Embarq, we craft unforgettable road trip experiences across stunning landscapes—and now, we’re inviting brands to join us on the journey. Partner with us to create immersive, on-ground campaigns that connect with your audience most authentically: through adventure.
  <br />
  Whether you’re looking to engage customers, launch a new product, or build brand affinity, our curated experiences offer a unique platform to drive storytelling, visibility, and emotional connection.
  <br />
  Let’s co-create high-impact experiences that go beyond traditional marketing, where your brand becomes part of the road, the community, and the memories. Ready to overtake the road with us? Let’s talk
</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* EXPEDITION SCROLL */}

      <PinnedExpedition />
      <MilestoneReach />
      <ImageContentSections />
      <Box
  sx={{
    position: "relative",
    height: { xs: "50vh", md: "75vh" },
    backgroundImage: `url(${Partners1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
  }}
>
  {/* Gradient overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
    }}
  />

  <Container sx={{ position: "relative", zIndex: 2 }}>
    <Typography
      variant="h2"
      sx={{
        color: "#fff",
        fontWeight: 700,
        maxWidth: "900px",
        fontSize: { xs: "2rem", md: "3rem" },
        lineHeight: 1.3,
        fontFamily: "Fraunces, serif",
        mb: 3,
      }}
    >
      Partner with us!
    </Typography>

    <Typography
      sx={{
        color: "#fff",
        fontSize: { xs: "1rem", md: "1.25rem" },
        lineHeight: 1.8,
        maxWidth: { xs: "100%", md: "700px" },
        fontFamily: "'Roboto Flex', sans-serif",
      }}
    >
      We’re gearing up for an exciting new adventure, and&nbsp;you&nbsp;can be a part of it! 
      Join us as a brand partner on the next Bold Route expedition, offering&nbsp;
      <strong>unmatched visibility</strong>,&nbsp;
      <strong>real-world engagement</strong>, and&nbsp;
      <strong>purpose-driven storytelling</strong> that resonates with audiences and drives meaningful impact.
    </Typography>
  </Container>
</Box>


<PartnerForm />
<ExpeditionsCardScroll />
<MembersSection />
    </Box>
  );
}