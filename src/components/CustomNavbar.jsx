import { Container, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { StyledNavbar } from "./styles";

const CustomNavbar = () => {
  return (
    <StyledNavbar expand="sm">
      <Container>
        <Navbar.Brand href="/login">Auth Practice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default CustomNavbar;
