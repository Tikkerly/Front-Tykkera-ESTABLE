"use client";
import React from "react";
import SideBar from "@/components/sideBar";
import styles from './styles.module.css'

const UserLayout = ({ children }) => {
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
