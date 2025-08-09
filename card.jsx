import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const products = [
  {
    name: "Gaming cup",
    text: "Xattica Gaming Cup Chapter 1 — Ready. Set. Play.",
    link: "https://forms.gle/nDJLx6kNXUn2CW3W8",
    image: "/IMG-20250803-WA0075.jpg",
    bgColor: "rgba(0, 120, 255, 0.3)",
    buttonColor: "#007BFF",
  },
  {
    name: "Ideaverse",
    text: "IEDC MBITS & IDEAGORA Presents IDEAVERSE 2025",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSe8OPh80Zc_5rkXsytfc1lakK085lHJvEifzFXFHeHysF05_g/viewform?usp=header",
    image: "/IMG-20250804-WA0002.jpg",
    bgColor: "rgba(255, 0, 255, 0.3)",
    buttonColor: "#D600FF",
  },
  {
    name: "vista voyage 2.0",
    text: "Prepare to unlock the mysteries and delve into the depths of knowledge",
    link: "https://bit.ly/vista_voyage_2",
    image: "/IMG-20250804-WA0031.jpg",
    bgColor: "rgba(255, 100, 0, 0.3)",
    buttonColor: "#FF4B00",
  },
  {
    name: "Founder forge",
    text: "Have a startup dream but don’t know where to begin?",
    link: "https://bit.ly/foundersforgetalk",
    image: "/IMG-20250807-WA0009.jpg",
    bgColor: "rgba(0, 255, 150, 0.3)",
    buttonColor: "#00D68F",
  },
  {
    name: "talk session",
    text: "TALK SESSION: CRACK YOUR COLLEGE WITH AI TOOLS",
    link: "https://forms.gle/deCbooArCy7fvmcY6",
    image: "/IMG-20250807-WA0010.jpg",
    bgColor: "rgba(0, 255, 150, 0.3)",
    buttonColor: "#00D68F",
  },
  {
    name: "HackClub ASIET",
    text: "HackClub ASIET memberships are now officially OPEN TO ALL.",
    link: "https://tinyurl.com/joinhackclubasiet",
    image: "/IMG-20250808-WA0000 (1).jpg",
    bgColor: "rgba(0, 255, 150, 0.3)",
    buttonColor: "#00D68F",
  },
];

export default function ProductGrid() {
  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {products.map(({ name, image, bgColor, buttonColor, text, link }, i) => (
          <Grid
            key={i}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: 3,
                boxShadow: "0 4px 30px rgba(0,0,0,0.7)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
                p: 3,
                position: "relative",
                color: "white",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.9)",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 500,
                  mb: 2,
                  borderRadius: 2,
                  position: "relative",
                  backgroundColor: bgColor,
                  filter: `drop-shadow(0 0 8px ${buttonColor})`,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                }}
              >
                <img
                  src={image}
                  alt={name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: "8px",
                    filter: `drop-shadow(0 0 5px ${buttonColor})`,
                  }}
                />
              </Box>

              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                {name.toUpperCase()}
              </Typography>
              <Typography
                variant="body2"
                color="gray"
                textAlign="center"
                mb={3}
                sx={{ fontSize: "0.85rem" }}
              >
                {text}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: buttonColor,
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: buttonColor,
                    filter: "brightness(1.2)",
                  },
                }}
              >
                REGISTER
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}