import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../services/auth";
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
          localStorage.setItem("userc", JSON.stringify(res.data.data));
          localStorage.setItem("tokensc", JSON.stringify(res.data.token));
          localStorage.setItem(
            "refresh_tokenc",
            JSON.stringify(res.data.refresh_token)
          );
          navigate("/profile");
        } else {
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
        setErrorMessages(error.response.data.message);
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="conainer">
      <section id="content">
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="fontuser">
            <input
              type="text"
              placeholder="Username"
              required
              id="username"
              name="email"
              onChange={onChange}
            />
            <i className="fa fa-user fa-lg"></i>
          </div>
          <div className="fontuser">
            <input
              type="password"
              placeholder="Password"
              required
              id="password"
              name="password"
              onChange={onChange}
            />
            <i className="fa fa-key fa-lg"></i>
          </div>
          <span style={{ color: "red" }}>{errorMessages}</span>
          <div>
            <button type="submit">Log in</button>
            <Link to="/forgot">Lost your password?</Link>
            <Link to="/signup">Register</Link>
          </div>
        </form>
        {/* form */}
      </section>
      {/* content */}
    </div>
  );
}

export default Login;
