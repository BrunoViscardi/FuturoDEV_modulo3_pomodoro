import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '../pages/home'
import { HistoryPage } from '../pages/history'
import { Layout } from '../template'
import { LoginPage } from "../pages/login";
import { Navigate } from "react-router-dom";



let isAutenticado = JSON.parse(localStorage.getItem("isAutenticado")) || false
const PrivateRoute = ({ children }) => {
    return isAutenticado ? [children] : <Navigate to="/login" />
}



export const routes = createBrowserRouter([
    {
        path: '/login', // caminho da pagina,
        element: <LoginPage />
    },
    {
        path: '/', // caminho
        element: (
            <PrivateRoute>
                <Layout />
            </PrivateRoute>
        ), // componente que vai renderizar em tela
        // nested routes
        children: [
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