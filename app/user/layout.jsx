"use client";
import React, { useEffect } from "react";
import SideBar from "@/components/sideBar";
import styles from "./styles.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const UserLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/ingresar");
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
