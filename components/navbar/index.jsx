import React from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-1dbbee via-0091d2 to-00356f p-4 text-white flex flex-row items-center justify-between">
      <div>
        <Link href="/home">
          <Image src={logotipo} width={250} height={250} alt="Logotipo" />
        </Link>
      </div>
      <div>
        <button className="mr-2 font-bold avant-garde-bold">
          <Link href="/login">Login</Link>
        </button>

        <button className="bg-white text-blue-800 font-bold avant-garde-bold">
          <Link href="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
