"use client";
import { Suscripcion } from "@/components";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Suscription = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/ingresar");
    }
  }, []);
  return <Suscripcion />;
};

export default Suscription;
