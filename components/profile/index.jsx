"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const id = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth.user);

  console.log(id)

  const [editable, setEditable] = useState({
    username: user.username,
    phone: user.phone,
  });

  const handleFieldChange = (edit, value) => {
    setEditable((prev) => ({
      ...prev,
      [edit]: value,
    }));
  };

  const handleSaveChanges = () => {
    console.log("Changes saved:", editable);
  };

  return (
    <div>
      <div className="bg-white bg-opacity-60 p-8 text-black rounded-lg shadow-md w-full h-full max-w-screen-md mx-auto flex flex-col justify-between">
        <div className="text-center mt-2">
          <img
            className="mx-auto h-32 w-32 rounded-full object-cover"
            src={user.img}
            alt="Profile Image"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl mb-2 font-bold avant-garde-bold">
            {user.rol}
          </h2>
          <h2 className="text-xl mb-2 font-regular avant-garde-regular">
            {user.personType}
          </h2>
          <h2 className="text-xl mb-2 font-regular avant-garde-regular">
            NIT: {user.clientId}
          </h2>
        </div>

        <div className="mb-4">
          <input
            className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={editable.username}
            onChange={(e) => handleFieldChange("username", e.target.value)}
            placeholder="Nombre de usuario"
          />
        </div>

        <div className="mb-4">
          <input
            className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            defaultValue={user.email}
            placeholder="Correo electrónico"
          />
        </div>

        <div className="mb-4">
          <input
            className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            value={editable.phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            placeholder="Número de teléfono"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className=" font-bold avant-garde-bold w-full bg-Az3 text-white py-3 px-6 rounded  text-xl transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
            type="button"
            onClick={handleSaveChanges}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
