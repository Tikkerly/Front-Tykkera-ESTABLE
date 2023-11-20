import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTicketAlt,
  faCalendarAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div className="flex flex-col items-center mt-4 ">
      <Link href="/user" passHref>
        <button className="w-3/6 mt-4 text-white text-3xl rounded-md items-center">
          <FontAwesomeIcon icon={faUser} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/tickets" passHref>
        <button className="w-3/6 mt-4 text-white text-3xl rounded-md items-center">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/calendar" passHref>
        <button className="w-3/6 mt-4 text-white text-3xl rounded-md items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/administrar-usuarios" passHref>
        <button className="w-3/6 mt-4 text-white text-3xl rounded-md items-center">
          <FontAwesomeIcon icon={faUserPlus} className="mr-10" />
        </button>
      </Link>


      <button className=" w-full mr-2 py-1 px-1 p-2 mt-4 avant-garde-bold text-base rounded bg-Az3 text-gray-100-800 font-bold avant-garde-bold transition duration-300 ease-in-out hover:bg-Az3 hover:text-Az4 hover:shadow-lg">
        <Link href="/user/calendar" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2 className="px-4">Calendario</h2>
        </Link>
      </button>


    </div>
  );
};

export default SideBar