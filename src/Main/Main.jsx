import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";


const Main = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
          <Navber></Navber>
          <Outlet></Outlet>
        </div>
    );
};

export default Main;