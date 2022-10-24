import { useContext } from "react";
import { NavLink } from "../UlElements/NavLink";

import { AuthContext } from "../../context/auth-context";

import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink href="/">ALL USERS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink href="/u1/places">MY PLACE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink href="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink href="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
