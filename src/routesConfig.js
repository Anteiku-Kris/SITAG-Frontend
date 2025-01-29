export const routes = {
  home: "/",

  login: "login",
  register: "register",
  profile: "profile",

  farm: "/farm",

  finances: "/finances",

  //Sub-enrutamiento
  division: (id) => `/division/${id}`,
  divisionOptions: (id) => `/division/${id}/options`,
};
