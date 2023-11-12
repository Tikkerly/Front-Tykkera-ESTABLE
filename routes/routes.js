import config from "@/config/config";

const USER_ROUTES = {
  loginUser: `${config.URL_BACK}/auth/login`,
  registerUser: `${config.URL_BACK}/user/registeruser`,
  editUser: `${config.URL_BACK}/user/edituser`,
  renew: `${config.URL_BACK}/auth/renew`,
};

export { USER_ROUTES };
