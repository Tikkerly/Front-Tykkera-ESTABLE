'use client'
import React, { Fragment, useState } from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { ModalLogin, ModalRegister } from "@/components";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  return (
    <Fragment>
      <div className="bg-gradient-to-r from-1dbbee via-0091d2 to-00356f p-4 text-white flex flex-row items-center justify-between">
        <div>
          <Link href="/">
            <Image src={logotipo} width={250} height={250} alt="Logotipo" />
          </Link>
        </div>
        <div>
          <button className="mr-2 font-bold avant-garde-bold" onClick={() => setShowLoginModal(true)}>Ingresar</button>

          <button className="mr-2 font-bold avant-garde-bold" onClick={() => setShowRegisterModal(true)}>Registrarse</button>
        </div>
      </div>
      <ModalLogin isVisible={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <ModalRegister isVisible={showRegisterModal} onClose={() => setShowRegisterModal(false)}/>
    </Fragment>
  );
};

export default Navbar;
