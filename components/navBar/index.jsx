"use client";
import React, { Fragment, useEffect, useState } from "react";
import logotipo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/slices";
import Cookies from "js-cookie";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  const [authPer, setAuthPer] = useState(false);

  useEffect(() => {
    setAuthPer(auth);
  }, [auth]);

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
    <>
      <div
        className="p-4 text-gray flex flex-row items-center justify-between bg-gray-500 bg-opacity-80 fixed w-full top-0 h-20"
        style={{ zIndex: 1000 }}
      >
        <div>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Image
              src={logotipo}
              width={290}
              alt="Logotipo"
              className=" cursor-pointer"
              priority={true}
            />
          </Link>
        </div>

        {authPer ? (
         <div className="flex flex-col items-center justify-center">
            <h2 className="mr-1 py-1 avant-garde-bold text-base text-Az5">{user.username}</h2>
          <div>
            <Link
              href="/user"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="mr-1 py-1 avant-garde-bold text-base text-Az5 transition duration-300 ease-in-out hover:text-Az1 hover:underline cursor-pointer">
                Perfil

              </span>
            </Link>

            <span className="mx-1 avant-garde-bold text-base text-Az5">/</span>

            <Link
              href="/registrarse"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="ml-1 py-1 avant-garde-bold text-base text-Az5 transition duration-300 ease-in-out hover:text-Az1 hover:underline cursor-pointer">
                Registrarse
              </span>
            </Link>
          </div>
        </div>
        ) : (
          <div className="flex items-center">
            <Link
              href="/ingresar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="mr-1 py-1 avant-garde-bold text-base text-Az5 transition duration-300 ease-in-out hover:text-Az1 hover:underline cursor-pointer">
                Ingresar
              </span>
            </Link>

            <span className="mx-1 avant-garde-bold text-base text-Az5">/</span>

            <Link
              href="/registrarse"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="ml-1 py-1 avant-garde-bold text-base text-Az5 transition duration-300 ease-in-out hover:text-Az1 hover:underline cursor-pointer">
                Registrarse
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
