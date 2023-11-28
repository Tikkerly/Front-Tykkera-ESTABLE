import axios from "axios";
import Swal from "sweetalert2";

const registerSubmit = (route, payload, router, disabled) => {
  return async (event) => {
    event.preventDefault();

    disabled(true);

    const formData = new FormData();

    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    formData.append("img", payload.img);

    try {
      const response = await axios.post(route, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Importante para enviar archivos
        },
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario No Activado, revisa el correo que te enviamos",
        confirmButtonColor: "#00356f",
        confirmButtonText: "Cerrar",
      });
      router.push("/ingresar")
    } catch (error) {
      disabled(false);
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error durante el registro",
        confirmButtonColor: "#00356f",
        confirmButtonText: "Cerrar",
        text: error.message,
      });
    }
  };
};

export default registerSubmit;
