import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import customer from "../../services/customer";
import "./style.css";
const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [img, setImg] = useState(null);
  const [imgd, setImgd] = useState();
  console.log("imgd", imgd);
  console.log("img", img);
  const usr = JSON.parse(localStorage.getItem("userc"));
  const id = usr._id;
  console.log("id", id);
  console.log(usr);
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handleImg = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setImgd(e.target.files[0]);
    }
  };

  let newusr;
  if (imgd) {
    newusr = { ...usr, picture: imgd?.name, ...data };
  } else {
    newusr = { ...usr, ...data };
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({ ...data, picture: imgd?.name });
    console.log(data);
    customer
      .update(id, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("userc", JSON.stringify(newusr));
        Swal.fire("Update", "profile updated", "success");
        navigate("/");

      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mrg">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <hr />
        <div className="row">
          {/* left column */}
          <div className="col-md-3">
            <div className="text-center">
              <img
                src={
                  imgd
                    ? img
                    : usr?.picture
                    ? `http://localhost:8000/${usr?.picture}`
                    : "//placehold.it/100"
                }
                className="avatar img-circle"
                alt="avatar"
                style={{ width: "200px", height: "200px" }}
              />
              <h6>Upload a different photo...</h6>
              <input
                type="file"
                className="form-control"
                name="picture"
                onChange={handleImg}
              />
            </div>
          </div>
          {/* edit form column */}
          <div className="col-md-9 personal-info">
            <h3>Personal info</h3>

            <div className="form-group">
              <label className="col-lg-3 control-label">name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder={usr?.name}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">New Password:</label>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="password"
                  placeholder="*****"
                  name="password"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-3 control-label" />
              <div className="col-md-8">
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
                <span />
                <button type="reset" className="btn btn-default">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
