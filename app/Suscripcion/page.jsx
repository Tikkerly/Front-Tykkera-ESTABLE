"use client";
import { Suscripcion } from "@/components";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Suscription = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token || user.rol === "Admin") {
      router.push("/ingresar");
    }
  }, []);
  return <Suscripcion />;
};

export default Suscription;
