import axios from "axios";
import Cookies from "js-cookie";

const closureHandleSubmit = (
  route,
  payload,
  dispatch,
  action,
  setMessage,
  setLoading,
  router
) => {
  return async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(route, payload);
      dispatch(action(data.user));
      if (data.token) {
        Cookies.set("token", data.token);
        Cookies.set("uid", data.user._id);
      }
      router.push("/");
    } catch (error) {
      setLoading(false);
      setMessage(
        "No se ha podido iniciar sesión. Revise si ha ingresado bien los campos o intente más tarde."
      );
    }
  };
};

export default closureHandleSubmit;
