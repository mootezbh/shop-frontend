/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import category from "../../services/category";
import Product from "../../services/product";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState();
  const [isLoading, setLoading] = useState(true);
  const [prod, setproduct] = useState([]);
  const getCat = () => {
    category
      .getAll()
      .then((res) => {
        setdata(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    Product.getAll()
      .then((res) => {
        setproduct(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const newArr = prod?.slice(prod.length - 8, prod.length + 1);

  useEffect(() => {
    getCat();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const calcul = (subcategory) => {
    console.log("sub", subcategory);
    var sum = 0;
    subcategory.forEach((element) => {
      sum = sum + element.product.length;
    });
    return sum;
  };

  console.log(data);
  return (
    <div>
      {/* Featured Start */}
      <div className="container-fluid pt-5" style={{ marginTop: "470px" }}>
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-check text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center border mb-4"
              style={{ padding: 30 }}
            >
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Featured End */}
      {/* Categories Start */}
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {data?.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 pb-1">
                <div
                  className="cat-item d-flex flex-column border mb-4"
                  style={{ padding: 30 }}
                >
                  <p className="text-right">
                    {calcul(item.subcategory)} Products
                  </p>
                  <a
                    href
                    className="cat-img position-relative overflow-hidden mb-3"
                  >
                    <img
                      className="img-fluid"
                      src={"http://localhost:8000/" + item.img}
                      alt
                    />
                  </a>
                  <h5 className="font-weight-semi-bold m-0">{item.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Categories End */}

      {/* Offer Start */}
      <div className="container-fluid offer pt-5">
        <div className="row px-xl-5">
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img src="img/offer-1.png" alt />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Spring Collection
                </h1>
                <a href className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-4">
            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img src="img/offer-2.png" alt />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 className="mb-4 font-weight-semi-bold">
                  Winter Collection
                </h1>
                <a href className="btn btn-outline-primary py-md-2 px-md-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End */}

      {/* Products Start */}
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Just Arrived</span>
          </h2>
        </div>
        <div className="row px-xl-5 pb-3">
          {newArr.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="card product-item border-0 mb-4">
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img
                      className="img-fluid w-100"
                      src={"http://localhost:8000/" + item.gallery[0].name}
                      alt
                    />
                  </div>
                  <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{item.name}</h6>
                    <div className="d-flex justify-content-center">
                      <h6>${item.price}</h6>
                      {/*<h6 className="text-muted ml-2">
                    <del>$123.00</del>
          </h6>*/}
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to={`/detail/${item._id}`}>
                      <a className="btn btn-sm text-dark p-0">
                        <i className="fas fa-eye text-primary mr-1" />
                        View Detail
                      </a>
                    </Link>
                    <button
                      className="btn btn-sm text-dark p-0"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <i className="fas fa-shopping-cart text-primary mr-1" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Products End */}
      {/* Vendor Start */}
      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="owl-carousel vendor-carousel">
              <div className="vendor-item border p-4">
                <img src="img/vendor-1.jpg" alt />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-2.jpg" alt />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-3.jpg" alt />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-4.jpg" alt />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-5.jpg" alt />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-6.jpg" alt />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-7.jpg" alt />
              </div>
              <div className="vendor-item border p-4">
                <img src="img/vendor-8.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vendor End */}
      {/* Footer Start */}
      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <a href className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </a>
            <p>
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </p>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3" />
              123 Street, New York, USA
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3" />
              info@example.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3" />
              +012 345 67890
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                    <i className="fa fa-angle-right mr-2" />
                    Shop Detail
                  </a>
                  <a className="text-dark mb-2" href="cart.html">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                    <i className="fa fa-angle-right mr-2" />
                    Checkout
                  </a>
                  <a className="text-dark" href="contact.html">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <i className="fa fa-angle-right mr-2" />
                    Our Shop
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                    <i className="fa fa-angle-right mr-2" />
                    Shop Detail
                  </a>
                  <a className="text-dark mb-2" href="cart.html">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                    <i className="fa fa-angle-right mr-2" />
                    Checkout
                  </a>
                  <a className="text-dark" href="contact.html">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <form action>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 py-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 py-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block border-0 py-3"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top border-light mx-xl-5 py-4">
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-dark">
              ©{" "}
              <a className="text-dark font-weight-semi-bold" href="#">
                Your Site Name
              </a>
              . All Rights Reserved. Designed by
              <a
                className="text-dark font-weight-semi-bold"
                href="https://htmlcodex.com"
              >
                HTML Codex
              </a>
              <br />
              Distributed By{" "}
              <a href="https://themewagon.com" target="_blank">
                ThemeWagon
              </a>
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="img/payments.png" alt />
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
};

export default Layout;
