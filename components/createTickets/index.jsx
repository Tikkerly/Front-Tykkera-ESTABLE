"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const CreateTickect = () => {
  const token = Cookies.get("token");

  const serviceAgents = useSelector(
    (state) => state.options.serviceAgent.serviceAgent
  );
  const technicians = useSelector(
    (state) => state.options.technician.technicians
  );
  const finalClients = useSelector(
    (state) => state.options.finalClient.finalClients
  );
  const companies = useSelector((state) => state.options.company.users);

  const [formData, setFormData] = useState({
    serviceType: "",
    serviceDescription: "",
    startDate: "",
    company_id: "",
    technician_id: "",
    finalClient_id: "",
    serviceClient_id: "",
    paymentMethod: "",
    ammount: 0,
    cost: 0,
    others: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/tickets/registerticket",
        {
          method: "POST",
          headers: {
            "x-token": token,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Error al registrar el ticket");
      }
    } catch (error) {
      console.log(error)
      alert("Error al procesar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Tipo de Servicio:</label>
          <input
            type="text"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descripción del Servicio:</label>
          <input
            type="text"
            name="serviceDescription"
            value={formData.serviceDescription}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Fecha de Inicio:</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
        <label>Compañía:</label>
        <select
          name="company_id"
          value={formData.company_id}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una compañía</option>
          {companies.map((company) => (
            <option key={company._id} value={company._id}>
              {company.username}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Cliente Final:</label>
        <select
          name="finalClient_id"
          value={formData.finalClient_id}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una Cliente Final</option>
          {finalClients.map((finalClient) => (
            <option key={finalClient._id} value={finalClient._id}>
              {finalClient.username}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Técnico:</label>
        <select
          name="technician_id"
          value={formData.technician_id}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una Técnico</option>
          {technicians.map((technician) => (
            <option key={technician._id} value={technician._id}>
              {technician.username}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Agente de Servicio:</label>
        <select
          name="serviceClient_id"
          value={formData.serviceClient_id}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una Técnico</option>
          {serviceAgents.map((serviceAgent) => (
            <option key={serviceAgent._id} value={serviceAgent._id}>
              {serviceAgent.username}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Método de Pago:</label>
        <input
          type="text"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="ammount"
          value={formData.ammount}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Costo:</label>
        <input
          type="number"
          name="cost"
          value={formData.cost}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Otros Valores o Conceptos:</label>
        <input
          type="number"
          name="others"
          value={formData.others}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Registrar Ticket</button>
      </div>
    </form>
  );
};

export default CreateTickect;
