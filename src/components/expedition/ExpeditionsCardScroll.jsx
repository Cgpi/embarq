import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  LinearProgress,
  SvgIcon
} from "@mui/material";



/* IMAGES */

import Georgia from "../../assets/images/georgia.webp";
import k2k from "../../assets/images/k2k.webp";
import scotland from "../../assets/images/scotland.webp";
import romania from "../../assets/images/romania.webp";
import korea from "../../assets/images/skorea.webp";
import finland from "../../assets/images/finland.webp";

/* DATA */

const data = [
  { title: "K2K Expedition", image: k2k, slug: "k2k2026" },
  { title: "Scotland", image: scotland, slug: "scotland" },
  { title: "Romania", image: romania, slug: "romania" },
  { title: "Georgia", image: Georgia, slug: "georgia" },
  { title: "South Korea", image: korea, slug: "southkorea" },
  { title: "Finland", image: finland, slug: "finland" }
];
function TriangleLeft(props) {
  return (
    <SvgIcon {...props}>
      <polygon points="16,4 6,12 16,20" />
    </SvgIcon>
  );
}

function TriangleRight(props) {
  return (
    <SvgIcon {...props}>
      <polygon points="8,4 18,12 8,20" />
    </SvgIcon>
  );
}
export default function ExpeditionsCardScroll() {

  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  /* HANDLE SCROLL PROGRESS */

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const percentage = maxScroll ? (el.scrollLeft / maxScroll) * 100 : 0;

    setProgress(percentage);
  };

  /* BUTTON SCROLL */

  const scroll = (dir) => {

    const el = scrollRef.current;
    if (!el) return;

    const amount = 260;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth"
    });
  };

  /* AUTO SCROLL */

  useEffect(() => {

    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {

        el.scrollTo({
          left: 0,
          behavior: "smooth"
        });

      } else {

        el.scrollBy({
          left: 260,
          behavior: "smooth"
        });

      }

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (

    <Box
      sx={{
         background: "#FCF5E4",
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 10 }
      }}
    >

      <Box
       sx={{
         display: "flex",
         gap: { xs: 4, md: 10 },
         alignItems: { xs: "flex-start",xm:"center", md: "center" }, // ✅ fix
         flexDirection: { xs: "column", md: "row" },
       }}
     >

        {/* LEFT TITLE */}

        <Box sx={{ minWidth: { md: 340 } }}>

          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontSize: { xs: 34, md: 56 },
              color: "#F6B43F",
              lineHeight: 1.2,
              fontWeight: 600,
            }}
          >
            Upcoming <br /> Expeditions
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

            {data.map((item) => (

              <Card
                key={item.slug}
                component={Link}
                to={"/expedition/" + item.slug}
                sx={{
  minWidth: {
  xs: "60%",   // mobile
  sm: "30%",   // tablet
  md: "50%",   // small desktop
  lg: "25%",   // desktop
},

maxWidth: {
  xs: 100,
  sm: 260,
  md: 300,
  lg: 300,
},

height: {
  xs: 220,
  sm: 250,
  md: 280,
  lg: 280
},
                  borderRadius: 6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  textDecoration: "none",
                  color: "inherit",
                  scrollSnapAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 1.7
                }}
              >

                {/* IMAGE */}
  <Box
                  sx={{
                    width: "100%",
                    height: "80%", 
                     borderRadius: 5,
                    overflow: "hidden",
                  }}
                >
                <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                </Box>

                {/* TITLE */}
                
                                <Typography
                                  sx={{
                                    fontSize: 14,
                                    fontWeight: 600,
                                    mt: 0,
                                  }}
                                >
                                  {item.title}
                                </Typography>
                              

              </Card>

            ))}

          </Box>

          {/* CONTROLS */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 1
            }}
          >

           <IconButton
    onClick={() => scroll("left")}
    sx={{ p: 0, minWidth: "auto" }}
  >
    <TriangleLeft sx={{ fontSize: 28, color: "#555" }} />
  </IconButton>

  <IconButton
    onClick={() => scroll("right")}
    sx={{ p: 0, minWidth: "auto" }}
  >
    <TriangleRight sx={{ fontSize: 28, color: "#555" }} />
  </IconButton>

            {/* PROGRESS BAR */}

            <Box sx={{ flex: 1 }}>

              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 4,
                  borderRadius: 5,
                  background: "#d9d9d9",
                  "& .MuiLinearProgress-bar": {
                    background: "#F6B43F"
                  }
                }}
              />

            </Box>

          </Box>

        </Box>

      </Box>

    </Box>

  );
}