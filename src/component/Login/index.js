import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../images/img.png";
import "../../css/style.css";
import icon from "../../images/img.png";
import { Navigate } from "react-router-dom";
import axios from "axios";

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("http://localhost:8000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  
  const user = await axios.get(`http://localhost:8000/api/v1/users/${email}`);
  localStorage.setItem("userId", user.data.id)
  localStorage.setItem("userEmail", user.data.email)

  localStorage.setItem("userInfo", JSON.stringify(data));
  return data.token;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  return (
    <section className="Form my-4 mx-5">
      <div className="container">
        <div className="row rowlogin no-gutters">
          <div className="col-lg-5">
            <img className="img-fluid img1" src={icon} alt="" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">Masuk</h1>
            {!isLoggedIn ? (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="col-lg-7">
                    <label className="fw-bold my-0">Email</label>
                    <input
                      type="email"
                      placeholder="johndee@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control my-3 p-4 buttonradius16 mt-0"
                      value={email}
                      style={{ height: "48px" }}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <label className="fw-bold my-0">Password</label>
                    <input
                      type="password"
                      placeholder="Masukkan Password"
                      className="form-control my-3 p-4 buttonradius16 mt-0"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      style={{ height: "48px" }}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      type="submit"
                      value={isLoading ? "Loading" : "Login"}
                      className="btn1 mt-3 mb-2 buttonradius16"
                      style={{ height: "48px" }}
                    ></input>
                  </div>
                </div>
                <p className="my-1">
                  Belum punya akun?{" "}
                  <a
                    href="/regis"
                    className=" fw-bold"
                    style={{ color: "#7126B5" }}
                  >
                    Daftar disini
                  </a>
                </p>
              </form>
            ) : (
              <Navigate to="/" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
