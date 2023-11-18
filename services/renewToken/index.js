import axios from "axios";

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
    } catch (error) {
      setLoading(false);
      router.push("/ingresar");
    }
  };
};

export default renewToken;
