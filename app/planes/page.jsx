"use client";
import { PaymentView } from "@/components";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/ingresar");
    }
  }, []);
  return (
    <div className="relative mx-auto flex flex-col overflow-hidden h-full justify-around items-center">
      <PaymentView />
    </div>
  );
};

export default Home;
