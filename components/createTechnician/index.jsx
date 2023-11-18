"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const CreateTechnician = () => {
  const token = Cookies.get("token");

  const serviceAgents = useSelector((state) => state.options.serviceAgents);
  const company = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    document: "",
    documentType: "",
    phone: "",
    address: "",
    paymentMethods: "Transferencia",
    accountNumber: "",
    company_id: company._id,
    serviceClient_id: "",
    serviceTypes: "",
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
        "http://localhost:3001/api/v1/technician/registertechnician",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "x-token": token,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData({
          username: "",
          email: "",
          document: "",
          documentType: "",
          phone: "",
          address: "",
          paymentMethods: "Transferencia",
          accountNumber: "",
          company_id: company._id,
          serviceClient_id: "",
          serviceTypes: "",
        });
      } else {
        alert("Error al registrar el técnico");
      }
    } catch (error) {
      console.log(error);
      alert("Error al procesar la solicitud:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-white">
            Nombre:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Correo:
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Documento:
          </label>
          <input
            type="text"
            name="document"
            value={formData.document}
            onChange={handleInputChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Tipo de Documento:
        </label>
        <input
          type="text"
          name="documentType"
          value={formData.documentType}
          onChange={handleInputChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Teléfono:
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Dirección:
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white">
          Método de pago:
        </label>
        <input
          type="text"
          name="paymentMethods"
          value={formData.paymentMethods}
          onChange={handleInputChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white">
          Número de cuenta:
        </label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Tipo de Servicio:
        </label>
        <input
          type="text"
          name="serviceTypes"
          value={formData.serviceTypes}
          onChange={handleInputChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Agente de Servicio:
        </label>
        <select
          name="serviceClient_id"
          value={formData.serviceClient_id}
          onChange={handleInputChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Selecciona un Agente de Servicio</option>
          {serviceAgents.serviceAgent.map((serviceClient) => (
            <option key={serviceClient._id} value={serviceClient._id}>
              {serviceClient.username}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Crear Técnico
        </button>
      </div>
    </form>
  );
};

export default CreateTechnician;
