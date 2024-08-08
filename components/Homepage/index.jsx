"use client";
import React from "react";
import Banner from "./Banner";
import Benefits from "./Benefits";
import Features from "./Features";
import CreditCards from "./CreditCards";
import CompareCards from "./CompareCards";
import LoungeFinder from "./LoungeFinder";
import Review from "./Review";
import Footer from "../Footer";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Benefits />
      <Features />
      <CreditCards />
      <CompareCards />
      <LoungeFinder />
      <Review />
    </>
  );
};

export default Homepage;
