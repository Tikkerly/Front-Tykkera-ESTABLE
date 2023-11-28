"use client";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from '@mui/icons-material/Check';
import EditNoteIcon from "@mui/icons-material/EditNote";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ModalEdit, ModalForm, ModalRegister } from "../index";
import axios from "axios";
import Cookies from "js-cookie";
import { USER_ROUTES } from "@/routes/routes";
import Swal from "sweetalert2";

// Modal
const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    async function getAllUsers() {
      try {
        const { data } = await axios(USER_ROUTES.getAllUsers, {
          headers: {
            "x-token": Cookies.get("token"),
          },
        });
        setUsers(data.users);
      } catch (error) {}
    }
    getAllUsers();
  }, [stop]);

  const handleBan = async (id, status) => {
    try {
      const { data } = await axios.post(
        `${USER_ROUTES.deleteUser}/${id}`,
        {
          status: !status,
        },
        {
          headers: {
            "x-token": Cookies.get("token"),
          },
        }
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      setStop(!stop);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error durante la operación",
        confirmButtonColor: "#00356f",
        confirmButtonText: "Cerrar",
        text: error.data,
      });
    }
  };

  return (
    <div className="w-5/6 flex flex-col justify-center items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md gap-4">
      <div className="w-full">
        <h1 className="flex justify-center font-black avant-garde-regular text-Az1 border-b border-dotted border-b-8 border-t-0 pb-2 ">
          Lista de Usarios
        </h1>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-Az3 text-Az4 bg-opacity-70">
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Imagen
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Nombre del Usuario
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Correo Electronico
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Pago
            </th>
            <th className="py-2 px-4 font-bold avant-garde-bold border-l border-r">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                <img className="h-10 w-10" src={user.img} alt="" />
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.username}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.email}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.isPaid ? "Pago" : "Prueba Gratuita"}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular border">
                {user.status ? "Activo" : "Inactivo"}
              </td>
              <td className="py-2 px-4 font-regular avant-garde-regular ">
                <Link
                  href={`/administrador/${user._id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <EditNoteIcon className="text-blue-500 hover:text-blue-700" />
                </Link>
                {user.status ? (
                  <ClearIcon
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleBan(user._id, user.status)}
                  />
                ) : (
                  <CheckIcon
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleBan(user._id, user.status)}
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

export default UsersView;
