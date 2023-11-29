"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useSelector } from "react-redux";
import { USER_ROUTES } from "@/routes/routes";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const empresa = {
  empresa1: "empresa1",
  empresa2: "empresa2",
  empresa3: "empresa3"
}

const TicketsView = () => {
  const id = useSelector((state) => state.auth.user._id);
  const token = Cookies.get("token");
  
  const [stop, setStop] = useState(false);
  const [ticketsData, setTicketsData] = useState([]);
  console.log(ticketsData);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(
          `${USER_ROUTES.init}/tickets/company/${id}`,
          {
            headers: {
              "x-token": token,
            },
          }
        );
        setTicketsData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getTickets();
  }, [stop]);

  const handleTicketDelete = async (ticketId, status) => {
    try {
      const response = await axios.post(
        `${USER_ROUTES.init}/tickets/deleteticket/${ticketId}`, 
        {
          status: !status,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
      setStop(!stop);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error durante la operación",
        confirmButtonColor: "#00356f",
        confirmButtonText: "Cerrar",
        text: error.data,
        timer: 2000
      });
    }
  };

  return (
    <div className="grid gap-4 w-5/6 ">
      <div>
        <Link
          href="/user/tickets/crear-ticket"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">
            <FontAwesomeIcon icon={faTicket} className="mr-2" size="lg" />
            Crear Ticket
          </button>
        </Link>
        <h1 className="flex justify-center font-black avant-garde-regular text-Az1 border-b border-dotted border-b-8 border-t-0 pb-8 ">
          Tickets
        </h1>
      </div>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-Az3 text-Az4 bg-opacity-70">
            <th>
              Orden
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Empresa
            </th>
            
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Agente de Servicio
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Técnico
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Cliente Final
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Tipo de Servicio
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Descripción del Servicio
            </th>

            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Proceso
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Estado
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ticketsData.tickets?.map((tickets) => (
            <tr key={tickets.internalConsecutive}>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.internalConsecutive}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.empresa}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.serviceClient_id.username}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.technician_id.username}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.finalClient_id.username}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.serviceType}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.serviceDescription}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.ticketStatus}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {tickets.status ? "Activo" : "Inactivo"}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular ">
                <Link
                  href={`/user/tickets/${tickets._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                </Link>
                {tickets.status ? (
                  <ClearIcon
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleTicketDelete(tickets._id, tickets.status)}
                  />
                ) : (
                  <CheckIcon
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleTicketDelete(tickets._id, tickets.status)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsView;
