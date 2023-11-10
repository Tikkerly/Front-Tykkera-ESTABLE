"use client";
import React, { useState } from "react";
import "./styles.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarrouselServices = () => {
  const features = [
    [
      {
        title: " Implementación de la Plataforma:",
        description: " Ayudar a las empresas a implementar la plataforma de gestión de tickets de manera orientada, asegurando una transición suave y efectiva.",
        backgroundImage: "url( Implementacion.jpg)",
      }
    ],
    [
      {
        title: "Capacitación y Soporte:",
        description: "Proporcionar capacitación a los equipos de las empresas para que puedan aprovechar al máximo la plataforma y ofrecer soporte técnico continuo para resolver dudas y problemas.",
        backgroundImage: "url( Capacitacion.jpg)",
      },
    ],
    [
      {
        title: " Configuración de Procesos:",
        description: "Ayudar a las empresas a definir y configurar procesos eficientes de gestión de tickets que se adapten a sus necesidades específicas.",
        backgroundImage: "url( Configuracion.jpg)",
      },
    ],
    [
      {
        title: " Automatización de Tareas:",
        description: "Implementar la automatización de tareas repetitivas dentro de la plataforma para aumentar la eficiencia operativa.",
        backgroundImage: "url( Automatizacion.jpg)",
      },
    ],
    [
      {
        title: "Informes y Análisis:",
        description: " Ofrecer herramientas de generación de informes y análisis para que las empresas puedan medir el rendimiento de su operación y tomar decisiones basadas en datos.",
        backgroundImage: "url( Informes.jpg)",
      },
    ],
    [
      {
        title: "Integración con Otras Herramientas:",
        description: "Facilitar la integración de la plataforma con otras herramientas utilizadas por las empresas.",
        backgroundImage: "url( Integracion.jpg)",
      },
    ],
    [
      {
        title: "Atención al Cliente Mejorada:",
        description: "Ayudar a las empresas a mejorar su atención al cliente a través de la gestión eficiente de tickets, lo que conduce a una mayor satisfacción del cliente y lealtad.",
        backgroundImage: "url( Atencion.jpg)",
      },
    ],
    [
      {
        title: " Seguridad y Cumplimiento:",
        description: "Garantizar la seguridad de los datos y el cumplimiento de las regulaciones relevantes en la gestión de tickets.",
        backgroundImage: "url( Seguridad.jpg)",
      },
    ],

  ];


  const [currentSlide, setCurrentSlide] = useState(0);

  const onChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-3/4 flex" style={{ height: "100%" }}>
      <Carousel
        className="w-full"
        style={{ width: "100%", height: "100%" }}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        onChange={onChange}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
      >
        {features.map((featureSet, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center bg-cover bg-center w-full h-full"
            style={{ backgroundImage: featureSet[0].backgroundImage }}
          >
            {featureSet.map((feature) => (
              <div key={feature.title} className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-4">{feature.title}</h2>
                <p className="text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarrouselServices;

