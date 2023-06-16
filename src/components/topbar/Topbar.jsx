import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Topbar = () => {
  const cart_items = useSelector((state) => state.cart.cart_items);
  let qte_total = 0;
  for (let index = 0; index < cart_items.length; index++) {
    qte_total += cart_items[index].quantity;
  }

  return (
    <div className="container-fluid">
      <div className="row align-items-center py-3 px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a href className="text-decoration-none">
            <h1 className="m-0 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border px-3 mr-1">
                E
              </span>
              Tech
            </h1>
          </a>
        </div>
        <div className="col-lg-6 col-6 text-left">
          <form action>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-3 col-6 text-right">
          <a href className="btn border">
            <i className="fas fa-heart text-primary" />
            <span className="badge">1</span>
          </a>
          <Link to="/cart">
            <a href className="btn border">
              <i className="fas fa-shopping-cart text-primary" />
              <span className="badge" style={{ color: "red" }}>
                {qte_total}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
