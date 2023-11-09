import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <nav className="flex justify-center gap-3 shadow-xl px-4 py-4 items-center text-xl">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-xl text-green-600 font-semibold" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addTree"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-xl text-green-600 font-semibold" : ""
          }
        >
         AddTree
        </NavLink>
        <NavLink
          to="/uploadTree"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-xl text-green-600 font-semibold" : ""
          }
        >
          uploadTree
        </NavLink>
        
      </nav>
    </div>
  );
};

export default Navber;
