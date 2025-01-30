export const routes = {
  home: "/",

  login: "login",
  register: "register",
  profile: "profile",

  farm: "/farm",

  finances: "/finances",

  division: (id) => `/division/${id}`,
  divisionOptions: (id) => `/division/${id}/options`,

  animals: "/animals",
  activities:"/activities",

  medicines:"/meds",

  summary: "/summary"
};
