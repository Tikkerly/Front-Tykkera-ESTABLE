"use client";
import React, { useState, useEffect } from "react";
import { USER_ROUTES } from "@/routes/routes";
import axios from "axios";
import Link from "next/link";
import { boolean } from "yup";

const styles = "font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"

const TicketDetail = ({ token }) => {
  const [ticketData, setTicketData] = useState({
    _id: "",
    serviceType: "",
    serviceDescription: "",
    registerDate: "",
    startDate: "",
    endDate: "",
    ammount: "",
    cost: "",
    utility: "",
    others: "",
    IVA: "",
    paymentMethod: "",
    status: "",
    ispaid: "",
    ticketStatus: "",
    company_id: "",
    serviceClient_id: "",
    technician_id: "",
    internalConsecutive: "",
  });
  console.log(ticketData);
  const { id } = token;

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/tickets/ticket/${id}`
        );
        setTicketData(response.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getTickets();
  }, []);

  const handleFieldChange = (edit, value) => {
    setTicketData((prev) => ({
      ...prev,
      [edit]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(
        `http://localhost:3001/api/v1/tickets/updateticket/${id}`,
        ticketData,
        {
          headers: {
            "x-token": token,
          },
        }
      );

      alert("Se han guardado los cambios");
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md gap-4">
      <div >
        <label>Ticket ID</label>
        <input
          className={styles}
          id="_id"
          type="text"
          value={ticketData._id === null ? "" : ticketData._id}
          placeholder="No definido"
          disabled
        />
      </div>
      <div >
        <label>Compañia</label>
        <input
          className={styles}
          id="company_id"
          type="text"
          value={ticketData.company_id === null ? "" : ticketData.company_id.username}
          placeholder="No definido"
          disabled
        />
      </div>
      <div >
        <label>Cliente</label>
        <input
          className={styles}
          id="serviceClient_id"
          type="text"
          value={ticketData.serviceClient_id === null ? "" : ticketData.serviceClient_id.username}
          placeholder="No definido"
          disabled
        />
      </div>
      <div >
        <label>Técnico</label>
        <input
          className={styles}
          id="technician_id"
          type="text"
          value={ticketData.technician_id === null ? "" : ticketData.technician_id.username}
          placeholder="No definido"
          disabled
        />
      </div>
      <div >
        <label>Tipo de Servicio</label>
        <input
          className={styles}
          id="serviceType"
          type="text"
          value={ticketData.serviceType === null ? "" : ticketData.serviceType}
          onChange={(e) => handleFieldChange("serviceType", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Descripción del Servicio</label>
        <input
          className={styles}
          id="serviceDescription"
          type="text"
          value={ticketData.serviceDescription === null ? "" : ticketData.serviceDescription}
          onChange={(e) => handleFieldChange("serviceDescription", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Fecha de Registro</label>
        <input
          className={styles}
          id="registerDate"
          type="text"
          value={ticketData.registerDate === null ? "" : ticketData.registerDate}
          placeholder="No definido"
          disabled
        />
      </div>
      <div >
        <label>Fecha de Inicio</label>
        <input
          className={styles}
          id="startDate"
          type="text"
          value={ticketData.startDate === null ? "" : ticketData.startDate}
          onChange={(e) => handleFieldChange("startDate", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Fecha de Finalización</label>
        <input
          className={styles}
          id="endDate"
          type="text"
          value={ticketData.endDate === null ? "" : ticketData.endDate}
          onChange={(e) => handleFieldChange("endDate", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Monto</label>
        <input
          className={styles}
          id="ammount"
          type="text"
          value={ticketData.ammount === null ? "" : ticketData.ammount}
          onChange={(e) => handleFieldChange("ammount", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Costo</label>
        <input
          className={styles}
          id="cost"
          type="text"
          value={ticketData.cost === null ? "" : ticketData.cost}
          onChange={(e) => handleFieldChange("cost", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Utilidad</label>
        <input
          className={styles}
          id="utility"
          type="text"
          value={ticketData.utility === null ? "" : ticketData.utility}
          onChange={(e) => handleFieldChange("utility", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Otros</label>
        <input
          className={styles}
          id="others"
          type="text"
          value={ticketData.others === null ? "" : ticketData.others}
          onChange={(e) => handleFieldChange("others", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>IVA</label>
        <input
          className={styles}
          id="IVA"
          type="text"
          value={ticketData.IVA === null ? "" : ticketData.IVA}
          onChange={(e) => handleFieldChange("IVA", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Método de pago</label>
        <input
          className={styles}
          id="paymentMethod"
          type="text"
          value={ticketData.paymentMethod === null ? "" : ticketData.paymentMethod}
          onChange={(e) => handleFieldChange("paymentMethod", e.target.value)}
          placeholder="No definido"
        />
      </div>
      <div >
        <label>Estado</label>
        <input
          className={styles}
          id="status"
          type="text"
          value={ticketData.status === null ? "" : ticketData.status}
          onChange={(e) => handleFieldChange("status", e.target.value)}
          placeholder="No definido"
        />
      </div>

      <div className="flex items-center justify-center">
          <button
            className=" font-bold avant-garde-bold w-full bg-Az3 text-gray py-3 px-6 rounded  text-xl transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
            type="submit"
            onClick={handleSaveChanges}
          >
            Guardar cambios
          </button>
        </div>
    </div>
  );
};

export default TicketDetail;
