import React from "react";
import { SubmitButton } from "..";
import styles from "./style.module.css";



const Description = () => {
  return (
    <>


<div className={` mb-40 p-40 bg-white opacity-90 w-screen h-full rounded-lg shadow-md flex flex-col items-center justify-center ${styles["bg-image"]}`}>
      
      <div className="w-screen h-full ">
      <div className="w-auto h-full p-20 bg-white bg-opacity-80 rounded-lg "> 

      <div className="content ">
        <h1 className="title mt-20 text-7xl font-bold leading-none text-Az3 bg-gradient-to-r from-Az1 to-Az3 bg-clip-text text-transparent">Tykkera</h1>
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item bg-blue-500"></div>
          <div className="aurora__item bg-blue-400"></div>
          <div className="aurora__item bg-gray-800"></div>
        </div>
        <p className="subtitle text-2xl text-Az3">Simplificando lo complejo a un ticket</p>
      </div>
      <h2 className="leading-loose bg-az1 w-1/2 font-regular text-2xl text-gray flex avant-garde-regular   description">
        Facilitamos la gestión de tickets de mesa de ayuda para empresas de reparación y 
        mantenimiento de equipos tecnológicos.
      </h2>
      <SubmitButton text={"Empezar"} className="button"/>
      </div>
      </div>
    </div>
   
      </>
  );
}

export default Description; 