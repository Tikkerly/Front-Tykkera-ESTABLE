"use client";
import {
  CarrouselQuestions,
  CarrouselServices,
  Description,
  Navbar,
} from "@/components";

const Home = () => {
  return (
    <div className="relative mx-auto flex flex-col overflow-hidden h-full justify-around items-center">
      <Navbar />
      <CarrouselServices />
      <Description />
      <CarrouselQuestions />
    </div>
  );
};

export default Home;
