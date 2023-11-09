'use client';
import React from 'react';
import Link from 'next/link';

const TicketsView = () => {
  const ticketsData = [
    // Aquí debes incluir tus datos de tickets, por ejemplo:
    { id: 1, cliente: 'Patricia Rois', tecnico: 'Julian Roger', tipoServicio: 'Reparacion', fechaInicio: '2023-11-01', fechaFinalizacion: '2023-11-05', estado: 'En Proceso' },
    { id: 2, cliente: 'Camilo Cruz', tecnico: 'Julian Roger', tipoServicio: 'Mantenimiento', fechaInicio: '2023-11-02', fechaFinalizacion: '2023-11-06', estado: 'Completado' },
    // Agrega más objetos con tus datos de tickets aquí
  ];

  return (
    <div className="flex justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="py-2 px-4">Id</th>
            <th className="py-2 px-4">Cliente</th>
            <th className="py-2 px-4">Técnico</th>
            <th className="py-2 px-4">Tipo de Servicio</th>
            <th className="py-2 px-4">Fecha Inicio</th>
            <th className="py-2 px-4">Fecha Finalización</th>
            <th className="py-2 px-4">Estado</th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.map((ticket) => (
            <tr key={ticket.id}>
              <td className="py-2 px-4">{ticket.id}</td>
              <td className="py-2 px-4">{ticket.cliente}</td>
              <td className="py-2 px-4">{ticket.tecnico}</td>
              <td className="py-2 px-4">{ticket.tipoServicio}</td>
              <td className="py-2 px-4">{ticket.fechaInicio}</td>
              <td className="py-2 px-4">{ticket.fechaFinalizacion}</td>
              <td className="py-2 px-4">{ticket.estado}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <Link href="/user/tickets/edit">
                    <h2>Editar</h2>
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsView;