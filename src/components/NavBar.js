import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/movies">Movies</NavLink>
    <NavLink exact to="/directors">Directors</NavLink>
    <NavLink exact to="/actors">Actors</NavLink>
  </nav>
}
  </div>;
}

export default NavBar;
