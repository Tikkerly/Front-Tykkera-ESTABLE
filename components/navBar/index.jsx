"use client";
import React, { Fragment, useState } from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { ModalRegister } from "@/components";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const route = usePathname();
  const isNotOnPageAuth = !(route === '/ingresar' || route === '/registrarse')
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  if (!isNotOnPageAuth) {
    return (
      <></>
    )
  }
  return (
    <Fragment>
      <div
        style={{ background: "#0576e6e3" }}
        className="p-4 text-white flex flex-row items-center justify-between shadow-lg"
      >
        <div>
          <Link href="/">
            <Image
              src={logotipo}
              width={250}
              height={250}
              alt="Logotipo"
              className=" bg-white bg-opacity-75 shadow-lg rounded transition duration-300 ease-in-out hover:bg-white hover: bg-opacity-85"
            />
          </Link>
        </div>
        <div>
          <Link href='/ingresar'>
            <button
              className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
            >
              Ingresar
            </button>
          </Link>


          <button
            className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
            onClick={() => setShowRegisterModal(true)}
          >
            Registrarse
          </button>

        </div>
      </div>
      <ModalRegister
        isVisible={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      />
    </Fragment>
  );
};

export default Navbar;
