"use client";
import React, { useEffect, useState } from "react";
import SideBar from "@/components/sideBar";
import styles from "./styles.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const UserLayout = ({ children }) => {
  const [newUser, setNewUser] = useState({});
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    setNewUser(user);
    const token = Cookies.get("token");
    if (!token) {
      router.push("/ingresar");
    }
  }, []);

  useEffect(() => {
    if (user.rol === "Admin") {
      router.push("/administrador");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.profile}>{children}</div>
    </div>
  );
};

export default UserLayout;
