import React from "react";
import Header from "../components/Header";
import SingleProductMain from "../components/SingleProductMain";
import ProductOverview from "../components/ProductOverview";
import Footer from "../components/Footer";

import img1 from "../assets/Products/img_01.png";
import img2 from "../assets/Products/img_02.png";
import img3 from "../assets/Products/img_03.png";

const product = {
  id: 1,
  title: "Amazon Cloud Security Camera",
  discountedPrice: 58.0,
  originalPrice: 68.0,
  rating: 3.5,
  reviews: 126,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [img1, img2, img3],
  barcode: "565461",
  sku: "4420",
  vendor: "Belo",
  type: "Auto Parts",
  overview: {
    features: [
      { label: "Integrative Control", value: 58 },
      { label: "Design Device", value: 77 },
      { label: "Service Control", value: 58 },
      { label: "Metar Surusn", value: 69 },
    ],
    extraInfo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
};

const Single_Product = () => {
  return (
    <>
      <Header />
      {/* Pass only relevant data to each component */}
      <SingleProductMain product={product} />
      <ProductOverview overview={product.overview} />
      <Footer />
    </>
  );
};

export default Single_Product;
