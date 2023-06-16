import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeItem,
} from "../../redux/cartSlice";
function Cart() {
  //const [qte,setQte]=useState(1)
  const cart_items = useSelector((state) => state.cart.cart_items);
  let price_total = 0;
  for (let index = 0; index < cart_items.length; index++) {
    price_total += cart_items[index].total;
  }
  
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-fluid pt-5" style={{ marginTop: "100px" }}>
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {cart_items?.map((i) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <img
                            width={50}
                            src={
                              "http://localhost:8000/" +
                              i.product.gallery[0].name
                            }
                          ></img>
                          {i.product.name}
                        </td>
                        <td className="align-middle">{i.product.price}</td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: 100 }}
                          >
                            <div className="input-group-btn">
                              <button
                                onClick={() =>
                                  dispatch(decrementItem(i.product))
                                }
                                className="btn btn-sm btn-primary btn-minus"
                              >
                                <i className="fa fa-minus" />
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control form-control-sm bg-secondary text-center"
                              value={i.quantity}
                            />
                            <div className="input-group-btn">
                              <button
                                onClick={() =>
                                  dispatch(incrementItem(i.product))
                                }
                                className="btn btn-sm btn-primary btn-plus"
                              >
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">{i.total}</td>
                        <td className="align-middle">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => dispatch(removeItem(i.product))}
                          >
                            <i className="fa fa-times" />
                          </button>
                        </td>
                      </tr>{" "}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-5" action>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <div className="card border-secondary mb-5">
              <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">{price_total}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$10</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">{price_total + 10}$</h5>
                </div>
                <a href="#">
                  <button className="btn btn-block btn-primary my-3 py-3">
                    Proceed To Checkout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
