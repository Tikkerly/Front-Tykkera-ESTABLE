"use client";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";
import { useState } from "react";
import Link from "next/link";

const ChangeUser = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(USER_ROUTES.forgetPassword, {
        email: formData.email,
      });
      setMessage("Email enviado");
    } catch (error) {
      setMessage(
        "No se ha podido enviar el email de recuperacion, revise los campos o intentelo mas tarde"
      );
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-100 avant-garde-bold font-bold ">Coloque su Email</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div >
          <div className="relative w-64 h-10 bg-gray-200 rounded-lg mt-8">
            <div className="absolute left-2 top-2"></div>
            <input
              id="email"
              name="email"
              type="text"
              required
              className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 rounded-lg"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <Link href="/recuperar-contrasena" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button
              className="mt-3 avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 rounded-full transition duration-300 hover:shadow-md"
              //type="submit"
              onClick={handleSubmit}
            >
              Enviar correo
            </button>
        </Link>
      </form>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default ChangeUser;
