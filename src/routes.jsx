import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Login, { action as loginAction } from "./routes/Login.jsx";
import Logout from "./routes/Logout.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import ErrorComponent from "./components/ErrorComponent.jsx";
import GlobalContextProvider from "./utils/GlobalStateProvider.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import Post, { loader as postLoader } from "./routes/Post.jsx";
import PostEdit, {
    loader as postEditLoader,
    action as postEditAction,
} from "./components/PostEdit.jsx";
import Signup, { action as signupAction } from "./routes/Signup.jsx";

const routesConfig = [
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
                path: "/signup",
                element: <Signup />,
                errorElement: <ErrorComponent />,
                action: signupAction,
            },
            {
                path: "/posts/new",
                element: <NewPost />,
                action: newPostAction,
            },
            {
                path: "/posts/:postId",
                element: <Post />,
                loader: postLoader,
                errorElement: <ErrorComponent />,
            },
            {
                path: "/posts/:postId/edit",
                element: <PostEdit />,
                loader: postEditLoader,
                action: postEditAction,
                errorElement: <ErrorComponent />,
            },
        ],
    },
];

const routes = createBrowserRouter(routesConfig);

export default routesConfig;
export { routes };
