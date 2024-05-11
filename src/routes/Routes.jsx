import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/addBook',
                element: <AddBook />
            },
            {
                path: '/allBooks',
                element: <AllBooks />,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`)
            },
        ]
    },
]);

export default router;