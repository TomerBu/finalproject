import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { GiNewspaper } from "react-icons/gi";

// yarn add react-bootstrap
const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Brand: Logo + App Name */}
        <NavLink to="/" className="navbar-brand">
          <span className="text-muted ">News App</span>
          &nbsp;
          <GiNewspaper />
        </NavLink>
        {/* Burger: */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Links */}
            <NavLink className="nav-link" to="/news">
              News
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/favorites">
              Favorites
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
