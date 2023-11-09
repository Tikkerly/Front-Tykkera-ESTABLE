"use client";
import { CarrouselQuestions, CarrouselServices } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <CarrouselServices/>
      <CarrouselQuestions/>
    </div>
  );
};

export default Home;