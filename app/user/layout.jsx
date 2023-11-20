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
    <div className="flex h-screen mt-40 bg-white">
      <div style={{ background: "gray", width: "5%", position: "fixed", height: "100vh" }} className="flex items-start justify-center">
        <SideBar />
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default UserLayout;
