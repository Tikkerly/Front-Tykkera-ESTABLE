'use client'
import { FormInputs, SubmitButton } from "@/components";
import { useState } from "react";
import { USER_ROUTES } from "@/routes/routes";
import { useDispatch } from "react-redux";
import { closureHandleGoogleSubmit, closureHandleSubmit } from "@/services";
import {
  login,
  serviceAgentDetails,
  technicianDetails,
  finalClientDetails,
  companyDetails,
} from "@/redux/slices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

import axios from "axios";
// 906706593927-28g158gplg7fshf568027niditejuldo.apps.googleusercontent.com

import ModalPassword from "@/components/ModalPassword";
import Image from "next/image";
import load from "../../public/load.gif";

export default function LoginForm() {
  
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (token) => {
    try {
      const config = {
        headers: {
          "x-token": token,
        },
      };

      const responseServiceAgent = await axios.get(
        "http://localhost:3001/api/v1/serviceagent/",
        config
      );
      const responseTechnician = await axios.get(
        "http://localhost:3001/api/v1/technician",
        config
      );
      const responseFinalClient = await axios.get(
        "http://localhost:3001/api/v1/finalclient/",
        config
      );
      const responseCompany = await axios.get(
        "http://localhost:3001/api/v1/user",
        config
      );

      dispatch(serviceAgentDetails(responseServiceAgent.data));
      dispatch(technicianDetails(responseTechnician.data));
      dispatch(finalClientDetails(responseFinalClient.data));
      dispatch(companyDetails(responseCompany.data));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleSubmit = closureHandleSubmit(
    USER_ROUTES.loginUser,
    formData,
    dispatch,
    login,
    setMessage,
    setLoading,
    router,
    fetchUserData
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_CLIENTID}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-80"
      >
        <FormInputs
          className=" p-2"
          placeholder={"Ingrese su email."}
          label={"Email:"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
          type={"email"}
        />

        <FormInputs
          className=" p-2"
          placeholder={"Ingrese su contraseña."}
          label={"Contraseña:"}
          name={"password"}
          value={formData.password}
          onChange={handleChange}
          type={"password"}
        />
        <div className="flex flex-col items-center gap-4 text-center w-full">
                
          {loading ? ( 
          <Image src={load} width={30} height={30} alt="Loading2" />
          ) : ( 
          <SubmitButton text={"Ingresar"} type={"submit"} /> )}

          {message && (
            <h2 className="avant-garde-regular font-regular text-red-500 text-sm">
              {message}
            </h2>
          )}
          <button
            className="avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 rounded-full transition duration-300 hover:shadow-md hover:underline"
            onClick={() => setShowPasswordModal(true)}
          >
            Olvidé mi contraseña
          </button>
          <div className="h-0.5 w-full bg-gray-300"></div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              closureHandleGoogleSubmit(
                USER_ROUTES.loginGoogleUser,
                credentialResponse.credential,
                dispatch,
                login,
                setMessage,
                setLoading,
                router
              );
              router.push("/user"); 
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </form>
      <ModalPassword
        isVisible={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
      />
    </GoogleOAuthProvider>
  );
}
