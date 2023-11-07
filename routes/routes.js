import config from "@/config/config";

const USER_ROUTES = {
    loginUser: `${config.URL_BACK}/loginUser`,
    registerUser: `${config.URL_BACK}/registerUser`,
    editUser: `${config.URL_BACK}/editUser`,
}

export {
    USER_ROUTES
}