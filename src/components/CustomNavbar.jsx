import { Button, Container, Nav, Navbar } from "react-bootstrap";

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
            {isLoggedIn && (
              <NavLink to="/profile" className="mt-2">
                Profile
              </NavLink>
            )}
            {isLoggedIn && (
              <Button
                onClick={userContext.logoutHandler}
                variant="outline-danger"
                className="ml-3"
              >
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default CustomNavbar;
