import React from "react";
import { ChangePassword } from "@/components";

const Page = ({ params }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center bg-blue bg-pattern">
      <ChangePassword token={params} />
    </div>
  );
};

export default Page;
