import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "/images/instamd_logo.PNG";

const PublicNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-gray-300">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold d-flex align-items-center gap-2"
        >
          <img
            src={logo}
            alt="InstaMD Logo"
            width="55"
            height="55"
            // className="rounded-circle  border-2 border-primary p-1"
          />
          {/* <span className="fs-5 text-primary d-none d-md-inline">InstaMD</span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="text-center gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/speakers", label: "Speakers" },
              { to: "/events", label: "Events" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                className={({ isActive }) =>
                  `fw-semibold nav-custom ${
                    isActive ? "text-primary active-nav" : "text-dark"
                  }`
                }
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Scoped Styles */}
      <style>{`
  .nav-custom {
    font-size: 1.05rem;
    position: relative;
    transition: color 0.2s ease-in-out;
  }

  .nav-custom::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background-color: #0d6efd;
    transition: width 0.3s ease;
  }

  .nav-custom:hover::after {
    width: 100%;
  }

  .active-nav::after {
    width: 100%;
  }

  .nav-custom:hover {
    color: #0d6efd;
  }

  @media (max-width: 991.98px) {
    .navbar-collapse {
      margin-top: 1rem;
    }

    .nav-custom {
      padding: 0.5rem 0;
      display: block;
    }

    .nav-custom::after {
      bottom: 0;
    }
  }
`}</style>
    </Navbar>
  );
};

export default PublicNavbar;
