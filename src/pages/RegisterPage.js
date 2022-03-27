import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="register-parent">
      <div className="register-top"></div>

      <div className="row justify-content-center">
        <div className="col-md-5">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="col-md-5 z1">
          <div className="register-form">
            <h2>Sign Up</h2>
            <hr />
            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(mail) => {
                setEmail(mail.target.value);
              }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(passwd) => {
                setPassword(passwd.target.value);
              }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(passwd) => {
                setConfirmPassword(passwd.target.value);
              }}
            />

            <button className="my-3">Sign Up</button>

            <hr />

            <Link to="/login">Already a member? Click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
