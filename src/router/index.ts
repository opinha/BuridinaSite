import { createBrowserRouter } from "react-router";
import { RootLayout } from "../components/layout/RootLayout";
import { Home } from "../pages/Home";
import { Atividades } from "../pages/Atividades";
import { Cultura } from "../pages/Cultura";
import { Gastronomia } from "../pages/Gastronomia";
import { Hospedagem } from "../pages/Hospedagem";
import { Contato } from "../pages/Contato";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
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
