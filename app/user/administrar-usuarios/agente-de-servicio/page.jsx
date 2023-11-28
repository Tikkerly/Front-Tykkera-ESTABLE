"use client";
import { CreateServiceAgent } from "@/components";
import styles from './styles.module.css'

const ServiceAgentRegister = () => {
  return (

    <div className={styles.card}>
      <CreateServiceAgent />
    </div>
  );
};

export default ServiceAgentRegister;
