"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { USER_ROUTES } from "@/routes/routes";
import { useEffect } from "react";
import { validation } from "@/utils";

const CreateFinalClient = () => {
  const token = Cookies.get("token");
  const [agentes, setAgentes] = useState([]);

  const serviceAgents = useSelector((state) => state.options.serviceAgents);
  const company = useSelector((state) => state.auth.user);

  useEffect(() => {
    setAgentes(serviceAgents);
  }, []);

  console.log(agentes);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    documentType: "",
    document: "",
    phone: "",
    address: "",
    company_id: company._id,
    serviceClient_id: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(
      validation("finalClient", { ...formData, [name]:value })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${USER_ROUTES.init}/finalClient/registerfinalclient`,
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
          documentType: "",
          document: "",
          phone: "",
          address: "",
          company_id: company._id,
          serviceClient_id: "",
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
    <>
      <div className="flex justify-center items-center">
        <h2 className="text-3xl font-bold text-center">Crear Cliente</h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-800">
              Nombre:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="mt-4 text-white block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="h-2">
            {errors.username && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.username}
              </p>
            )}
          </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Correo:
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-4 text-white block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
             <div className="h-2">
            {errors.email && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.email}
              </p>
            )}
          </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Tipo de Documento:
            </label>
            <select
            name="documentType"
            value={formData.documentType}
            onChange={handleInputChange}
            className="mt-4 text-white block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Tipo de Documento</option>
            <option value="NIT">NIT</option>
            <option value="DNI">DNI</option>
            <option value="PASAPORTE">PASAPORTE</option>
            </select>
            <div className="h-2">
            {errors.documentType && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.documentType}
              </p>
            )}
          </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800">
              Documento:
            </label>
            <input
              type="text"
              name="document"
              value={formData.document}
              onChange={handleInputChange}
              className="mt-4 text-white block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="h-2">
            {errors.document && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.document}
              </p>
            )}
          </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">
            Teléfono:
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-4 text-white block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="h-2">
            {errors.phone && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800">
            Dirección:
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-4 text-white block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <div className="h-2">
            {errors.address && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.address}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">
            Agente de Servicio:
          </label>
          <select
            name="serviceClient_id"
            value={formData.serviceClient_id}
            onChange={handleInputChange}
            className="mt-4 text-white block w-full py-2 px-3 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Selecciona un Agente de Servicio</option>
            {agentes.serviceAgent &&
              agentes.serviceAgent.map((serviceClient) => (
                <option key={serviceClient._id} value={serviceClient._id}>
                  {serviceClient.username}
                </option>
              ))}
          </select>
          <div className="h-2">
            {errors.serviceClient_id && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.serviceClient_id}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className=" mt-4 avant-garde-bold font-bold text-gray px-6 py-3 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
          >
            Crear Cliente Final
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateFinalClient;
