"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { USER_ROUTES } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { validation } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CreateTechnician = () => {
  const styles =
    "font-regular avant-garde-regular w-full px-8 py-1.5 text-lg text-Az4 leading-tight bg-gray-200 border rounded focus:outline-none focus:shadow-outline";
  const styles2 = "font-black avant-garde-regular text-Az1 text-lg";
  const styles3 = "flex flex-col";
  const token = Cookies.get("token");
  const router = useRouter();

  const serviceAgents = useSelector((state) => state.options.serviceAgents);
  const company = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    document: "",
    documentType: "",
    phone: "",
    address: "",
    paymentMethods: "",
    accountNumber: "",
    company_id: company._id,
    serviceClient_id: "",
    serviceTypes: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(validation("technician", { ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${USER_ROUTES.init}/technician/registertechnician`,
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
        router.push("/user/administrar-usuarios");
        setFormData({
          username: "",
          email: "",
          document: "",
          documentType: "",
          phone: "",
          address: "",
          paymentMethods: "",
          accountNumber: "",
          company_id: company._id,
          serviceClient_id: "",
          serviceTypes: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error durante la creación",
          confirmButtonColor: '#00356f',
          confirmButtonText: 'Cerrar',
          text: 'Error al crear el técnico, intenta nuevamente',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error durante la creación",
        confirmButtonColor: '#00356f',
        confirmButtonText: 'Cerrar',
        text: 'Error al procesar la solicitud, intenta nuevamente',
      });
    }
  };

  return (
    <>
      <div className="grid gap-4 w-5/6 bg-gray-100 bg-opacity-60 p-8 text-gray-900 rounded-lg shadow-md gap-4 ">
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
            Agregar Técnico
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 space-y-6 ">
          <div className="grid grid-cols-2 gap-8 ">
            <div>
              <div className={styles3}>
                <label className={styles2}>Nombre:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-2">
                {errors.username && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.username}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Correo:</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>            
              <div>
              {errors.email && (
                <p className="text-red-500 font-regular avant-garde-regular text-sm">
                  {errors.email}
                </p>
              )}
            </div>
            </div>


            <div>
              <div className={styles3}>
                <label className={styles2}>Tipo de Documento:</label>
                <select
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  className={styles}
                >
                  <option value="">Tipo de Documento</option>
                  <option value="NIT">NIT</option>
                  <option value="DNI">DNI</option>
                  <option value="PASAPORTE">PASAPORTE</option>
                </select>
              </div>

              <div className="h-2">
                {errors.documentType && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.documentType}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Documento:</label>
                <input
                  type="text"
                  name="document"
                  value={formData.document}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-2">
                {errors.document && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.document}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Teléfono:</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-2">
                {errors.phone && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className={styles3}>
                <label className={styles2}>Dirección:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>
              <div className="h-2">
                {errors.address && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.address}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className={styles3}>
                <label className={styles2}>Método de pago:</label>
                <select
                  name="paymentMethods"
                  value={formData.paymentMethods}
                  onChange={handleInputChange}
                  className={styles}
                >
                  <option value="" disabled selected>Método de pago</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Transferencia">Transferencia</option>
                </select>
              </div>

              <div className="h-2">
                {errors.paymentMethods && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.paymentMethods}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Número de cuenta:</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className={styles}
                />
              </div>

              <div className="h-2">
                {errors.accountNumber && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.accountNumber}
                  </p>
                )}
              </div>
            </div>
              <div> 
            <div className={styles3}>
              <label className={styles2}>
                Tipo de Servicio:
              </label>
              <input
                type="text"
                name="serviceTypes"
                value={formData.serviceTypes}
                onChange={handleInputChange}
                className={styles}              />                    
                  </div>

              <div className="h-2">
                {errors.serviceTypes && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.serviceTypes}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className={styles3}>
                <label className={styles2}>Agente de Servicio:</label>
                <select
                  name="serviceClient_id"
                  value={formData.serviceClient_id}
                  onChange={handleInputChange}
                  className={styles}
                >
                  <option value="" disabled selected>Selecciona un Agente de Servicio</option>
                  {serviceAgents.map((serviceClient) => (
                    <option key={serviceClient._id} value={serviceClient._id}>
                      {serviceClient.username}
                    </option>
                  ))}
                </select>
              </div>
              <div className="h-2">
                {errors.serviceClient_id && (
                  <p className="text-red-500 font-regular avant-garde-regular text-sm">
                    {errors.serviceClient_id}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className=" items-center avant-garde-bold font-bold text-gray px-3 py-2 rounded-full flex justify-center bg-Az3 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100"
              >
                Agregar Técnico
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTechnician;
