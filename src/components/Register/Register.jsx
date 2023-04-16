import React from "react";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
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
        />
        <br />
        <input
          className=" rounded ps-2 mb-3"
          type="password"
          name="password"
          id="password"
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
