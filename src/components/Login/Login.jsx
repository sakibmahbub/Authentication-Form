import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    // 1. Prevent page refresh
    event.preventDefault();
    setSuccess("");
    // 2. Collect user data
    const email = event.target.email.value;
    const password = event.target.password.value;

    // 3. Sign in User
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedInUser = result.user;
        setSuccess("User logged in successfully");
        setError("");
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="mt-10">
      <h4>Please Login</h4>
      <form onSubmit={handleSubmit}>
        <input
          className=" rounded ps-2 mb-3"
          type="email"
          name="email"
          id="email"
          placeholder="email"
          required
        />
        <br />
        <input
          className=" rounded ps-2 mb-3"
          type="password"
          name="password"
          id="password"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Login" />
      </form>
      <p>
        <small>
          New here? Please <Link to="/register">register</Link>
        </small>
      </p>
      <p className="text-danger mt-5">{error}</p>
      <p className="text-success mt-5">{success}</p>
    </div>
  );
};

export default Login;
