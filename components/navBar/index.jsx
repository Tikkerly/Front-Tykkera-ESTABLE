"use client";
import React, { Fragment, useState } from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices";
import Cookies from "js-cookie";

const Navbar = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  const dispatch = useDispatch();
  const route = usePathname();
  const isNotOnPageAuth = !(route === "/ingresar" || route === "/registrarse");

  const handleClick = (e) => {
    e.preventDefault();
    Cookies.remove("token");
    dispatch(logout());
    router.push("/ingresar");
  };
  if (!isNotOnPageAuth) {
    return <></>;
  }
  return (
    <Fragment>
      <div


        className="p-4 text-gray flex flex-row items-center justify-between bg-gray-500 bg-opacity-80 "
      >
        <div>
          <Link href="/">
            <Image
              src={logotipo}
              width={290}
              alt="Logotipo"
              className=" cursor-pointer shadow-xl"
              priority={true}
            />
          </Link>
        </div>
        {auth ? (
          <div>
            <Link href="/user">
              <button className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-gray font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
                Perfil
              </button>
            </Link>

            <button
              onClick={handleClick}
              className="mr-2 py-1 px-1  avant-garde-bold text-base rounded bg-Az3 text-gray font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg"
            >
              Logout
            </button>
          </div>
        ) : (
        <div className="flex items-center">
          <Link href="/ingresar">
            <span className="mr-1 py-1 avant-garde-bold text-base text-gray transition duration-300 ease-in-out hover:text-Az5 hover:underline cursor-pointer">Ingresar</span>
          </Link>

          <span className="mx-1 avant-garde-bold text-base text-gray">/</span>

          <Link href="/registrarse">
            <span className="ml-1 py-1 avant-garde-bold text-base text-gray transition duration-300 ease-in-out hover:text-Az5 hover:underline cursor-pointer">Registrarse</span>
          </Link>
        </div>
        )}
      </div>
    </Fragment>
  );
};

export default Navbar;
