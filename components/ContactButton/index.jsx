"use client";
import { useState } from "react";
import ModalClient from "../ModalCliente";

const ContactButton = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="text-center h-40 flex items-center bg-red">
      <div>
        <h2 className="text-4xl relative mb-4 text-gray-100 text-2xl font-regular avant-garde-regular">

          ¿Quieres saber más?
  
        </h2>
        <button
          className="avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 rounded-full transition duration-300 hover:shadow-md"
          onClick={() => setShowContactModal(true)}
        >
          Contáctanos aquí
        </button>
      </div>
      <ModalClient isVisible={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

export default ContactButton;
