'use client';
import React from 'react';

const EditTickets = () => {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full h-full max-w-screen-md mx-auto flex flex-col justify-between">
       
        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value="Patricia Rois"
            placeholder="Nombre del Cliente"
          />
        </div>
        
        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value="Julian Roger"
            placeholder="Nombre del Tecnico"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value="Reparacion"
            placeholder="Tipo de Servicio"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            value="2023-11-01"
            placeholder="Fecha de Inicio"
          />
        </div>
        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            value="2023-11-05"
            placeholder="Fecha de Finalizacion"
          />
        </div>
        <div className="mb-4 w-full">
          <input
            className="w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
            id="number"
            type="text"
            value="En Proceso"
            placeholder="Estado"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-gray font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline text-xl"
            type="button"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTickets;