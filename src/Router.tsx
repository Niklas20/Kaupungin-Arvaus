import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./pages/MainScreen/MainScreen";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainMenu />,
        children: [
            {
                path: "/",
                element: <MainMenu />
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