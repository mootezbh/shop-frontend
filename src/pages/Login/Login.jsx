import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../services/auth";
import { useDispatch } from "react-redux";
import { success, error, loading } from "../../redux/userRedux";

import "./style.css";

//TODO: login
function Login() {
  const dispatch = useDispatch();
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
    dispatch(loading());
    setErrorMessages("");
    auth
      .login(data)
      .then((res) => {
        if (res.data.data.verified == false) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Verify your account",
          });
        } else if (
          res.data.data.__t == "admin" ||
          res.data.data.__t == "provider"
        ) {
          Swal.fire({
            icon: "error",
            title: "Account not found",
            text: "please sign up",
          });
        } else if (res.data.data.picture == null) {
          dispatch(success(res.data.data));
          localStorage.setItem("userc", JSON.stringify(res.data.data));
          localStorage.setItem("tokensc", JSON.stringify(res.data.token));
          localStorage.setItem(
            "refresh_tokenc",
            JSON.stringify(res.data.refresh_token)
          );
          navigate("/profile");
        } else {
          dispatch(success(res.data.data));
          localStorage.setItem("userc", JSON.stringify(res.data.data));
          localStorage.setItem("tokensc", JSON.stringify(res.data.token));
          localStorage.setItem(
            "refresh_tokenc",
            JSON.stringify(res.data.refresh_token)
          );
          navigate("/");
        }
      })
      .catch((error) => {
        setErrorMessages(error?.response.data.message);
        console.log(error?.response.data.message);
        dispatch(error());
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
                placeholder="Password"
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
          Don't have an account?{" "}
          <Link to="/signup">
            <a className="txt-brand">Sign up</a>
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
