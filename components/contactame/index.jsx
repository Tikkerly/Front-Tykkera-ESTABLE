'use client';
import { TextField, TextareaAutosize } from "@mui/material";
import { useState } from "react";
export default function  RegistrationForm() {
  const initialFormData = {
    email: '',
    nombre: '',
    descripcion: '',
    mensajeEmail: '',
    mensajeNombre: '',
    mensajeDescripcion: '',
    invalidEmail: false,
    ivalidNombre: false,
    invalidDescripcion: false,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   {
  //   this.onChage = this.onChange.bind(this);
  //   this.enviaralaDB = this.enviaralaDB.bind(this);
  // }
  // Este metodo se va ejectuar cada vez que el usario cambie un valor en el campo
  // onChange = e =>{
  //   const {email, value} = e.target;
  //   this.setState({
  //   [email]: value,
  //  });
     
    
  // }

  // enviaralaDB = e => {
  //   e.preventDefault(); 
  //   let valido = true;
  //   if()this.state.email ===  '')}
  //     this.setState({
  //       invalidEmail: true,
  //       mensajeEmail: 'El campo no puede estar vacio', 
  //       invalidEmail: false,

  //     })

  //     if(valido){
  //       // Cambiar por MongoDB
  //       console.log("Vamos a enviar los datos " + JSON.stringify(this.state));
  //     }
      
  //   }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if (!formData.email || !formData.nombre || !formData.descripcion) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    setFormData(initialFormData);
    setIsSubmitted(true);
  };

  return (
    <div className="text-black flex items-center justify-center h-50 w-50 bg-opacity-50 font-bold avant-garde-bold">
      <form
        onSubmit={handleSubmit}
        className="mt-40 mb-40 flex mx-4 h-full w-full bg-gray-900 flex-col bg-az4 text-black my-2 items-center bg-opacity-50 rounded-lg shadow-md p-8"
      >
        <label className="mb-2 text-white">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-4 w-80 opacity-80 bg-gray-200 text-black p-2 rounded"
        />

        <label className="mb-2 text-white">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="mb-4 w-80 opacity-80 bg-gray-200 text-black p-2 rounded"
        />

        <label className="mb-2 text-white">Descripción:</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          className="p-2 mb-4 w-80 opacity-80 bg-gray-200 text-black rounded focus:outline-none focus:shadow-outline"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>

        {isSubmitted && (
          <p className="mt-3 text-white">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
        )}
      </form>
    </div>
  );
};

