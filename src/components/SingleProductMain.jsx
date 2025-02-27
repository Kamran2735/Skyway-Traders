import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Grid, Rating, Dialog } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SingleProductMain = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  return (
    <Grid container spacing={3} sx={{ padding: 4, marginX: "auto", maxWidth: 1200 }}>
      {/* Product Image Section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ position: "relative", width: "100%", maxWidth: 500, height: 400, bgcolor: "#fdebed", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <img src={selectedImage} alt="Product" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
          <IconButton onClick={() => setOpen(true)} sx={{ position: "absolute", top: 10, left: 10, bgcolor: "white" }}>
          <ZoomInIcon sx={{ color: "#000188" }} />

          </IconButton>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: 1, justifyContent: "center" }}>
          {product.images.map((img, index) => (
            <Grid item key={index}>
              <img
                src={img}
                alt={`Thumbnail ${index}`}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  border: selectedImage === img ? "2px solid #000188" : "2px solid transparent",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedImage(img)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Product Details Section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "1.8rem", marginBottom: 1 , color: "#000188" }}>{product.title}</Typography>
        <Typography variant="h6" color="error" fontWeight="bold" sx={{ fontSize: "1.5rem", marginBottom: 1, color: "#000188"}}>
          ${product.discountedPrice} <Typography component="span" sx={{ textDecoration: "line-through", color: "#4C4CC4", fontSize: "1rem" }}>${product.originalPrice}</Typography>
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
  <Rating value={product.rating} readOnly size="medium" />
  <Typography sx={{ color: "#4C4CC4", marginLeft: 1 }}>
    ({product.reviews} Reviews)
  </Typography>
</Box>

        <Typography variant="body1" sx={{ marginTop: 1, fontSize: "1.1rem" }}>{product.description}</Typography>
        
        {/* Quantity and Cart Actions */}
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2, gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
  <Button sx={{ color: "#4C4CC4" }} onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</Button>
  <Typography sx={{ marginX: 2, fontSize: "1.1rem", color: "#000188" }}>{quantity}</Typography>
  <Button sx={{ color: "#4C4CC4" }} onClick={() => setQuantity(quantity + 1)}>+</Button>
</Box>

          <Button variant="contained"  sx={{ fontSize: "1rem", background: "linear-gradient(135deg, #000188, #6a11cb)" ,transition: "all 0.3s ease",
              "&:hover": { background: "linear-gradient(135deg,  #6a11cb,#000188)" },}}>Add to Cart</Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2, gap: 1 }}>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <Typography variant="body1" sx={{ fontSize: "1.1rem" ,color: "#4C4CC4"}}>Add to Wishlist</Typography>
        </Box>
        
        {/* Additional Details */}
        <Typography variant="body2" sx={{ marginTop: 1, fontSize: "1rem", color: "#404040" }}>Barcode: {product.barcode}</Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem", color: "#404040" }}>SKU: {product.sku}</Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem", color: "#404040" }}>Vendor: {product.vendor}</Typography>
        <Typography variant="body2" sx={{ fontSize: "1rem", color: "#404040" }}>Type: {product.type}</Typography>
      </Grid>

      {/* Full Screen Image Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg">
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 2 }}>
          <img src={selectedImage} alt="Product" style={{ width: "100%", height: "auto" }} />
        </Box>
      </Dialog>
    </Grid>
  );
};

export default SingleProductMain;
