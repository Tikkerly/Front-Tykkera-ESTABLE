"use client";
import "./styles.module.css";
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


const CarrouselServices = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full grid grid-cols-2">
              <div className={index % 2 === 0 ? "order-2" : ""}>
                <Image src={feature.backgroundImage} alt={feature.title} width={1200} height={600}  />
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-900">{feature.title}</h1>
                <p>{feature.description}</p> {/* Added a paragraph for description */}
                {/* You can add more content here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarrouselServices;

  
//     <>
//       <div className="navigation-wrapper w-full  mx-auto ">
//         <div ref={sliderRef} className="keen-slider h-screen align-center rounded-lg ">
//           {features.map((feature, index) => (
//             <div key={index} className="keen-slider__slide relative ">
//               <Image className="w-full h-full object-cover bg-cover bg-center " src={feature.backgroundImage}
//                alt="Slide 1" width={1200} height={600} />
//               <h2 className="absolute top-1/4 left-1/2 w-auto h-auto transform -translate-x-1/2 -translate-y-1/4  avant-garde-bold  bg-gray-300 bg-opacity-75 p-2 rounded-lg avant-garde-bold font-bold text-3xl  text-gray-600">{feature.title}</h2>
//               <p className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-3/4 font-regular avant-garde-regular  avant-garde-bold font-bold text-3xl  text-gray-600 bg-gray-300 bg-opacity-75  text-center w-auto h-auto mt-4">{feature.description}</p>
//             </div>
//