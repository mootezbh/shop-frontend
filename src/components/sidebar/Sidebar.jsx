/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../services/auth";
import category from "../../services/category";
//TODO: profile pic

const Sidebar = () => {

  let user;
  if ("userc" in localStorage) {
    user = JSON.parse(localStorage.getItem("userc"));
  }

  console.log("userc : ", user);
  const location = useLocation();
  console.log(location.pathname);
  console.log(user?.picture);
  const [data, setdata] = useState();
  const getCat = () => {
    category
      .getAll()
      .then((res) => {
        setdata(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCat();
  }, []);
  console.log(data);
  const navigate = useNavigate();
  const refresh_token = JSON.parse(localStorage.getItem("refresh_token"));
  const handlelogout = () => {
    auth
      .logout(refresh_token)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    localStorage.clear();
    navigate("/");
  };
  return (
    <div
      className="container-fluid mb-5"
      style={{ position: "absolute", zIndex: 999 }}
    >
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav
            className={`collapse ${
              location.pathname == "/" ? " show" : ""
            } navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0`}
            id="navbar-vertical"
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{ height: 410, backgroundColor: "white" }}
            >
              {data?.map((item) => {
                if (item.subcategory.length > 0) {
                  return (
                    <div className="nav-item dropdown">
                      <a href="#" className="nav-link" data-toggle="dropdown">
                        {item.name}{" "}
                        <i className="fa fa-angle-down float-right mt-1" />
                      </a>
                      <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                        {item.subcategory.map((sub) => {
                          return (
                            <a
                              href
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                            >
                              {sub.name}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <a
                      href
                      className="nav-item nav-link"
                      style={{ cursor: "pointer" }}
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to="/">
                  <a
                    className={`nav-item nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
                <Link to="/shop">
                  <a
                    className={`nav-item nav-link ${
                      location.pathname === "/shop" ? "active" : ""
                    }`}
                  >
                    Shop
                  </a>
                </Link>
              </div>
              {user == null ? (
                <div className="navbar-nav ml-auto py-0">
                  <Link to="/login">
                    <a className="nav-item nav-link">Login</a>
                  </Link>
                  <Link to="/signup">
                    <a className="nav-item nav-link">Register</a>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="col-sm-9 col-4 text-right flex-header-menu justify-content-end">
                    <div className="mr-0">
                      <a
                        className
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src={
                            user?.picture
                              ? `http://localhost:8000/${user?.picture}`
                              : "//placehold.it/100"
                          }
                          alt={user?.name}
                          className="rounded-circle"
                          width="40px"
                          height="40px"
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right mt-13"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <Link to="/profile">
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-user pr-2" /> Profile
                          </a>
                        </Link>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-th-list pr-2" /> Tasks
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          <i className="fa fa-book pr-2" /> Projects
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="navbar-nav ml-auto py-0">
                    <a
                      href="#"
                      className="nav-item nav-link"
                      onClick={handlelogout}
                    >
                      Logout
                    </a>
                  </div>
                </>
              )}
            </div>
          </nav>
          {location.pathname === "/" && (
            <div
              id="header-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" style={{ height: 410 }}>
                  <img
                    className="img-fluid"
                    src={`http://localhost:8000/pc.jpeg`}
                    alt="Image"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        10% Off Your First Order
                      </h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                        Laptops
                      </h3>
                      <a href className="btn btn-light py-2 px-3">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" style={{ height: 410 }}>
                  <img
                    className="img-fluid"
                    src="http://localhost:8000/watch.jpeg"
                    alt="Image"
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        10% Off Your First Order
                      </h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                        Reasonable Price
                      </h3>
                      <a href className="btn btn-light py-2 px-3">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#header-carousel"
                data-slide="prev"
              >
                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                  <span className="carousel-control-prev-icon mb-n2" />
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#header-carousel"
                data-slide="next"
              >
                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                  <span className="carousel-control-next-icon mb-n2" />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
