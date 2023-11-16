import { createBrowserRouter } from "react-router-dom";
import { Resumo } from "../pages/Resumo";
import App from "../App";
import { Linguagens } from "../pages/Linguagens";
import { Projetos } from "../pages/Projetos";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Resumo />,
            },
            {
                path: "/linguagens",
                element: <Linguagens />,
            },
            {
                path: "/projetos",
                element: <Projetos />,
            },
        ],
    },
]);
