import React from "react";
import { RegisterForm } from "..";

const ModalRegister = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10" id="wrapper" onClick={handleClose}>
      <div className="w-[800] relative flex flex-col justify-center items-center">
        <div className="bg-243244 p-2 rounded">
        <button className="text-white text-xl w-8 h-8 absolute top-25 right-15 bg-Az4 bg-opacity-40 rounded-full  shadow-md font-bold avant-garde-bold hover:bg-red-400" onClick={() => onClose()}>X</button>
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;