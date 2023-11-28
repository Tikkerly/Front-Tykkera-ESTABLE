import Link from "next/link";

const Footer = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="w-full bg-Az1 mt-10 bg-opacity-90">
      <div className="flex justify-between items-center ">
        <h1
          className="avant-garde-regular font-regular text-gray-100 mt-2 p-2 border-t-2 border-b-2 border-dashed  border-Az2"
          style={{ marginLeft: "250px", marginRight: "70px" }}
        >
          Creado por:
        </h1>
        <div
          className="grid grid-cols-3 gap-2 avant-garde-bold font-bold text-gray-100 gap-4 mt-4"
          style={{ justifyItems: "center" }}
        >
          <p
            className="text-sm hover:text-Az2 cursor-pointer"
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/pilarbaroni/"
              )
            }
          >
            Baroni, Pilar
          </p>
          <p
            className="text-sm hover:text-Az2 cursor-pointer"
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/sebastian-gonzalez-conosciuto-2b4221281/"
              )
            }
          >
            Conosciuto, Sebastian
          </p>
          <p
            className="text-sm hover:text-Az2 cursor-pointer"
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/alejo-noel-escobar/"
              )
            }
          >
            Escobar, Alejo
          </p>
          <p
            className="text-sm hover:text-Az2 cursor-pointer"
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/pilar-baroni-3b4650281/"
              )
            }
          >
            Klainbard, Mauricio
          </p>
          <p
            className="text-sm hover:text-Az2 cursor-pointer"
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/pilar-baroni-3b4650281/"
              )
            }
          >
            Lopez, Joel
          </p>
          <p
            className="text-sm hover:text-Az2  cursor-pointer"
            onClick={() =>
              handleLinkClick(
                "https://www.linkedin.com/in/hugo-tamayo/"
              )
            }
          >
            Tamayo, Hugo
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
