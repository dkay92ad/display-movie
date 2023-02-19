import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "common/config";
import { NavigationContainer } from "./styles";

function Navigation() {
  const location = useLocation();
  const isSearch =
    location.pathname === routes.HOME || location.pathname === routes.SEARCH;

  let activeClassName = "active-link";
  return (
    <NavigationContainer>
      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive || isSearch ? activeClassName : undefined
        }
      >
        Search
      </NavLink>
      <NavLink
        to="/featured"
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Featured
      </NavLink>
    </NavigationContainer>
  );
}

export default Navigation;
