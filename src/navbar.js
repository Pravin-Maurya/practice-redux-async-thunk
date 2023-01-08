import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav">
        <NavLink
          to="login"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Login
        </NavLink>
        <NavLink
          to="register"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Register
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Welcome
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
