"use client";
import React, { useState, useEffect } from "react";
import { USER_ROUTES } from "@/routes/routes";
import axios from "axios";
import Link from "next/link";
import { boolean } from "yup";

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
    finalClient_id: "",
    internalConsecutive: "",
  });
  console.log(ticketData);
  const { id } = token;

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/tickets/${id}`
        );
        setTicketData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getTickets();
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md ">
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
      <div className="mb-4">
        <label>Ticket ID</label>
        <input
          className=" font-regular avant-garde-regular w-full px-4 py-3 text-xl text-gray-700 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={ticketData._id}
          onChange={(e) => handleFieldChange("username", e.target.value)}
          placeholder="Nombre de usuario"
        />
      </div>
    </div>
  );
};

export default TicketDetail;
