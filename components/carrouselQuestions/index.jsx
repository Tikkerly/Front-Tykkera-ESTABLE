"use client";
import { Accordion, AccordionBody, AccordionHeader, AccordionList } from "@tremor/react";


export default () => (
  
  <AccordionList className="max-w-3x1 mx-100 mx-100 bg-gradient-to-b from-Az1 via-grey text-white">
    <h2 className="w-full h-20 flex items-center justify-center text-white text-3xl font-bold avant-garde-bold">Preguntas frecuentes:</h2>
    <Accordion>
      <AccordionHeader className="font-normal avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-grey text-white" >¿Qué es una mesa de ayuda y por qué mi empresa necesita una?</AccordionHeader>
      <AccordionBody className="font-bold avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-Az4 text-white">
        Una mesa de ayuda es un sistema que ayuda a las empresas a gestionar y resolver las solicitudes de servicio de manera eficiente. Es esencial para mejorar la satisfacción del cliente y mantener un registro de problemas y soluciones.
      </AccordionBody>
    </Accordion>
    <Accordion>
      <AccordionHeader className="font-normal avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-grey text-white">¿Cómo puedo registrarme en la plataforma de gestión de tickets?</AccordionHeader>
      <AccordionBody className="font-bold avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-Az4 text-white">
        El proceso de registro es simple. Visita nuestra página de inicio, haz clic en "Registrarse" y sigue las instrucciones para crear una cuenta.
      </AccordionBody>
    </Accordion>
    <Accordion>
      <AccordionHeader className="font-normal avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-grey text-white">¿Qué beneficios obtendré al utilizar su plataforma?</AccordionHeader>
      <AccordionBody className="font-bold avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-Az4 text-white">
        Al usar nuestra plataforma, obtendrás una gestión más eficiente de las solicitudes de servicio, informes detallados sobre el rendimiento y la capacidad de mejorar la satisfacción del cliente.
      </AccordionBody>
    </Accordion>
    <Accordion>
        <AccordionHeader className="font-normal avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-grey text-white">¿Cómo puedo crear y seguir un ticket de servicio?</AccordionHeader>
      <AccordionBody className="font-bold avant-garde-regular bg-gradient-to-b from-Az4 via-Az4 to-Az4 text-white">
        Después de iniciar sesión, simplemente haz clic en "Crear Ticket" y completa la información requerida. Puedes seguir el estado de tus tickets en tu panel de control.
      </AccordionBody>
    </Accordion>
  </AccordionList>
);