export const MenuItems = [
  //Son los elemntos y sus propiedades del navbar

  {
    title: "Mujeres",
    url: "/mujeres",
    cName: "nav-links mujeres",
  },
  
  {
    title: "Hombres",
    url: "/hombres",
    cName: "nav-links mujeres",
  },
  
  {
    title: "Niños",
    url: "/ninos",
    cName: "nav-links mujeres",
  },
  {
    title: "Información",
    url: "/informacion",
    cName: "nav-links",
   },
  {
    title: "🛒",
    url: false,
    cName: "nav-links not-allowed",
    tooltip: "No disponible",
  },
  {
    title: "Inicia Sesión",
    url: false,
    cName: "nav-links not-allowed",
    tooltip: "No disponible",
  },
];
export const MenuCategorias = [
  {
    title: "Mujeres",
    url: "/mujeres",
    cName: "nav-links mujeres",
    Nav: [{ name: "blusas", path: "/mujeres/blusas" }],
  },
  {
    title: "Hombres",
    url: "/hombres",
    cName: "nav-links hombres",
    Nav: [{ title: "camisas", path: "/hombres/camisas" }],
  },
  {
    title: "Ninos",
    url: "/ninos",
    cName: "nav-links ninos",
    Nav: [{ title: "zapatos", path: "/ninos/zapatos" }],
  },
];
export const MenuDropItems = [
  {
    title: "Blusas",
    path: "/mujeres/blusas",
    classname: "dropdown-link",
  },
  {
    title: "Pamtalones",
    path: "/mujeres/pantalones",
    classname: "dropdown-link",
  },
  {
    title: "Zapatos",
    path: "/mujeres/zapatos",
    classname: "dropdown-link",
  },
];
