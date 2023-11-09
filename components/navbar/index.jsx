import React from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-Az3 via-Az2 to-Az1 p-4 text-white flex flex-row items-center justify-between shadow-lg">
      <div>
        <Link href="/home">
          <Image src={logotipo} width={250} height={250} alt="Logotipo" />
        </Link>
      </div>
      <div>
        <button className="mr-2 py-1 px-1 font-bold avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
          <Link href="/login">Login</Link>
        </button>

        <button className="mr-2 py-1 px-1 font-bold avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
          <Link href="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
