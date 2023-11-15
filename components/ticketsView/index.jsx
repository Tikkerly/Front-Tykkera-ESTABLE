'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import ClearIcon from '@mui/icons-material/Clear';
import EditNoteIcon from '@mui/icons-material/EditNote';

const TicketsView = () => {
 
  const [ticketsData, setTicketsData] = useState([
    // Aquí debes incluir tus datos de tickets, por ejemplo:
    { id: 1, cliente: 'Patricia Rois', tecnico: 'Julian Roger', tipoServicio: 'Reparacion', fechaInicio: '2023-11-01', fechaFinalizacion: '2023-11-05', estado: 'En Proceso' },
    { id: 2, cliente: 'Camilo Cruz', tecnico: 'Julian Roger', tipoServicio: 'Mantenimiento', fechaInicio: '2023-11-02', fechaFinalizacion: '2023-11-06', estado: 'Completado' },
    { id: 3, cliente: 'Maluma', tecnico: 'Daddy Yankee', tipoServicio: 'Mantenimiento', fechaInicio: '2023-11-02', fechaFinalizacion: '2023-11-06', estado: 'Completado' },
    // Agrega más objetos con tus datos de tickets aquí
  ]);
  const handleTicketDelete = (ticketId) => {
    // Filtra los tickets y crea un nuevo arreglo sin el ticket correspondiente al ticketId
    const updatedTicketsData = ticketsData.filter((ticket) => ticket.id !== ticketId);
    // Actualiza el estado de los tickets con el nuevo arreglo sin el ticket eliminado
    setTicketsData(updatedTicketsData);
  };

  return (
    <div className="flex justify-center items-center bg-Be bg-opacity-90 p-8 text-black rounded-lg shadow-md ">
      <table className="table-auto">
        <thead>
          <tr className="bg-Az2">
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">Id</th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">Cliente</th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">Técnico</th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">Tipo de Servicio</th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">Fecha Inicio</th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">Fecha Finalización</th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">Estado</th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.map((ticket) => (
            <tr key={ticket.id}>
              <td className="py-2 px-4 font-bold avant-garde-bold border bg-Az2">{ticket.id}</td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">{ticket.cliente}</td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">{ticket.tecnico}</td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">{ticket.tipoServicio}</td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">{ticket.fechaInicio}</td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">{ticket.fechaFinalizacion}</td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">{ticket.estado}</td>
              <td className="py-2 px-4 font-regular avant-garde-regular ">
                <Link href="/user/tickets/edit">
                  <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                </Link>
                <ClearIcon className="text-red-500 hover:text-red-700"  onClick={() => handleTicketDelete(ticket.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsView;