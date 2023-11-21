"use client";
import { CreateServiceAgent } from "@/components";

const ServiceAgentRegister = () => {
  return (
  
    <div className='h-screen w-screen p-8 ml-8'>
          <div className="avant-garde-bold font-bold text-3xl  text-black">
            <h2 className="text-xl ml-16">Agregar Agente de Servicio</h2>
          </div>
          
          <CreateServiceAgent />
        </div>
  );
};

export default ServiceAgentRegister;
