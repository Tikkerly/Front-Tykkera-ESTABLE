'use client';
import { TextField, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import validate from "./validate";


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
  const [errors,setErrors]=useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors(validate({
      ...formData,
      [name]: value,
    }));
  
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
    <div className="text-gray-900 flex items-center justify-center h-50 w-50 bg-opacity-50 font-bold avant-garde-bold w-100">
        {isSubmitted  ? (
          <p className="mt-3 text-gray-100 avant-garde-regular font-regular bg-gray-900 bg-opacity-50  p-2 rounded">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
        ) : ( 
      <form
        onSubmit={handleSubmit}
        className="gap-4 mt-40 mb-40 flex mx-4 h-full w-full bg-gray-900 flex-col bg-az4 text-gray-900 my-2 items-center bg-opacity-50 rounded-lg shadow-2xl p-8"
      >
        <div className="flex flex-col justify-center">
        <label htmlFor="email" className="mb-2 text-gray-100">Email:</label>
        <input
          type="email"
          name="email"
          id= "email"
          value={formData.email}
          onChange={handleChange}
          className=" w-80 opacity-80 bg-gray-200 text-gray-900 p-2 rounded"
        /> 
        <div className=" h-2">
          {
            errors.email && 
            <span className="text-red-500 font-regular avant-garde-regular text-sm">{
              errors.email
              } </span> 
          }
        </div>          
        </div>


          <div className="flex flex-col justify-center">
        <label htmlFor="nombre" className="mb-2 mt-4  text-gray-100">Nombre:</label>
        <input
          id= "nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-80 opacity-80 bg-gray-200 text-gray-900 p-2 rounded"
        /> 
        <div className="h-2">
        {
          errors.nombre && 
          <span className="text-red-500 font-regular avant-garde-regular text-sm">{
            errors.nombre
            } </span> 
        }          
        </div>            
          </div>


        <div className="flex flex-col justify-center">
        <label htmlFor="descripcion" className="mb-2 mt-4  text-gray-100">Descripción:</label>
        <textarea
          id= "descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows={3}
          className="p-2 w-80 opacity-80 bg-gray-200 text-gray-900 rounded focus:outline-none focus:shadow-outline"
        />
        <div className="h-2 ">
        {
          errors.descripcion && 
          <span className="text-red-500 font-regular avant-garde-regular text-sm">{
            errors.descripcion
            } </span> 
        }          
        </div>          
        </div>



        <button
          type="submit"
          className="avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 rounded-full transition duration-300 hover:shadow-md"
        >
          Enviar
        </button>
      </form>
        )}
    </div>
  );
};

