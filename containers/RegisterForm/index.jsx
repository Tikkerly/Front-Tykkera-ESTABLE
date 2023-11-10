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
    setFormData({ ...formData, img: file });
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
    img: formData.img.name,
    rol: formData.rol,
  };

  const handleSubmit = registerSubmit(USER_ROUTES.registerUser, user, router);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.input}>
        <FormInputs
          placeholder={"Nombre de usuario"}
          name={"username"}
          value={formData.username}
          onChange={handleChange}
          type={"text"}
        />
        {errors.username && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.username}
          </p>
        )}
      </div>
      <div className={styles.input}>
        <FormInputs
          placeholder={"Correo electrónico"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          type={"email"}
        />
        {errors.email && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.email}
          </p>
        )}
      </div>
      <div className={styles.input}>
        <FormInputs
          placeholder={"Contraseña"}
          name={"password"}
          value={formData.password}
          onChange={handleChange}
          type={"password"}
        />
        {errors.password && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.password}
          </p>
        )}
      </div>
      <div className={styles.input}>
        <FormInputs
          placeholder={"Confirmar contraseña"}
          name={"confirmPassword"}
          value={formData.confirmPassword}
          onChange={handleChange}
          type={"password"}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.confirmPassword}
          </p>
        )}
      </div>
      <div className={styles.input}>
        <FormInputs
          placeholder={"Numero de celular"}
          name={"phone"}
          value={formData.phone}
          onChange={handleChange}
          type={"number"}
        />
        {errors.phone && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.phone}
          </p>
        )}
      </div>
      <div className={styles.input}>
        <FormInputs
          placeholder={"Numero de identificacion"}
          name={"clientId"}
          value={formData.clientId}
          onChange={handleChange}
          type={"text"}
        />
        {errors.clientId && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.clientId}
          </p>
        )}
      </div>
      <div>
        <select
          id="personType"
          name="personType"
          required
          className="bg-transparent w-full h-full pl-10 outline-none focus:ring-2 focus:ring-blue-600 text-black rounded-lg font-regular avant-garde-regular"
          value={formData.personType}
          onChange={handleChange}
        >
          <option value="Tipodepersona">Tipo de persona</option>
          <option value="Persona Natural">Persona Natural</option>
          <option value="Persona Juridica">Persona Juridica</option>
        </select>
      </div>
      {errors.personType && (
        <p className="text-red-500 font-regular avant-garde-regular">
          {errors.personType}
        </p>
      )}
      <div className={styles.input}>
        <FormInputs
          placeholder={"Numero de identificacion"}
          name={"img"}
          value={formData.clientId}
          onChange={handleImageChange}
          type={"file"}
        />
        {errors.img && (
          <p className="text-red-500 font-regular avant-garde-regular">
            {errors.img}
          </p>
        )}
      </div>
      <SubmitButton text={"Registrarse"} type={"submit"} />
    </form>
  );
};

export default RegisterForm;
