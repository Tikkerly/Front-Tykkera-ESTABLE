import axios from "axios";
import Cookies from "js-cookie";

const renewToken = (
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
      const { data } = await axios.get(route, payload);
      //dispatch(action(data.user));
      //   if (data.token) {
      //     Cookies.set("token", data.token);
      //   }
    } catch (error) {
      setLoading(false);
      router.push("/ingresar");
    }
  };
};

export default renewToken;
