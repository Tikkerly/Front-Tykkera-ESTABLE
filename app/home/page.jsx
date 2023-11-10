"use client";
import { CarrouselQuestions, CarrouselServices, Description } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className="relative w-4/5 mx-auto flex flex-col overflow-hidden h-screen justify-around ">
      <Description/>
      <CarrouselServices/>
      <CarrouselQuestions/>
    </div>
  );
};

export default Home;