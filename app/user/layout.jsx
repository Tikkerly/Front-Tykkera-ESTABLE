"use client";
import React from "react";
import SideBar from "@/components/sideBar";

const UserLayout = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div style={{ background: "#0576e6e3", width: "20.2%" }}>
        <SideBar />
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default UserLayout;
