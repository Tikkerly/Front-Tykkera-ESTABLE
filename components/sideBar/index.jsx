import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTicketAlt,
  faCalendarAlt,
  faUserPlus,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Side.module.css"


const SideBar = () => {
  const route = usePathname();
  const isNotOnPageAuth = !(route === "/tickets/id" );

  if (!isNotOnPageAuth) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-center mt-4 ">
      <Link href="/user" className="hover:bg-Az2 hover:px-8 hover:rounded hover:bg-opacity-40" passHref>
  
          <p className={styles.hover} >Perfil</p>
        
        
        <button className=" mt-4  text-gray-100  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faUser} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/tickets" className="hover:bg-Az2 hover:px-8 hover:rounded hover:bg-opacity-40" passHref>
      <p className={styles.hover} >Tikets</p>
        <button className=" mt-4  text-gray-100  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/calendar" className="hover:bg-Az2 hover:px-10 hover:rounded hover:bg-opacity-40" passHref>
      <p className={styles.hover} >Calendario</p>
        <button className=" mt-4  text-gray-100  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/administrar-usuarios" className="hover:bg-Az2 hover:px-40 hover:rounded hover:bg-opacity-40" passHref>
      <p className={styles.hover} >Administrar Tercerceros</p>
        <button className=" mt-4  text-gray-100  text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faUserPlus} className="mr-10" />
        </button>
      </Link>

      <Link href="/user/reportes" className="hover:bg-Az2 hover:px-8 hover:rounded hover:bg-opacity-40" passHref>
      <p className={styles.hover} >Informes</p>
        <button className="mt-4 text-gray-100 text-3xl ml-5 rounded-md items-center">
          <FontAwesomeIcon icon={faFileSignature} className="mr-10" />
        </button>
      </Link>

  


    </div>
  );
};

export default SideBar