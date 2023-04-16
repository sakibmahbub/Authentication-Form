import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = (event) => {
    // 1. Prevent page refresh
    event.preventDefault();
    setSuccess("");
    // 2. Collect user data
    const email = event.target.email.value;
    const password = event.target.password.value;

    // 3. Create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("user has been created successfully");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="mt-10">
      <h4>Please Register</h4>
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
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
      <p className="text-danger mt-5">{error}</p>
      <p className="text-success mt-5">{success}</p>
    </div>
  );
};

export default Register;
