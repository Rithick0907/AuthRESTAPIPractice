import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: dodgerblue;
  & a {
    color: black;
    margin-left: 15px;
  }
`;
