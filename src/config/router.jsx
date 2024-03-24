import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from "react-router-dom";
import Home from "../views/Home";
import History from "../views/History";
import Contact from "../views/contact";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home />,
    },
    {
        path: "/history",
        element:<History />,
    },
    {
        path: "/contact",
        element:<Contact />,
    },
]);
function Router() {

    return <RouterProvider router={router} />
}


export default Router