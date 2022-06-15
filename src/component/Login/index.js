import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../images/img.png';
import '../../css/style.css';
import icon from '../../images/img.png';

export default function Login() {
    return (
        <section class="Form my-4 mx-5">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-lg-5">
                <img class="img-fluid img1" src={icon} alt="" />
                </div>
                <div class="col-lg-7 px-5 pt-5">
                    <h1 class="font-weight-bold py-3">Masuk</h1>
                    <form>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="email" placeholder="johndee@gmail.com" class="form-control my-3 p-4"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-7">
                            <input type="password" placeholder="Masukkan Password" class="form-control my-3 p-4"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-lg-7">
                        <button type="button" class="btn1 mt-3 mb-5">Masuk</button>
                    </div>
                </div>
                <p>Belum punya akun? <a href="/regis">Daftar disini</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
    
