import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./pages/MainScreen/MainScreen";
import InfoScreen from "./pages/InfoScreen/InfoScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainMenu />
    },
    {
        path: "/info",
        element: <InfoScreen />
    },
    {
        path: "*",
        element: <MainMenu />
    }
])

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;