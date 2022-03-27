import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

function LoginPage() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      let response = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentUser", JSON.stringify(response));
      toast.success("User logged in successfully");
      setLoading(false);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      toast.error("Failed to login the user.");
      setLoading(false);
    }
  };

  return (
    <div className="login-parent">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-md-5 z1">
          <div className="login-form">
            <h2>Sign In</h2>
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
            <button className="my-3" onClick={login}>
              Sign In
            </button>

            <hr />

            <Link to="/register">Not a member? Click here</Link>
          </div>
        </div>

        <div className="col-md-5 z1">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      <div className="login-bottom"></div>
    </div>
  );
}

export default LoginPage;
