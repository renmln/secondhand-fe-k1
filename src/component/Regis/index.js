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
                <div className="row rowlogin no-gutters">
                    <div className="col-lg-5">
                        <img className="img-fluid img1" src={icon} alt="" />
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h1 className="font-weight-bold py-3">Daftar</h1>
                        <form onSubmit={Register}>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <label className="fw-bold my-0">Nama</label>
                                    <input
                                        type="nama"
                                        placeholder="Nama Lengkap"
                                        className="form-control my-3 p-4 mt-0 buttonradius16"
                                        style={{ height: '48px' }}
                                        required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <label className="fw-bold my-0">Email</label>
                                    <input
                                        type="email"
                                        placeholder="johndee@gmail.com"
                                        className="form-control my-3 mt-0 p-4 buttonradius16"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ height: '48px' }}
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
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ height: '48px' }}
                                        required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    {/* <input type="submit" className="btn1 mt-3 mb-5" value={"Daftar"} /> */}
                                    <button
                                        className="btn1 btn-custom buttonradius16 is-success is-fullwidth"
                                        style={{ height: '48px' }}
                                    >Daftar</button>
                                </div>
                            </div>
                            <p className="my-1">Sudah punya akun? <a href="/login" className=" fw-bold" style={{color: '#7126B5'}}>Masuk disini</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

