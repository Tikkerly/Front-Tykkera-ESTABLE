import React from "react";
import Image from "next/image";
import load from "../public/load.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl font-bold avant-garde-bold text-gray">
        Cargando
      </div>
      <Image src={load} width={80} height={80} alt="Loading" />
    </div>
  );
};

export default Loading;
