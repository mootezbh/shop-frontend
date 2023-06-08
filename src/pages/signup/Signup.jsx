import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import customer from "../../services/customer";
import "./style.css";

//TODO: login
function Login() {
  const [errorMessages, setErrorMessages] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    customer
      .create(data)
      .then((res) => {
        console.log(res);
        Swal.fire("Account created", "please login", "success");
        navigate("/login");
      })
      .catch((err) => {
        setErrorMessages(err.response.data.message);
        console.log(err.response.data.message);
      });
  };
  return (
    <main>
      <div className="login-block">
        <a href className="text-decoration-none">
          <h1 className="m-0 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border px-3 mr-1">
              E
            </span>
            Tech
          </h1>
        </a>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user ti-user" />
              </span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <hr className="hr-xs" />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-envelope ti-email" />
              </span>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Your email address"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <hr className="hr-xs" />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock ti-unlock" />
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Choose a Password"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <hr className="hr-xs" />
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-id-card ti-id-card" />
              </span>
              <input
                type="text"
                name="cin"
                className="form-control"
                placeholder="CIN"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <p style={{ color: "red" }}>{errorMessages}</p>
          <button className="btn btn-primary btn-block btn1" type="submit">
            Login
          </button>
        </form>
      </div>
      <div className="login-links">
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login">
            <a className="txt-brand">Login</a>
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
