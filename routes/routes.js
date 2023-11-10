import config from "@/config/config";

const USER_ROUTES = {
  loginUser: `${config.URL_BACK}/user/loginuser`,
  registerUser: `${config.URL_BACK}/user/registeruser`,
  editUser: `${config.URL_BACK}/user/edituser`,
};

export { USER_ROUTES };
