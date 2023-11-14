import Link from "next/link";

const SideBar = () => {
  return (
    <div
      style={{ background: "#0576e6e3" }}
      className="flex flex-col items-center mt-4"
    >
      <button className="w-full mr-2 py-1 px-1 mt-4 avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user">
          <h2 className="px-4">Perfil</h2>
        </Link>
      </button>

      <button className=" w-full mr-2 py-1 px-1 mt-4 avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/tickets">
          <h2 className="px-4">Tickets</h2>
        </Link>
      </button>

      <button className=" w-full mr-2 py-1 px-1 p-2 mt-4 avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/calendar">
          <h2 className="px-4">Calendario</h2>
        </Link>
      </button>
      <button className=" w-full mr-2 py-1 px-1 p-2 mt-4 avant-garde-bold text-base rounded bg-Az3 text-white-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/manage">
          <h2 className="px-4">Users</h2>
        </Link>
      </button>
    </div>
  );
};

export default SideBar;
