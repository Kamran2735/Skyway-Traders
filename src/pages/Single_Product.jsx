import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SingleProductMain from "../components/SingleProductMain";
import ProductOverview from "../components/ProductOverview";
import Footer from "../components/Footer";

import img1 from "../assets/Products/img_01.png";
import img2 from "../assets/Products/img_02.png";
import img3 from "../assets/Products/img_03.png";
import imgOverview from "../assets/Products/img_01.png";

const products = [
  {
    id: 1,
    name: "amazon-cloud-cam-security-camera",
    title: "Amazon Cloud Cam Security Camera",
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
      image: imgOverview,
      features: [
        { label: "Integrative Control", value: 58 },
        { label: "Design Device", value: 77 },
        { label: "Service Control", value: 58 },
        { label: "Metar Surusn", value: 69 },
      ],
      extraInfo: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      additionalText: "Smooth and reliable operation with this device.",
    },
  },
  {
    id: 2,
    name: "lorem-ipsum-product",
    title: "Lorem Ipsum Product",
    discountedPrice: 120.0,
    originalPrice: 150.0,
    rating: 4.2,
    reviews: 80,
    description: "A great product for testing dynamic routing.",
    images: [img1, img2],
    barcode: "789123",
    sku: "5678",
    vendor: "TestVendor",
    type: "Electronics",
    overview: {
      image: imgOverview,
      features: [
        { label: "User Experience", value: 85 },
        { label: "Performance", value: 90 },
        { label: "Design", value: 75 },
        { label: "Reliability", value: 80 },
      ],
      extraInfo: "A product designed to showcase how dynamic routing works.",
      description: "High-quality product with excellent performance.",
      additionalText: "Experience smooth and reliable operation.",
    },
  },
  {
    id: 3,  // Fixed duplicate ID
    name: "imtiaz",
    title: "Imtiaz Product",
    discountedPrice: 0,
    originalPrice: 150.0,
    rating: 2.2,
    reviews: 100,
    description: "A very bad person.",
    images: [img2],
    barcode: "789123",
    sku: "5678",
    vendor: "TestVendor",
    type: "Electronics",
    overview: {
      image: imgOverview,
      features: [
        { label: "User Experience", value: 35 },
        { label: "Performance", value: 20 },
        { label: "Design", value: 5 },
        { label: "Reliability", value: 10 },
      ],
      extraInfo: "Product designed for testing dynamic routing.",
      description: "Good and bad features of a person.",
      additionalText: "Lorem ipsum text goes here.",
    },
  },
  {
    id: 4,
    name: "product-5",  // ✅ Changed from "Product 5" to "product-5"
    title: "Product 5",
    discountedPrice: 100.0,
    originalPrice: 150.0,
    rating: 4.2,
    reviews: 120,
    description: "An advanced tech product.",
    images: [img1, img2],
    barcode: "789123",
    sku: "5678",
    vendor: "TestVendor",
    type: "Electronics",
    overview: {
      image: imgOverview,
      features: [
        { label: "User Experience", value: 35 },
        { label: "Performance", value: 20 },
        { label: "Design", value: 5 },
        { label: "Reliability", value: 10 },
      ],
      extraInfo: "Product built for high performance.",
      description: "A new tech innovation.",
      additionalText: "Experience the best in technology.",
    },
  },
];


const Single_Product = () => {
  const { productName } = useParams(); // Get product name from the URL

  // Find the product that matches the productName in the URL
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <SingleProductMain product={product} />
      <ProductOverview overview={product.overview} />
      <Footer />
    </>
  );
};

export default Single_Product;
