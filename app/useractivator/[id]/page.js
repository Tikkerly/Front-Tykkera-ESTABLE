import React from "react";
import { UserActivation } from "@/components";

const Page = ({ params }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pattern">
      <UserActivation id={params} />
    </div>
  );
};

export default Page;
