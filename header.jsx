import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";

function ArtisticHeader() {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: "10vh",
        minHeight: "50px",
        background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0.25))",
        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        zIndex: 1000,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/frosted-glass-texture.png')",
          backgroundSize: "cover",
          opacity: 0.2,
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <Toolbar sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="/image.png"
            alt="Logo"
            style={{
              height: 50,
              maxWidth: 120,
              width: "auto",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1.6rem",
              fontFamily: "'Pacifico', cursive",
              letterSpacing: "2px",
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            }}
          >
            ASIET EVENTS
          </Typography>
        </Box>

        <Box sx={{ display: "flex", height: "100%", alignItems: "center" }}>
          {["Contact", "About", "Login"].map((label) => (
            <Button
              key={label}
              sx={{
                height: "80%",
                color: "white",
                fontSize: "1rem",
                fontFamily: "'Brush Script MT', cursive",
                letterSpacing: "1px",
                textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
                borderRadius: 0,
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.25)",
                },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ArtisticHeader;