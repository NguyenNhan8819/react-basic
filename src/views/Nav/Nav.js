import react from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends react.Component {
  render() {
    return (
      <div className="topnav">
        {/* <Link className="active" to="/">
          Home
        </Link>
        <Link className="active" to="/todo">
          Todos
        </Link>
        <Link className="active" to="/about">
          About
        </Link> */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/todo"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Todos
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Users
        </NavLink>
      </div>
    );
  }
}

export default Nav;
