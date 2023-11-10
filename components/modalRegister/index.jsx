import React from "react";
import { RegisterForm } from "..";

const ModalRegister = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10" id="wrapper" onClick={handleClose}>
      <div className="w-[800] flex flex-col">
        <div className="bg-243244 p-2 rounded">
          <RegisterForm/>
        </div>
        <button className="text-white text-xl" onClick={() => onClose()}>X</button>
      </div>
    </div>
  );
};

export default ModalRegister;