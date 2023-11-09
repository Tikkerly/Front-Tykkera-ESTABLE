import React from 'react';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-full text-center bg-white hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 mb-2 mt-8">
        <Link href="/user">
          <h2>Perfil</h2>
        </Link>
      </button>

      <button className="w-full text-center bg-white hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 mb-2">
        <Link href="/user/tickets" >
          <h2>Tickets</h2>
        </Link>
      </button>
      <button className="w-full text-center bg-white hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-2 mb-2">
        Calendario
      </button>
    </div>
  );
};

export default SideBar;
