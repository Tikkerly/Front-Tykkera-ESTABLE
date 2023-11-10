"use client";
import React, { useState } from "react";
import "./styles.module.css";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image";

const features = [

  {
    title: " Implementación de la Plataforma:",
    description: " Ayudar a las empresas a implementar la plataforma de gestión de tickets de manera orientada, asegurando una transición suave y efectiva.",
    backgroundImage: `/Implementacion.jpg`,
  },

  {
    title: "Capacitación y Soporte:",
    description: "Proporcionar capacitación a los equipos de las empresas para que puedan aprovechar al máximo la plataforma y ofrecer soporte técnico continuo para resolver dudas y problemas.",
    backgroundImage: `/Capacitacion.jpg`,
  },
  {
    title: " Configuración de Procesos:",
    description: "Ayudar a las empresas a definir y configurar procesos eficientes de gestión de tickets que se adapten a sus necesidades específicas.",
    backgroundImage: `/Configuracion.jpg`,
  },
  {
    title: " Automatización de Tareas:",
    description: "Implementar la automatización de tareas repetitivas dentro de la plataforma para aumentar la eficiencia operativa.",
    backgroundImage: `/Automatizacion.jpg`,
  },
  {
    title: "Informes y Análisis:",
    description: " Ofrecer herramientas de generación de informes y análisis para que las empresas puedan medir el rendimiento de su operación y tomar decisiones basadas en datos.",
    backgroundImage: `/Informes.jpg`,
  },
  {
    title: "Integración con Otras Herramientas:",
    description: "Facilitar la integración de la plataforma con otras herramientas utilizadas por las empresas.",
    backgroundImage: `/Integracion.jpg`,
  },
  {
    title: "Atención al Cliente Mejorada:",
    description: "Ayudar a las empresas a mejorar su atención al cliente a través de la gestión eficiente de tickets, lo que conduce a una mayor satisfacción del cliente y lealtad.",
    backgroundImage: `/Atencion.jpg`,
  },
  {
    title: " Seguridad y Cumplimiento:",
    description: "Garantizar la seguridad de los datos y el cumplimiento de las regulaciones relevantes en la gestión de tickets.",
    backgroundImage: `/Seguridad.jpg`,
  },
];

const animation = { duration: 50000, easing: (t) => t }

const CarrouselServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    created(slider) {
      let timeout
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  })

  return (
    <>
      <div className="navigation-wrapper flex flex-col mt-4 w-6/12 h-1/2 mx-auto">
        <div ref={sliderRef} className="keen-slider mt-4 align-center ">
          {features.map((feature, index) => (
            <div key={index} className="keen-slider__slide relative">
              <h2 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-3xl bg-white bg-opacity-75 text-black p-2 rounded-lg">{feature.title}</h2>
              <p className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-3/4 text-lg bg-white bg-opacity-75 text-black text-center p-2 w-auto h-auto rounded-lg mt-4">{feature.description}</p>
              <Image className="bg-cover bg-center" src={feature.backgroundImage} alt="Slide 1" width={1250} height={500} />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
export default CarrouselServices