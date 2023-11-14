'use client';
import { TextField, TextareaAutosize } from "@mui/material";
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    descripcion: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar los datos del formulario
  };

  return (
    <div className="text-white flex items-center justify-center h-screen bg-white w-screen bg-opacity-40">
      <form onSubmit={handleSubmit} className="mt-40 flex flex-col text-white  gap-4 items-center w-80 h-full bg-opacity-40 rounded-lg shadow-md p-8">
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          className="mb-4 w-80 bg-black  opacity-80 text-white"
        />

        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="mb-4 w-80 bg-black opacity-80 text-white"
        />

        <TextareaAutosize
          aria-label="Descripción"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rowsMin={3}
          className="p-5 mb-4 w-80 bg-black opacity-80 border border-black text-white rounded focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}