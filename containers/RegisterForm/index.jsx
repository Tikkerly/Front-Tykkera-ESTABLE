"use client";
import React, { useState } from "react";
import { validation } from "@/utils";
import {
  AccountCircle,
  Email,
  Lock,
  Phone,
  AssignmentInd,
  Person,
  Business,
} from "@mui/icons-material";
import { FormInputs, SubmitButton } from "@/components";
import { registerSubmit } from "@/services";
import { USER_ROUTES } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { TextField, InputAdornment } from "@mui/material";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    personType: "",
    phone: "",
    nit: "",
    img: null,
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setFormData({ ...formData, [e.target.name]: file });
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
    nit: formData.nit,
    img: formData.img,
    address: formData.address,
  };

  const handleSubmit = registerSubmit(USER_ROUTES.registerUser, user, router);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center w-80"
    >
      <div className="flex items-center gap-2 flex-col">
        <TextField
          label={"Nombre de usuario:"}
          className="p-2"
          placeholder={"Nombre de usuario"}
          name={"username"}
          value={formData.username}
          onChange={handleChange}
          type={"text"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle className="text-gray-500" />
              </InputAdornment>
            ),
          }}
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
        <TextField
          label={"Email:"}
          className="p-2"
          placeholder={"Correo electrónico"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          type={"email"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email className="text-gray-500" />
              </InputAdornment>
            ),
          }}
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
        <TextField
          label={"Contraseña:"}
          className="p-2"
          placeholder={"Contraseña"}
          name={"password"}
          value={formData.password}
          onChange={handleChange}
          type={"password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock className="text-gray-500" />
              </InputAdornment>
            ),
          }}
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
        <TextField
          className="p-2"
          label={"Confirmar contraseña:"}
          placeholder={"Confirmar contraseña"}
          name={"confirmPassword"}
          value={formData.confirmPassword}
          onChange={handleChange}
          type={"password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock className="text-gray-500" />
              </InputAdornment>
            ),
          }}
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
        <TextField
          label={"Identificación:"}
          className="p-2"
          placeholder={"Numero de identificacion"}
          name={"nit"}
          value={formData.clientId}
          onChange={handleChange}
          type={"text"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentInd className="text-gray-500" />
              </InputAdornment>
            ),
          }}
        />
        <div className="h-2">
          {errors.nit && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm">
              {errors.nit}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-col">
          <TextField
            label={"Telefono:"}
            className="p-2"
            placeholder={"Numero de celular"}
            name={"phone"}
            value={formData.phone}
            onChange={handleChange}
            type={"number"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone className="text-gray-500" />
                </InputAdornment>
              ),
            }}
          />
          <div className="h-2">
            {errors.phone && (
              <p className="text-red-500 font-regular avant-garde-regular text-sm">
                {errors.phone}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col">
        <TextField
          label={"Dirección:"}
          className="p-2"
          placeholder={"Direccioón"}
          name={"address"}
          value={formData.clientId}
          onChange={handleChange}
          type={"text"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentInd className="text-gray-500" />
              </InputAdornment>
            ),
          }}
        />
        <div className="h-2">
          {errors.address && (
            <p className="text-red-500 font-regular avant-garde-regular text-sm">
              {errors.address}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 flex-col w-auto h-auto">
        <select
          label={"Tipo de persona:"}
          id="personType"
          name="personType"
          required
          className="bg-Be p-2 outline-none focus:ring-2 w-auto h-auto focus:ring-blue-600 text-gray-800 rounded-lg font-regular avant-garde-regular"
          value={formData.personType}
          onChange={handleChange}
        >
          <option value="Tipodepersona">
            <Person /> Tipo de persona
          </option>
          <option value="Natural">
            <AssignmentInd /> Persona Natural
          </option>
          <option value="Juridica">
            <Business /> Persona Juridica
          </option>
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
        <TextField
          label={"Imagen:"}
          className="p-2"
          placeholder={"Imagen"}
          name="img"
          onChange={handleImageChange}
          type="file"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            classes: {
              input: "bg-Be outline-none",
            },
          }}
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
