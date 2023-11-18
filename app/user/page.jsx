"use client";

import React, { useEffect } from "react";
import Profile from "@/components/profile";
import UserLayout from "./layout";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { serviceAgents, technicians, finalClients } from "@/redux/slices";

const UserProfile = () => {
  const dispatch = useDispatch();
  
  const token = Cookies.get("token");

  const servAgents = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/serviceagent", {
      headers: {
        "x-token": token,
      },
    });
    dispatch(serviceAgents(data));
  };
  const techs = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/technician", {
      headers: {
        "x-token": token,
      },
    });
    dispatch(technicians(data));
  };
  const finalCli = async () => {
    const { data } = await axios("http://localhost:3001/api/v1/finalclient", {
      headers: {
        "x-token": token,
      },
    });
    dispatch(finalClients(data));
  };

  useEffect(() => {
    servAgents();
    techs();
    finalCli();
  }, []);

  return (
    <div>
      <Profile />
    </div>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default UserProfile;
