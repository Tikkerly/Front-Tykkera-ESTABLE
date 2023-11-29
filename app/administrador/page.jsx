"use client";
import { UsersView } from "@/components";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token || user.rol === "Client") {
      router.push("/user");
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <UsersView />
    </div>
  );
};

export default AdminPage;
