import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

function RegisterPage() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    try {
      setLoading(true);
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      toast.success("User registered successfully");
      setLoading(false);
      await new Promise((r) => setTimeout(r, 2000));
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      toast.error("Failed to register the user.");
      setLoading(false);
    }
  };

  return (
    <div className="register-parent">
      {loading && <Loader />}
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
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(passwd) => {
                setPassword(passwd.target.value);
              }}
            />

            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(passwd) => {
                setConfirmPassword(passwd.target.value);
              }}
            />

            <button className="my-3" onClick={register}>
              Sign Up
            </button>

            <hr />

            <Link to="/login">Already a member? Click here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
