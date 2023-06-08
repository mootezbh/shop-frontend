import { useState } from "react";
import "./style.css";
const Profile = () => {
  const usr = JSON.parse(localStorage.getItem("userc"));
  console.log(usr);
  return (
    <div className="container mrg">
      <h1>Edit Profile</h1>
      <hr />
      <div className="row">
        {/* left column */}
        <div className="col-md-3">
          <div className="text-center">
            <img
              src="//placehold.it/100"
              className="avatar img-circle"
              alt="avatar"
            />
            <h6>Upload a different photo...</h6>
            <input type="file" className="form-control" name="picture" />
          </div>
        </div>
        {/* edit form column */}
        <div className="col-md-9 personal-info">
          <h3>Personal info</h3>
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label className="col-lg-3 control-label">name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  defaultValue="test"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Password:</label>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="password"
                  defaultValue={11111122333}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">
                Confirm password:
              </label>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="password"
                  defaultValue={11111122333}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" />
              <div className="col-md-8">
                <input
                  type="button"
                  className="btn btn-primary"
                  defaultValue="Save Changes"
                />
                <span />
                <input
                  type="reset"
                  className="btn btn-default"
                  defaultValue="Cancel"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
