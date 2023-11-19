"use client";
import { CreateServiceAgent } from "@/components";
import styles from "./styles.module.css";
import logo from "../../../../public/LOGOTIPO-TYKKERA-PNG.png";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const ServiceAgentRegister = () => {
  return (
    <div className="h-screen w-screen flex">
      <div className="h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="mx-40 w-80 flex flex-col flex-wrap gap-8">
          <div className="avant-garde-bold font-bold text-3xl  text-gray-600">
            <h2 className="text-xl">Agregar Agente de Servicio</h2>
          </div>
          <CreateServiceAgent />
        </div>
      </div>
    </div>
  );
};

export default ServiceAgentRegister;
