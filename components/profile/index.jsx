"use client";
import React from "react";

const Profile = () => {
  const handleChange = (e) => {
    console.log("hola");
  };
  return (
    <div>
      <div className="bg-white bg-opacity-60 p-8 text-black rounded-lg shadow-md w-full h-full max-w-screen-md mx-auto flex flex-col justify-between">
        <div className="text-center mt-2">
          <img
            className="mx-auto h-32 w-32 rounded-full object-cover"
            src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png"
            alt="Profile Image"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl mb-2 font-bold avant-garde-bold">CLIENTE</h2>
          <h2 className="text-xl mb-2 font-regular avant-garde-regular">
            Persona Natural
          </h2>
          <h2 className="text-xl mb-2 font-regular avant-garde-regular">
            Nit: 08234561-2
          </h2>
        </div>
        <form>
          <div className="mb-4">
            <input
              className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value="Javier Alejo Escobar Lopez"
              placeholder="Nombre de usuario"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <input
              className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value="alejoLopez@gmail.com"
              placeholder="Correo electrónico"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <input
              className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
              id="number"
              type="text"
              value="312453000"
              placeholder="Número de teléfono"
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className=" font-bold avant-garde-bold w-full bg-Az3 text-gray py-3 px-6 rounded  text-xl transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
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
