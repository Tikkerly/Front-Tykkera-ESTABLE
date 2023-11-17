import React from "react";
import { RegistrationForm } from "..";

const ModalClient = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 mt-20"
      id="wrapper"
      onClick={handleClose}
    >
      <div className=" flex flex-col bg-Az4 p-4 rounded">
        <button
          className=" font-bold avant-garde-bold text-lg text-gray-100 px-2 rounded bg-gray-600 self-start transition duration-300 hover:text-red-800 hover:shadow-md"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-243244 p-2 rounded">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default ModalClient;
