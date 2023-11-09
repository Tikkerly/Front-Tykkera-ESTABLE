'use client'
import React, { useState } from "react";

const Questions = ['¿Qué es una mesa de ayuda y por qué mi empresa necesita una?',
'¿Cómo puedo registrarme en la plataforma de gestión de tickets?',
'¿Qué beneficios obtendré al utilizar su plataforma?',
'¿Cómo puedo crear y seguir un ticket de servicio?'
];

const Answers = ['Una mesa de ayuda es un sistema que ayuda a las empresas a gestionar y resolver las solicitudes de servicio de manera eficiente. Es esencial para mejorar la satisfacción del cliente y mantener un registro de problemas y soluciones.',
'El proceso de registro es simple. Visita nuestra página de inicio, haz clic en "Registrarse" y sigue las instrucciones para crear una cuenta.',
'Al usar nuestra plataforma, obtendrás una gestión más eficiente de las solicitudes de servicio, informes detallados sobre el rendimiento y la capacidad de mejorar la satisfacción del cliente.',
'Después de iniciar sesión, simplemente haz clic en "Crear Ticket" y completa la información requerida. Puedes seguir el estado de tus tickets en tu panel de control.'
];

const CarrouselQuestions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Questions.length - 1 ? 0 : prevIndex + 1
      
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Questions.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div className="w-full h-20 flex items-center justify-center text-white text-3xl font-bold avant-garde-bold">
        Preguntas Frecuentes:
      </div>
      <div className="flex flex-row items-center justify-around font-normal avant-garde-regular">
        <div onClick={prevSlide} className="" style={{ cursor: "pointer" }}>
          <svg
            width="64px"
            height="64px"
            viewBox="-6 -6 32.00 32.00"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            transform="matrix(1, 0, 0, 1, 0, 0)"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            >
              <path
                transform="translate(-6, -6), scale(2)"
                fill="#00356f"
                d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                strokewidth="0"
              ></path>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>arrow_left [#334]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-385.000000, -6679.000000)"
                  fill="#1dbbee"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539"
                      id="arrow_left-[#334]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        <div className="w-full flex flex-col justify-center items-center text-white text-lg">
          <div className="text-center font-bold mb-2">{Questions[currentIndex]}</div>
          
          <div className="text-center">{Answers[currentIndex]}</div> 
        </div>

        <div className="" onClick={nextSlide} style={{ cursor: "pointer" }}>
          <svg
            width="64px"
            height="64px"
            viewBox="-6 -6 32.00 32.00"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            >
              <path
                transform="translate(-6, -6), scale(2)"
                fill="#00356f"
                d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                strokewidth="0"
              ></path>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>arrow_left [#334]</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-385.000000, -6679.000000)"
                  fill="#1dbbee"
                >
                  {" "}
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    {" "}
                    <path
                      d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539"
                      id="arrow_left-[#334]"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CarrouselQuestions;
