import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About";
import Book from "../components/Book";

const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path: "/book",
            element: <Book/>
        }
    ]
},
]);

export default router;