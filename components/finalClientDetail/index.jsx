"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const styles =
  "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline";
const styles2 = "font-black avant-garde-regular text-Az1 text-lg";
const styles3 = "flex flex-col";

const FinalClientDetail = ({ token }) => {
  const [finalClientData, setFinalClientData] = useState({
    username: "",
    email: "",
    documentType: "",
    document: "",
    phone: "",
    address: "",
    company_id: "",
    serviceClient_id: "",
  });

  const tokenValidate = Cookies.get("token");
  const { id } = token;

  useEffect(() => {
    const getFinalClient = async () => {
      try {
        const response = await axios.get(
          `${USER_ROUTES.init}/finalclient/${id}`,
          {
            headers: {
              "x-token": tokenValidate,
            },
          }
        );
        console.log(response);
        setFinalClientData(response.data);
      } catch (error) {
        console.error("Error fetching final client data:", error);
      }
    };
    getFinalClient();
  }, []);

  const handleFieldChange = (edit, value) => {
    console.log(edit, value);
    setFinalClientData((prev) => ({
      ...prev,
      [edit]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:3001/api/v1/finalclient/editfinalclient/${id}`,
        finalClientData,
        {
          headers: {
            "x-token": tokenValidate,
          },
        }
      );

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cliente final editado con éxito",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error durante la edición",
        confirmButtonColor: "#00356f",
        confirmButtonText: "Cerrar",
        text: "Error al editar el cliente final, intenta nuevamente",
      });
    }
  };

  return (
    <div className="grid gap-4 w-5/6">
      <div>
        <Link
          href="/user/administrar-usuarios"
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
          DETALLE DEL CLIENTE FINAL
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <div className={styles3}>
          <label className={styles2}>Nombre:</label>
          <input
            className={styles}
            id="username"
            type="text"
            value={
              finalClientData.username === null ? "" : finalClientData.username
            }
            placeholder="No definido"
            onChange={(e) => handleFieldChange("username", e.target.value)}
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>email:</label>
          <input
            className={styles}
            id="email"
            type="text"
            value={finalClientData.email === null ? "" : finalClientData.email}
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Tipo de Documento:</label>
          <input
            className={styles}
            id="documentType"
            type="text"
            value={
              finalClientData.documentType === null
                ? ""
                : finalClientData.documentType
            }
            placeholder="No definido"
            onChange={(e) => handleFieldChange("documentType", e.target.value)}
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Documento:</label>
          <input
            className={styles}
            id="document"
            type="number"
            value={
              finalClientData.document === null ? "" : finalClientData.document
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Teléfono:</label>
          <input
            className={styles}
            id="phone"
            type="number"
            value={finalClientData.phone === null ? "" : finalClientData.phone}
            onChange={(e) => handleFieldChange("phone", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Dirección:</label>
          <input
            className={styles}
            id="address"
            type="text"
            value={
              finalClientData.address === null ? "" : finalClientData.address
            }
            onChange={(e) => handleFieldChange("address", e.target.value)}
            placeholder="No definido"
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Compañía:</label>
          <input
            className={styles}
            id="company_id"
            type="text"
            value={
              finalClientData.company_id.username === null
                ? ""
                : finalClientData.company_id.username
            }
            placeholder="No definido"
            disabled
          />
        </div>
        <div className={styles3}>
          <label className={styles2}>Agente Final:</label>
          <input
            className={styles}
            id="serviceClient_id"
            type="text"
            value={
              finalClientData.serviceClient_id.username === null
                ? ""
                : finalClientData.serviceClient_id.username
            }
            placeholder="No definido"
            disabled
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
          type="submit"
          onClick={handleSaveChanges}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};

export default FinalClientDetail;
