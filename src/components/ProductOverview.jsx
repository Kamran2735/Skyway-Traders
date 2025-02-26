import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Grid, LinearProgress } from "@mui/material";

const ProductOverview = ({ overview }) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ padding: 4, marginX: "auto", maxWidth: 1200, backgroundColor: "#f8f9fa", borderRadius: 2 }}>
      {/* Tabs Section */}
      <Tabs value={tabValue} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary">
        <Tab label="Description" />
        <Tab label="Product Reviews" />
        <Tab label="Additional Info" />
      </Tabs>

      {/* Content Section */}
      {tabValue === 0 && (
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" fontWeight="bold">{overview.title}</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>{overview.extraInfo}</Typography>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={5}>
              <img src={overview.image} alt="Product" style={{ width: "100%", borderRadius: 8 }} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>{overview.description}</Typography>
              <Box>
                {overview.features.map((item, index) => (
                  <Box key={index} sx={{ marginBottom: 1 }}>
                    <Typography variant="body2" fontWeight="bold">
                      {item.label} {item.value}%
                    </Typography>
                    <LinearProgress variant="determinate" value={item.value} sx={{ height: 6, borderRadius: 2 }} />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ marginTop: 3 }}>{overview.additionalText}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProductOverview;
