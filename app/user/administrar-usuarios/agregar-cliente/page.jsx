"use client";
import { CreateFinalClient } from "@/components";

const ClientRegister = () => {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="mx-40 w-80 flex flex-col flex-wrap gap-8">
          <div className="avant-garde-bold font-bold text-3xl  text-white">
            <h2 className="text-xl">Agregar Cliente</h2>
          </div>
          <CreateFinalClient />
        </div>
      </div>
    </div>
  );
};

export default ClientRegister;
