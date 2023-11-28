"use client";
import { CreateTechnician } from "@/components";
import styles from './styles.module.css'

const TechnicianRegister = () => {
  return(
    <div className={styles.card}>
        <CreateTechnician />
    </div>
 
  ) 
};

export default TechnicianRegister;
