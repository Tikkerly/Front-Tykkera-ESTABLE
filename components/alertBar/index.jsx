"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";
import { USER_ROUTES } from "@/routes/routes";
import Link from "next/link";
import styles from './styles.module.css'

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO);

const AlertBar = () => {
  const [userPersist, setUserPersist] = useState({});
  const [preferenceId, setPreferenceId] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleOnReady = () => {
    setIsReady(true);
  };

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady}
      />
    );
  };

  useEffect(() => {
    setUserPersist(user);
  }, []);

  const alertClasses = {
    success: "bg-Az1",
    error: "bg-Az2",
    warning: "bg-Az3",
    // Agrega más clases según tus necesidades (p. ej., info, etc.)
  };

  const type = "warning";

  const textColor = type === "warning" ? "text-black" : "text-white";

  return (
    <div
      className={`${styles.container} ${alertClasses[type]} ${textColor}`}
      role="alert"
    >
      <p className="avant-garde-regular font-regular text-center">
        Tu licencia de prueba vence el: {userPersist.trialEndDate}
      </p>
      <div className="">
        <Link
          href="/Suscripcion"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button className="avant-garde-bold font-bold text-gray px-6 py-2 rounded-full flex justify-center bg-gray-100 shadow-xl bg-opacity-70 transition duration-300 hover:bg-opacity-100">
            Comprar licencia
          </button>
        </Link>
        {renderCheckoutButton(preferenceId)}
      </div>
    </div>
  );
};

export default AlertBar;
