import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Login, { action as loginAction } from "./routes/Login.jsx";
import Logout from "./routes/Logout.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";
import GlobalContextProvider from "./utils/GlobalStateProvider.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";

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
                action: loginAction,
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
            {
                path: "/posts/new",
                action: newPostAction,
                element: <NewPost />,
            },
        ],
    },
]);

export default routes;
