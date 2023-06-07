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
      .catch((err) => console.log(err));
  };
  return (
    <div className="conainer">
      <section id="content">
        <form onSubmit={handleSubmit}>
          <h1>Sign up</h1>
          <div className="fontuser">
            <input
              type="text"
              placeholder="Name"
              required
              id="username"
              name="name"
              onChange={onChange}
            />
            <i className="fa fa-user fa-lg"></i>
          </div>
          <div className="fontuser">
            <input
              type="text"
              placeholder="Email"
              required
              id="username"
              name="email"
              onChange={onChange}
            />
            <i className="fa fa-envelope fa-lg"></i>
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
          <div className="fontuser">
            <input
              type="text"
              placeholder="CIN"
              required
              id="password"
              name="cin"
              onChange={onChange}
            />
            <i className="fa fa-id-card fa-lg"></i>
          </div>
          <span style={{ color: "red" }}>{errorMessages}</span>
          <div>
            <button type="submit">Sign up</button>
            <Link to="/login">Login to your account</Link>
          </div>
        </form>
        {/* form */}
      </section>
      {/* content */}
    </div>
  );
}

export default Login;
