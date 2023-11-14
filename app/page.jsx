"use client";
import {
  CarrouselQuestions,
  CarrouselServices,
  Description,
  RegistrationForm,
} from "@/components";

const Home = () => {
  return (
    <div className="relative mx-auto flex flex-col overflow-hidden h-full justify-around items-center">
      <CarrouselServices />
      <Description />
      <CarrouselQuestions />
      <RegistrationForm/>
    </div>
  );
};

export default Home;
