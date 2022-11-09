import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { name } = localStorage;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill the required details");
      return;
    }
    axios
      .post("http://localhost:8000/api/users/login", {
        email,
        password,
      })
      .then(function (response) {
        localStorage.setItem("name", response.data.Name);
        window.location.reload();
        console.log(response);
      })
      .catch(function (error) {
        setError(error.response.data);
        console.log(error);
      });
  }

  return (
    <div className="container text-center">
      <h2 style={{ margin: 30 }}>Welcome Back {name && name}</h2>
      {!name && (
        <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
}

export default Login;
