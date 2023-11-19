"use client";

import React, { useEffect } from "react";
import Profile from "@/components/profile";
import UserLayout from "./layout";
import { AlertBar } from "@/components";

const UserProfile = () => {
  return (
    <div>
      <AlertBar />
      <Profile />
    </div>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default UserProfile;
