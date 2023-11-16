import React from "react";
import { SubmitButton } from "..";



const Description = () => {
  return (
    <>


    <div className=" bg-gray-100 mb-40 p-40 w-screen h-full rounded-lg shadow-md flex flex-col items-center justify-center bg-image ">
      <div className="content">
        <h1 className="title text-7xl font-bold leading-none text-Az3 bg-gradient-to-r from-Az1 to-Az3 bg-clip-text text-transparent">Tykkera</h1>
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item bg-blue-500"></div>
          <div className="aurora__item bg-blue-400"></div>
          <div className="aurora__item bg-gray-800"></div>
        </div>
        <p className="subtitle text-2xl text-Az3">Simplificando lo complejo a un ticket</p>
      </div>
      <h2 className="leading-loose bg-az1 w-1/2 font-regular text-2xl text-gray flex avant-garde-regular ml-40 mr-40 description">
        Facilitamos la gestión de tickets de mesa de ayuda para empresas de reparación y 
        mantenimiento de equipos tecnológicos. Nos especializamos en simplificar el registro, ordenamiento y 
        seguimiento de tickets, ofreciendo una plataforma intuitiva y eficiente que ayuda a pequeñas y medianas empresas a optimizar su operación.
      </h2>
      <SubmitButton text={"Empezar"} className="button"/>
    </div>
   
      </>
  );
}

export default Description;