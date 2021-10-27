import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/profile" className="item">
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className="item">
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className="item">
          friends
        </NavLink>
      </div>
      <div>
        <a className="item" href="u">
          Music
        </a>
      </div>
      <div>
        <a className="item" href="i">
          Settings
        </a>
      </div>
    </nav>
  );
};
export default Nav;
