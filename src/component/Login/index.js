import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../images/img.png';
import '../../css/style.css';
import icon from '../../images/img.png';
import { Navigate } from "react-router-dom";

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

    function handleLogout(e) {
        setIsLoading(true);
        e.preventDefault();
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setIsLoading(false);
    }
    return (
        <section className="Form my-4 mx-5">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-5">
                        <img className="img-fluid img1" src={icon} alt="" />
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h1 className="font-weight-bold py-3">Masuk</h1>
                        {!isLoggedIn ? (
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input
                                            type="email"
                                            placeholder="johndee@gmail.com"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control my-3 p-4"
                                            value={email}

                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input
                                            type="password"
                                            placeholder="Masukkan Password"
                                            className="form-control my-3 p-4"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <input type="submit"
                                            value={isLoading ? "Loading" : "Login"}
                                            className="btn1 mt-3 mb-5">
                                        </input>
                                    </div>
                                </div>
                                <p>Belum punya akun? <a href="/regis">Daftar disini</a></p>
                            </form>
                        ) : (
                            <Navigate to="/" />
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

