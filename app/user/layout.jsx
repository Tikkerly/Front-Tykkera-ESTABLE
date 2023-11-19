"use client";
import React from "react";
import SideBar from "@/components/sideBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices";

const UserLayout = ({ children }) => {
  //const dispatch = useDispatch();

  //useEffect(() => {
  //   const savedState = localStorage.getItem("reduxState");

  //   if (savedState) {
  //     const parsedState = JSON.parse(savedState);
  //     const savedUser = parsedState.user;

  //     if (savedUser) {
  //       dispatch(login(savedUser));
  //     }
  //   }
  // }, []);
  return (
    <div className="flex h-screen mt-40">
      <div style={{ background: "#0576e6e3", width: "20.2%" }}>
        <SideBar />
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default UserLayout;
