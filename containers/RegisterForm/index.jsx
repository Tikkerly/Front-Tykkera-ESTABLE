"use client";
import { FormInputs, SubmitButton } from "@/components";
import { registerSubmit } from "@/services";
import { USER_ROUTES } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { validation } from "@/utils";
import React, { useState } from "react";
import styles from "./styles.module.css";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    personType: "",
    phone: "",
    clientId: "",
    img: "",
    rol: "CLIENTE",
  });
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [e.target.name]: file.name });
  };

  const handleChange = (e) => {
    setErrors(
      validation("register", { ...formData, [e.target.name]: e.target.value })
    );
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const props = Object.keys(
      validation("register", { ...formData, [e.target.name]: e.target.value })
    );
    if (!props.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const user = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
    personType: formData.personType,
    phone: formData.phone,
    clientId: formData.clientId,
    img: formData.img,
    rol: formData.rol,
  };

  const handleSubmit = registerSubmit(USER_ROUTES.registerUser, user, router);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center w-80">
      <div className="flex items-center gap-2 flex-col">
        <FormInputs
          placeholder={"Nombre de usuario"}
          name={"username"}
          value={formData.username}
          onChange={handleChange}
          type={"text"}
        />
        <div className="h-2">
          {errors.username && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm">
              {errors.username}
            </p>
          )}
        </div>

      </div>
      <div className="flex items-center gap-2 flex-col">
        <FormInputs
          placeholder={"Correo electrónico"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          type={"email"}
        />
        <div className="h-2">
         {errors.email && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm">
              {errors.email}
            </p>
         )}
        </div>

      </div>
      <div className="flex items-center gap-2 flex-col">
        <FormInputs
          placeholder={"Contraseña"}
          name={"password"}
          value={formData.password}
          onChange={handleChange}
          type={"password"}
        />
        <div className="h-2">
          {errors.password && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm">
              {errors.password}
            </p>
          )}
        </div>

      </div>
      <div className="flex items-center gap-2 flex-col">
        <FormInputs
          placeholder={"Confirmar contraseña"}
          name={"confirmPassword"}
          value={formData.confirmPassword}
          onChange={handleChange}
          type={"password"}
        />
        <div className="h-2">
         {errors.confirmPassword && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm ">
              {errors.confirmPassword}
            </p>
          )}
        </div>

      </div>
      <div className="flex items-center gap-2 flex-col">
        <FormInputs
          placeholder={"Numero de celular"}
          name={"phone"}
          value={formData.phone}
          onChange={handleChange}
          type={"number"}
        />
        <div className="h-2">
          {errors.phone && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm">
              {errors.phone}
            </p>
          )}
        </div>

      </div>
      <div className="flex items-center gap-2 flex-col">
        <FormInputs
          placeholder={"Numero de identificacion"}
          name={"clientId"}
          value={formData.clientId}
          onChange={handleChange}
          type={"text"}
        />
        <div className="h-2">
         {errors.clientId && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm">
              {errors.clientId}
            </p>
          )}
        </div>

      </div>
      <div>
        <select
          id="personType"
          name="personType"
          required
          className="bg-Be w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-gray-800 rounded-lg font-regular avant-garde-regular"
          value={formData.personType}
          onChange={handleChange}
        >
          <option value="Tipodepersona">Tipo de persona</option>
          <option value="Persona Natural">Persona Natural</option>
          <option value="Persona Juridica">Persona Juridica</option>
        </select>
      </div>
      <div className="h-2">
      {errors.personType && (
        <p className="text-red-500 font-regular avant-garde-regular text-sm">
          {errors.personType}
        </p>
      )}
      </div>
      <div className="flex items-center gap-2 flex-col">
        <FormInputs
          name={"img"}
          onChange={handleImageChange}
          type={"file"}
        />
        <div className="h-2">
        {errors.img && (
          <p className="text-red-500 font-regular avant-garde-regular text-sm">
            {errors.img}
          </p>
        )}
        </div>

      </div>
      <SubmitButton text={"Registrarse"} type={"submit"} />
    </form>
  );
};

export default RegisterForm;
