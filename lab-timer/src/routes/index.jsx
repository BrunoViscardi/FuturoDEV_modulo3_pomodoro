import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/home'
import { HistoryPage } from '../pages/history'
import { Layout } from '../template'
import { LoginPage } from "../pages/login";

export const routes = createBrowserRouter([
    {
        path: '/', // caminho
        element: <Layout />, // componente que vai renderizar em tela
        // nested routes
        children: [
            {
                path: '/login', // caminho da pagina,
                element: <LoginPage />
            },
            {
                path: '/', // caminho da pagina,
                element: <HomePage />
            },
            {
                path: '/historico',
                element: <HistoryPage />
            }
        ]
    }
])