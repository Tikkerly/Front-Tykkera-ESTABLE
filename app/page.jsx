"use client";
import {
  CarrouselQuestions,
  CarrouselServices,
  Description,
  Navbar,
  RegistrationForm,
} from "@/components";
import ContactButton from "@/components/ContactButton";
import Providers from "@/redux/provider";
import styles from './styles.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Description />
      <CarrouselServices />
      <ContactButton />
      <CarrouselQuestions />
    </div>
  );
};

export default Home;
