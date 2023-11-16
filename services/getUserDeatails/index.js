import axios from "axios";
import Cookies from "js-cookie";

const handleUserDetails = (
  route,
  payload,
  dispatch,
  action
) => {
  return async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(route, payload);
      dispatch(action(data.user));
      if (data.token) {
        Cookies.set("token", data.token);
        Cookies.set("uid", data.user._id);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default handleUserDetails;
