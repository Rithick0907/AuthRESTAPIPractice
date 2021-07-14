import { Container, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./styles";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

const CustomNavbar = () => {
  const userContext = useContext(UserContext);
  const isLoggedIn = !!userContext.token;

  return (
    <StyledNavbar expand="sm">
      <Container>
        <Navbar.Brand href="/login">Auth Practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
            {isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
            {isLoggedIn && <NavLink to="/logout">Logout</NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default CustomNavbar;
