import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { clearUser } from "../actions";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(clearUser());
    history.push("/login");
  };
  const loginUser = useSelector((state) => state?.data?.userinfo);
  const isLoggedIn = useSelector((state) => state?.data?.isLoggedIn);

  return (
    <div className="navbar-fixed">
      <Navbar className="bg-dark " expand="lg">
        <Container>
          <Navbar.Brand href="#" className="text-white">
            Ecommerce-Clothing
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {isLoggedIn && (
                <>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    Home{" "}
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/cart"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    <FaShoppingCart /> MyCart{" "}
                  </Nav.Link>

                  <Nav.Link>
                    <div
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      <FaUser />
                      {loginUser?.username}{" "}
                    </div>
                  </Nav.Link>
                </>
              )}

              {!isLoggedIn && (
                <Nav.Link
                  as={Link}
                  to="/register"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Sign up
                </Nav.Link>
              )}

              {!isLoggedIn ? (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-white mx-3"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  Login{" "}
                </Nav.Link>
              ) : (
                <Nav.Link
                  className="text-white "
                  onClick={(e) => handleLogout(e)}
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
