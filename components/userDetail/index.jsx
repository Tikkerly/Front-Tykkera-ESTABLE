"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { USER_ROUTES } from "@/routes/routes";
import { useRouter } from "next/navigation";

const styles =
  "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline";
const styles2 = "font-black avant-garde-regular text-Az1 text-lg";
const styles3 = "flex flex-col";

const UserDetail = ({ token }) => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    img: "",
    _id: "",
    username: "",
    email: "",
    google: null,
    activeRegister: null,
    personType: "",
    address: "",
    nit: "",
    phone: "",
    rol: "",
    isPaid: null,
    trialPeriod: null,
    trialStartDate: "",
    trialEndDate: "",
    status: null,
  });
  const { id } = token;
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.post(`${USER_ROUTES.getUser}/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUser();
  }, []);

  const handleBanUser = () => {
    setUserData({
      status: false,
    });

    handleSaveChanges()
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`${USER_ROUTES.editUser}/${id}`, userData, {
        headers: {
          "x-token": token,
        },
      });

      alert("Se han guardado los cambios");
      router.push("/administrador");
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };
  return (
    <div className="grid gap-4 w-5/6">
      <div>
        <Link
          href="/administrador"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">
            <FontAwesomeIcon
              icon={faPersonWalkingArrowLoopLeft}
              className="mr-2"
              size="lg"
            />
            Volver
          </button>
        </Link>
        <h1 className="flex justify-center font-black avant-garde-regular text-Az1 border-b border-dotted border-b-8 border-t-0 pb-8 ">
          DETALLE DEL CLIENTE
        </h1>
      </div>
      <div className="flex items-start mb-8">
        <img
          className="h-32 w-32 rounded-full object-cover mx-auto"
          src={userData.img === null ? "" : userData.img}
          alt="Profile Image"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className={styles3}>
          <label className={styles2}>ID del Cliente</label>
          <input
            className={styles}
            id="_id"
            type="text"
            value={userData._id === null ? "" : userData._id}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Nombre de Usuario</label>
          <input
            className={styles}
            id="username"
            type="text"
            value={userData.username === null ? "" : userData.username}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Correo Electronico</label>
          <input
            className={styles}
            id="email"
            type="text"
            value={userData.email === null ? "" : userData.email}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Tipo de Persona</label>
          <select
            className={styles}
            value={userData.personType === null ? "" : userData.personType}
            placeholder="No definido"
            id="personType"
            disabled
          >
            <option value="Juridica">Juridica</option>
            <option value="Natural">Natural</option>
          </select>
        </div>
        <div className={styles3}>
          <label className={styles2}>Domicilio</label>
          <input
            className={styles}
            id="address"
            type="text"
            value={userData.address === null ? "" : userData.address}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>NIT</label>
          <input
            className={styles}
            id="nit"
            type="text"
            value={userData.nit === null ? "" : userData.nit}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Numero de Telefono</label>
          <input
            className={styles}
            id="phone"
            type="text"
            value={userData.phone === null ? "" : userData.phone}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Pago</label>
          <input
            className={styles}
            id="isPaid"
            type="text"
            value={userData.isPaid ? "Pago" : "No Pago"}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Periodo de Prueba</label>
          <input
            className={styles}
            id="trialPeriod"
            type="text"
            value={userData.trialPeriod ? "Activo" : "Inactivo"}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Estado del Cliente</label>
          <input
            className={styles}
            id="status"
            type="text"
            value={userData.status ? "Activo" : "Inactivo"}
            placeholder="No definido"
            disabled
          />
        </div>
        {userData.trialPeriod ? (
          <div className={styles3}>
            <div className={styles3}>
              <label className={styles2}>Comienzo del Periodo de Prueba</label>
              <input
                className={styles}
                id="trialStartDate"
                type="date"
                value={
                  userData.trialStartDate === null
                    ? ""
                    : userData.trialStartDate
                }
                placeholder="No definido"
                disabled
              />
            </div>
            <div className={styles3}>
              <label className={styles2}>
                Finalizacion del Periodo de Prueba
              </label>
              <input
                className={styles}
                id="trialEndDate"
                type="date"
                value={
                  userData.trialEndDate === null ? "" : userData.trialEndDate
                }
                placeholder="No definido"
                disabled
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-center">
        <button
          className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
          type="submit"
          onClick={handleBanUser}
        >
          Desactivar Usuario
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
