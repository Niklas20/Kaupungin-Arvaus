import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./pages/MainScreen/MainScreen";
import InfoScreen from "./pages/InfoScreen/InfoScreen";
import GameScreen from "./pages/GameScreen/GameScreen";
import EndScreen from "./pages/EndScreen/EndScreen";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainMenu />
            },
            {
                path: "/info",
                element: <InfoScreen />
            },
            {
                path: "/game",
                element: <GameScreen />
            },
            {
                path: "/end",
                element: <EndScreen />
            },
            {
                path: "*",
                element: <MainMenu />
            }
        ]
    }
])

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;