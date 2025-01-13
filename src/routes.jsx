import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root/Root.jsx";
import { loader as rootLoader } from "./routes/Root/utils.js";
import Login from "./routes/Login.jsx";
import Logout from "./routes/Logout.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // loader: rootLoader,
        errorElement: <ErrorComponent />,
        // HydrateFallback: HydrateFallbackRoot,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorComponent />,
    },
    {
        path: "/logout",
        element: <Logout />,
        errorElement: <ErrorComponent />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorComponent />,
    },
]);

export default routes;
