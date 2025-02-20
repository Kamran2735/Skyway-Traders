import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", md: "500px" }, // ✅ Adjust height for responsiveness
        position: "relative",
      }}
    >
      {/* Google Maps Iframe */}
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d569.8288454600481!2d67.09127162146615!3d24.925670299968907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f356d8b1639%3A0x1c470ebd7e8655d1!2sPlot%20A%2027%2C%20Block%203%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1740010543551!5m2!1sen!2s" // ✅ Replace with your address
      />

      {/* Optional Dark Overlay for Styling Consistency */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // ✅ Subtle dark overlay
        }}
      />
    </Box>
  );
};

export default Map;
