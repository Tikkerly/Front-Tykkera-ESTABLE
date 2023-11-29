"use client";

import React, { useEffect, useState } from "react";
import Profile from "@/components/profile";
import UserLayout from "./layout";
import { AlertBar } from "@/components";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";
import Cookies from "js-cookie";

const UserProfile = () => {
  const oldUser = useSelector((state) => state.auth.user);
  const [user, setUser] = useState(oldUser);
  const token = Cookies.get("token");

  const userCall = async () => {
    const { data } = await axios.post(`${USER_ROUTES.init}/user/${user._id}`, {
      headers: {
        "x-token": token,
      },
    });
    setUser(data);
  };

  useEffect(() => {
    setUser(oldUser);
    userCall();
  }, []);

  return (
    <div className={styles.containerProfile}>
      {user.isPaid === false ? <AlertBar /> : null}
      <Profile />
    </div>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default UserProfile;
