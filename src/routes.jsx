import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Login from "./routes/Login.jsx";
import Logout from "./routes/Logout.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";
import GlobalContextProvider from "./utils/GlobalStateProvider.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <GlobalContextProvider />,
        errorElement: <ErrorComponent />,
        children: [
            {
                path: "/",
                element: <Root />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/login",
                element: <Login />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/logout",
                element: <Logout />,
            },
        ],
    },
]);

export default routes;
