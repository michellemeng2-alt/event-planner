import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../AppContext";

const Navigation = () => {
  const { user, logout } = useContext(AppContext);

  return (
    <Navbar fixed="top" bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "#ff85a2", fontWeight: "bold" }}
        >
          <span role="img" aria-label="cherry blossom">
            🌸
          </span>{" "}
          Event Planner
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Always visible links */}
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/help">
              Help
            </Nav.Link>

            {/* Links shown ONLY when LOGGED IN */}
            {user ? (
              <>
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="ms-2 rounded-pill"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              /* Links shown ONLY when LOGGED OUT */
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;