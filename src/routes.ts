import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Atividades } from "./components/Atividades";
import { Cultura } from "./components/Cultura";
import { Gastronomia } from "./components/Gastronomia";
import { Hospedagem } from "./components/Hospedagem";
import { Contato } from "./components/Contato";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "atividades", Component: Atividades },
      { path: "cultura", Component: Cultura },
      { path: "gastronomia", Component: Gastronomia },
      { path: "hospedagem", Component: Hospedagem },
      { path: "contato", Component: Contato },
    ],
  },
]);
