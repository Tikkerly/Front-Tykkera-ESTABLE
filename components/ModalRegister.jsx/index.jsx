"use client";
import { FormUtils } from "@/utils";

export default function ModalRegister({ show, onClose }) {
  const {
    formData,
    errors,
    isDisabled,
    handleChange,
    handleImageChange,
    handleSubmit,
  } = FormUtils();

  const handleClose = ({ target }) => {
    if (target.id === "wrapper") onClose();
  };

  if (!show) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[800px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-xl font-medium text-gray-900">
              Crear Usuario
            </h3>
            <form action="" className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="clientId"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Nit
                  </label>
                  <input
                    type="text"
                    name="clientId"
                    id="clientId"
                    value={formData.clientId}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.clientId && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.clientId}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="img"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Foto
                  </label>
                  <input
                    type="file"
                    name="img"
                    id="img"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.img && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.img}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.username && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.username}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.email && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.phone && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="personType"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Tipo
                  </label>
                  <select
                    id="personType"
                    name="personType"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="Tipodepersona">Tipo de persona</option>
                    <option value="Natural">Persona Natural</option>
                    <option value="Juridica">Persona Juridica</option>
                  </select>
                  {errors.personType && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.personType}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-between gap-2 mb-2">
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Contraseña
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                  {errors.password && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="rol"
                    className="block mb-2 text-lg font-medium text-gray-900"
                  >
                    Rol
                  </label>
                  <select
                    id="rol"
                    name="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="RolUsuario">Rol del Usuario</option>
                    <option value="ADMIN">Administrador</option>
                    <option value="AGENTE DE SERVICIO">
                      Agente de servicio
                    </option>
                    <option value="TECNICO">Técnico</option>
                    <option value="CLIENTE">Cliente</option>
                  </select>
                  {errors.rol && (
                    <p className="text-red-500 font-regular avant-garde-regular">
                      {errors.rol}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Crear usuario
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
