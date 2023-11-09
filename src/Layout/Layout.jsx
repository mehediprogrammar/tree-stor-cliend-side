import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import AddTree from "../Pages/AddTree/AddTree";
import Home from "../Pages/Home/Home";
import UplodTree from "../Pages/UplodTree/UplodTree";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addTree',
                element:<AddTree></AddTree>
            },
            {
                path:'/uploadTree',
                element:<UplodTree></UplodTree>
            }
        ]
    }
])

export default router;