import React from "react";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (name === "" || email === "" || password === "") {
      alert("Please fill the required details");
      return;
    }
    axios
      .post("http://localhost:8000/api/users/register", {
        name,
        email,
        password,
      })
      .then(function (response) {
        setSuccess(response.data);
        console.log(response);
      })
      .catch(function (error) {
        setError(error.response.data);
        console.log(error.response.data);
      });
  }

  return (
    <div className="container text-center">
      <h2 style={{ margin: 30 }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 ">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              name="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>

          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>

          <div className="col-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div style={{ margin: 10 }}>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            style={{ backgroundColor: "teal", color: "white" }}
          >
            Register
          </button>
        </div>
        {success && <p style={{ color: "green" }}>{success}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default SignUp;
