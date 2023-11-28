"use client";
import {
  CarrouselQuestions,
  CarrouselServices,
  Description,
  Navbar,
  RegistrationForm,
} from "@/components";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer/Footer";
import Providers from "@/redux/provider";

const Home = () => {
  return (
    <div className="relative mx-auto flex flex-col overflow-hidden h-full justify-around items-center bg-gray-150">
      <Description />
      <CarrouselServices />
      <ContactButton />
      <CarrouselQuestions />
      <Footer/>
    </div>
  );
};

export default Home;
