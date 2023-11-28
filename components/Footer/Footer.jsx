import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-Az1 mt-10">
      <div className="flex justify-between items-center p-8">
        <h1 className="avant-garde-bold font-bold text-gray-100 mt-2">
          Creado por:
        </h1>
        <div className="grid grid-cols-3 gap-2 avant-garde-bold font-bold text-gray-100 justify-center">
          <Link
            href="https://www.linkedin.com/in/pilar-baroni-3b4650281/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1 className="text-sm hover:text-Az2 hover:underline">Baroni, Pilar</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pilar-baroni-3b4650281/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1 className="text-sm hover:text-Az2 hover:underline">Conoscuito, Sebastian</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pilar-baroni-3b4650281/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1 className="text-sm hover:text-Az2 hover:underline">Lopez, Joel</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pilar-baroni-3b4650281/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1 className="text-sm hover:text-Az2 hover:underline">Tamayo, Hugo</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pilar-baroni-3b4650281/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1 className="text-sm hover:text-Az2 hover:underline">Klainbar, Mauricio</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pilar-baroni-3b4650281/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1 className="text-sm hover:text-Az2 hover:underline">Escobar, Alejo</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
