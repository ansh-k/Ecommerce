import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBoxes, FaCartPlus, FaHome, FaPlus, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
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
    <div className="navbar-fixed main-nav bg-warning h-100">
      <Navbar className="flex-wrap">
        <Container>
          <Navbar.Brand href="/" className="text-white d-flex align-items-center  border-bottom px-0 py-3 mx-0 my-2 w-100">
          <div className="bg-white text-warning rounded-circle d-flex align-items-center justify-content-center logo-icon"> 
          <FaCartPlus />
          </div>
          <span className="ms-1"> <h6 className="mb-0">Ecommerce Clothing </h6></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-start text-capitalize"
          >
            <Nav className="flex-column w-100 py-2">
              {isLoggedIn && (
                <>
                  <Nav.Link
                    as={Link}
                    to="/"
                    className="text-white px-0 py-2 active"
                    style={{ textDecoration: "none" }}
                  >
                   <FaHome />
                    <span> home</span> 
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/cart"
                    className="text-white px-0 py-2"
                    style={{ textDecoration: "none" }}
                  >
                    <FaShoppingCart /> <span className="ms-1">MyCart{" "}</span>
                  </Nav.Link>

                  <Nav.Link
                    as={Link}
                    to="/orders"
                    className="text-white px-0 py-2"
                    style={{ textDecoration: "none" }}
                  ><FaBoxes />
                    <span className="ms-1">MyOrder{" "} </span>
                  </Nav.Link>

                  <Nav.Link className="text-white px-0 py-2">
                    <div
                      style={{ textDecoration: "none" }}
                    >
                      <FaUser />
                      <span className="ms-1">{loginUser?.username}{" "}</span>
                    </div>
                  </Nav.Link>
                </>
              )}

              {!isLoggedIn && (
                <Nav.Link
                  as={Link}
                  to="/register"
                  className="text-white px-0 py-2 "
                  style={{ textDecoration: "none" }}
                >
                  <FaPlus/>
                  <span className="ms-1">Sign up</span>
                </Nav.Link>
              )}

              {!isLoggedIn ? (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-white px-0 py-2"
                  style={{ textDecoration: "none" }}
                >
                  <FaSignInAlt />
                  <span className="ms-1">Sign In</span>
                </Nav.Link>
              ) : (
                <Nav.Link
                  className="text-white px-0 py-2 "
                  onClick={(e) => handleLogout(e)}
                  style={{ textDecoration: "none" }}
                >
                  <FaSignOutAlt />
                  <span className="ms-1">Sign Out </span>
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
