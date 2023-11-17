"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Cookies from "js-cookie";
import ClearIcon from "@mui/icons-material/Clear";
import EditNoteIcon from "@mui/icons-material/EditNote";

const UsersViews = () => {
  const token = Cookies.get("token");

  const [userData, setUserData] = useState({
    total: 0,
    users: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/user", {
          headers: {
            "x-token": token,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center bg-white bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md ">
      <Link href="/user/administrar-usuarios/agregar-cliente">
        <button>Agregar Cliente</button>
      </Link>
      <Link href="/user/administrar-usuarios/agregar-tecnico">
        <button>Agregar Técnico</button>
      </Link>
      <Link href="/user/administrar-usuarios/agregar-agente-de-servicio">
        <button>Agregar Agente de Servicio</button>
      </Link>

      <table className="table-auto">
        <thead>
          <tr className="bg-Az2">
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Id
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Cliente
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Rol
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Email
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Teléfono
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Tickets
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.users.map((user) => (
            <tr key={user.NIT}>
              <td className="py-2 px-4 font-bold avant-garde-bold border bg-Az2">
                {user.clientId}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.username}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.rol}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.email}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.phone}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                sus tickets
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular ">
                <Link href="/user/edituser/:id">
                  <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                </Link>
                <ClearIcon
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleTicketDelete(ticket.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersViews;
