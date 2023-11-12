import React from "react";
import Profile from "@/components/profile";
import UserLayout from "./layout";
import { Navbar } from "@/components";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <Profile />
    </div>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};

export default UserProfile;
