import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../images/img.png';
import '../../css/style.css';
import icon from '../../images/img.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Regis() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        // biar onosubmit tidak terefresh
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/v1/register',
                {
                    email: email,
                    password: password
                });
            // redirect

            navigate('/login')
        } catch (err) {
            if (err.respone) {
                console.log(err.respone.data)
            }

        }
    }

    return (
        <section className="Form my-4 mx-5">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-5">
                        <img className="img-fluid img1" src={icon} alt="" />
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h1 className="font-weight-bold py-3">Daftar</h1>
                        <form onSubmit={Register}>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="nama" placeholder="Nama Lengkap" className="form-control my-3 p-4" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        type="email"
                                        placeholder="johndee@gmail.com"
                                        className="form-control my-3 p-4"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input
                                        type="password"
                                        placeholder="Masukkan Password"
                                        className="form-control my-3 p-4"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />

                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    {/* <input type="submit" className="btn1 mt-3 mb-5" value={"Daftar"} /> */}
                                    <button className="button is-success is-fullwidth">Daftar</button>
                                </div>
                            </div>
                            <p>Sudah punya akun? <a href="/login">Masuk disini</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

