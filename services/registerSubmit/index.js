import axios from "axios";
import Swal from "sweetalert2";
import { USER_ROUTES } from "@/routes/routes";

const registerSubmit = (route, payload, router) => {
  return async (event) => {
    event.preventDefault();

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
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/useractivator");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error durante el registro",
        text: error.response.data.message,
      });
    }
  };
};

export default registerSubmit;
