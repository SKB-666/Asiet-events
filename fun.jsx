import { useState, useEffect } from "react";
import { Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function Home() {
  const images = [
    "https://www.eduska.com/assets/user_photo/c1d3aa42537b65747277aaae7c6cf468.jpg",
    "https://content.jdmagicbox.com/comp/ernakulam/g8/0484px484.x484.001054127890.d1g8/catalogue/adi-shankara-institute-of-engineering-and-technology-kalady-ernakulam-computer-engineering-colleges-hdg5fzbmv3.jpg",
    "https://www.adishankara.ac.in/images/placement/image3.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: `${images.length * 100}%`,
          transform: `translateX(-${index * (100 / images.length)}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            style={{
              width: `${100 / images.length}%`,
              height: "100%",
              objectFit: "cover",
              backgroundColor: "transparent",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            color: "white",
            letterSpacing: "1px",
            marginTop: 75,
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            backgroundColor: "transparent",
          }}
        >
          Upcoming Events
        </Typography>
      </div>

      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 20,
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 3,
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          color: "white",
          zIndex: 3,
          backgroundColor: "rgba(0,0,0,0.3)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 3,
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: i === index ? "white" : "rgba(255,255,255,0.4)",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;