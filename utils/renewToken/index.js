import Cookies from "js-cookie";

export const renewToken = async () => {
  const token = Cookies.get("token");
  //if (!token) return dispatch(onLogout());

  try {
    const { data } = await calendarApi.get("auth/renew");
    localStorage.setItem("token", data.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    dispatch(onLogin({ name: data.name, uid: data.uid }));
  } catch (error) {
    localStorage.clear();
    dispatch(onLogout());
  }
};
