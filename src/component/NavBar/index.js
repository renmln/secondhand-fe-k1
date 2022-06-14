import React from 'react';
import icon from '../../images/kotakbiru.svg';
import { FiLogIn, FiSearch } from "react-icons/fi";
export default function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  container">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/"><img src={icon} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex border">
                        <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn" type="submit"><FiSearch /></button>
                    </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mx-5 mb-lg-0">
                            <li className="nav-item px-1">
                                <a href='/#' type="button" className="btn btn-sm btn-custom nav-link text-light rounded-12px active"> <FiLogIn /> Masuk</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}