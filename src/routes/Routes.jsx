import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddBook from "../pages/AddBook";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import PrivateRoutes from "./PrivateRoutes";
import CategoryDetails from "../components/CategoryDetails";
import BookDetails from "../components/BookDetails";
import UpdateBook from "../components/UpdateBook";

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
                element: <PrivateRoutes><AddBook /></PrivateRoutes>
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateBook /></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
            },
            {
                path: '/allBooks',
                element: <PrivateRoutes><AllBooks /></PrivateRoutes>
            },
            {
                path: '/bookDetails/:id',
                element: <PrivateRoutes><BookDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
            },
            {
                path: '/borrowed',
                element: <PrivateRoutes><BorrowedBooks /></PrivateRoutes>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/borrow`)
            },
            {
                path: '/categoryDetails',
                element: <PrivateRoutes><CategoryDetails /></PrivateRoutes>
            },
        ]
    },
]);

export default router;