import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "common/config";
import { NavigationContainer } from "./styles";

function Navigation() {
  const { pathname } = useLocation();
  const isSearch = pathname === routes.HOME || pathname === routes.SEARCH;

  let activeClassName = "active-link";
  return (
    <NavigationContainer>
      <NavLink
        to={routes.SEARCH}
        className={({ isActive }) =>
          isActive || isSearch ? activeClassName : undefined
        }
      >
        Search
      </NavLink>
      <NavLink
        to={routes.FEATURED}
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        Featured
      </NavLink>
    </NavigationContainer>
  );
}

export default Navigation;
