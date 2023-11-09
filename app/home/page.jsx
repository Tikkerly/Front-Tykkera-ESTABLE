"use client";
import React, { useState } from "react";

const services = [
  "Implementación de la Plataforma: Ayudar a las empresas a implementar la plataforma de gestión de tickets de manera orientada, asegurando una transición suave y efectiva.",
  "Capacitación y Soporte: Proporcionar capacitación a los equipos de las empresas para que puedan aprovechar al máximo la plataforma y ofrecer soporte técnico continuo para resolver dudas y problemas.",
  "Configuración de Procesos: Ayudar a las empresas a definir y configurar procesos eficientes de gestión de tickets que se adapten a sus necesidades específicas.",
  "Automatización de Tareas: Implementar la automatización de tareas repetitivas dentro de la plataforma para aumentar la eficiencia operativa.",
  "Informes y Análisis: Ofrecer herramientas de generación de informes y análisis para que las empresas puedan medir el rendimiento de su operación y tomar decisiones basadas en datos.",
  "Integración con Otras Herramientas: Facilitar la integración de la plataforma con otras herramientas utilizadas por las empresas.",
  "Atención al Cliente Mejorada: Ayudar a las empresas a mejorar su atención al cliente a través de la gestión eficiente de tickets, lo que conduce a una mayor satisfacción del cliente y lealtad.",
  "Seguridad y Cumplimiento: Garantizar la seguridad de los datos y el cumplimiento de las regulaciones relevantes en la gestión de tickets.",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full h-96 flex items-center justify-center text-white text-3xl font-semibold">
        Servicios ofrecidos para nuestras PYMES:
      </div>
      <div className="flex flex-row items-center justify-around">
        <div
          onClick={prevSlide}
          className=""
          style={{ cursor: "pointer" }}
        >
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
          {services[currentIndex]}
        </div>

        <div
          className=""
          onClick={nextSlide}
          style={{ cursor: "pointer" }}
        >
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

export default Home;
