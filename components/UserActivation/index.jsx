"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";

const UserActivation = ({ id }) => {
  const [data, setData] = useState({});
  const userData = () => {
    const { data } = axios.post(
      `${USER_ROUTES.init}/user/validateregister/${id.id}`
    );
    setData(data);
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="bg-gray-200 px-10 py-10 bg-opacity-70 rounded ">
      <h1 className="text-4xl avant-garde-bold font-bold text-gray-100 mb-5 bg-Az1 rounded px-2 py-4 bg-opacity-70 border-dotted border-4 border-Az2">Usuario activado</h1>
      <div className="mt-8 group relative w-full  flex justify-center ">
        <Link
          href="/ingresar"
          style={{ textDecoration: "none", color: "inherit", height: "100px" }}
          className="w-full "
        >
          <button
            className="avant-garde-bold font-bold text-2xl bg-Az5 w-full py-4 text-gray-100 rounded-full  transition duration-300 hover:shadow-md"
            type="submit"
          >
            Continuar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserActivation;
