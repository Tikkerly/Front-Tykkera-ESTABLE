"use client";
import { CreateTechnician } from "@/components";

const TechnicianRegister = () => {
  return (
        <div>
          <div className="avant-garde-bold font-bold text-3xl  text-white">
            <h2 className="text-xl">Agregar Técnico</h2>
          </div>
          <CreateTechnician />
        </div>
  );
};

export default TechnicianRegister;
