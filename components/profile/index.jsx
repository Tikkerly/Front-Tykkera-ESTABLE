"use client";
import React from "react";

const Profile = () => {
  const handleChange = (e) => {
    console.log("hola");
  };
  return (
    <div>
      <div className="bg-Be bg-opacity-90 p-8 text-gray-900 rounded-lg shadow-md w-full h-full max-w-screen-md mx-auto flex flex-col">
        <div className="flex items-start mb-8">
          <img
            className="h-32 w-32 rounded-full object-cover mr-4"
            src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png"
            alt="Profile Image"
          />
          <div>
            <h2 className="text-2xl mb-2 font-bold avant-garde-bold">
              CLIENTE
            </h2>
            <h2 className="text-xl mb-2 font-regular avant-garde-regular">
              Persona Natural
            </h2>
            <h2 className="text-xl mb-2 font-regular avant-garde-regular">
              Nit: 08234561-2
            </h2>
          </div>
        </div>
  
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-xl mb-1">
              Nombre:
            </label>
            <input
              className="font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-900 leading-tight bg-gray-200 border rounded-full focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value="Javier Alejo Escobar Lopez"
              placeholder="Nombre de usuario"
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl mb-1">
              Email:
            </label>
            <input
              className="font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-900 leading-tight bg-gray-200 border rounded-full focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value="alejoLopez@gmail.com"
              placeholder="Correo electrónico"
              onChange={handleChange}
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="number" className="block text-xl mb-1">
              Número de teléfono:
            </label>
            <input
              className="font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-900 leading-tight bg-gray-200 border rounded-full focus:outline-none focus:shadow-outline"
              id="number"
              type="text"
              value="312453000"
              placeholder="Número de teléfono"
              onChange={handleChange}
            />
          </div>
  
          <div className="flex items-center justify-center">
            <button
              className="font-bold avant-garde-bold w-full bg-Az3 text-gray py-3 px-6 rounded-full text-xl transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
              type="submit"
            >
              Guardar cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
