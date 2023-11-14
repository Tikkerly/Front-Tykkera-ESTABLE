import config from "@/config/config";

const USER_ROUTES = {
  loginUser: `${config.URL_BACK}/auth/login`,
  getUser: `${config.URL_BACK}/user`,
  registerUser: `${config.URL_BACK}/user/registeruser`,
  editUser: `${config.URL_BACK}/user/edituser`,
  deleteUser: `${config.URL_BACK}/user/deleteuser`,
  renew: `${config.URL_BACK}/auth/renew`,
  img: `${config.URL_BACK}/upload`,
  forgetPassword: `${config.URL_BACK}/user/`,
};

export { USER_ROUTES };
