import axios from "axios";
import Swal from "sweetalert2";

const registerSubmit = (route, payload, router) => {
  console.log(payload)
    return async (event) => {
        
    event.preventDefault();

    // if (formData.password !== formData.confirmPassword) {
    //   alert("Las contraseñas no coinciden");
    //   return;
    // }

    // setFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   personType: "",
    //   phone: "",
    //   clientId: "",
    //   img: null,
    // });

    try {
      const response = await axios.post(route, payload);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/')
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Error durante el registro",
        text: error.response.data.message,
      });
    }
  };
}


export default registerSubmit