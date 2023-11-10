"use client";
import { CarrouselQuestions, CarrouselServices, Description } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className="relative mx-auto flex flex-col overflow-hidden h-full justify-around items-center">
      <CarrouselServices/>
      <Description/>
      <CarrouselQuestions />
    </div>
  );
};

export default Home;