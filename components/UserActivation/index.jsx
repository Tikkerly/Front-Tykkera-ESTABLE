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
    <div className="">
      <h1 className="text-8xl avant-garde-bold font-bold text-gray-100 mb-5">Usuario activado</h1>
      <div className="mt-8 group relative w-full  flex justify-center ">
        <Link
          href="/ingresar"
          style={{ textDecoration: "none", color: "inherit", height: "100px" }}
          className="w-full "
        >
          <button
            className="avant-garde-bold font-bold text-4xl bg-Az5 w-full py-8 text-gray-100 rounded-full transition duration-300 hover:shadow-md"
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
