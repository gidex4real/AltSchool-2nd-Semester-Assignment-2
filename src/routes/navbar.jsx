import { NavLink } from "react-router-dom";
import "../App.css";

export default function NavBar(){
  return(
    <nav className="nav-container">
        <ul className="nav-link">
          <li><CustomNavLink to="/">Home</CustomNavLink></li>
          <li><CustomNavLink to="users">Users</CustomNavLink></li>
        </ul>
      </nav>
  )
}

export function CustomNavLink({ to, children, ...props }) {
  return(
    <NavLink
      to={to}
      className={({isActive}) => isActive ? "active-link" : "normal-link"}
      end
      {...props}
      >
      {children}
    </NavLink>
  )
}