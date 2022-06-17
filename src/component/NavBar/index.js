import React, { useState, useEffect } from "react";
import icon from '../../images/kotakbiru.svg';
import { FiLogIn, FiSearch, FiList, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    // function handleSubmit(e) {
    //     setIsLoading(true);
    //     e.preventDefault();
    //     doLogin({ email, password })
    //         .then((token) => localStorage.setItem("token", token))
    //         .catch((err) => console.log(err.message))
    //         .finally(() => setIsLoading(false));
    // }

    function handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    }
    return (
        // <header>
        //     <nav className="navbar navbar-expand-lg navbar-light bg-light  container">
        //         <div className="container-fluid">
        //             <a className="navbar-brand " href="/"><img src={icon} alt="" /></a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        //                 aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <form className="d-flex border">
        //                 <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search"></input>
        //                 <button className="btn" type="submit"><FiSearch /></button>
        //             </form>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav ms-auto mb-2 mx-5 mb-lg-0">
        //                     <li className="nav-item px-1">
        //                         <a href='/#' type="button" className="btn btn-sm btn-custom nav-link text-light rounded-12px active"> <FiLogIn /> Masuk</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </header>

        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant='light'>
                <Container>
                    <Navbar.Brand href="#home"><a href="/"><img src={icon} alt="" /></a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">
                                <form className="d-flex border">
                                    <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn" type="submit"><FiSearch /></button>
                                </form>
                            </Nav.Link>
                        </Nav>
                        {!isLoggedIn ? (
                            <Nav>
                                <Nav.Link href="/login">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-custom nav-link text-light rounded-12px active"
                                    >
                                        <FiLogIn /> Masuk
                                    </button>
                                </Nav.Link>
                            </Nav>
                        ) : (
                            <Nav>

                                <Nav.Link href="/regis">
                                    <button
                                        type="button"
                                        className="btn btn-sm nav-link text-dark rounded-12px active">
                                        <FiList />
                                    </button>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <button type="button"
                                        className="btn btn-sm nav-link text-dark rounded-12px active">
                                        <FiBell />
                                    </button>
                                </Nav.Link>
                                <Nav.Link href="#">
                                    <button type="button"
                                        className="btn btn-sm nav-link text-dark rounded-12px active">
                                        <FiUser />
                                    </button>
                                </Nav.Link>
                                <Nav.Link href="/">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-custom nav-link text-light rounded-12px active"
                                        onClick={handleLogout}
                                    >
                                        <FiLogOut /> Logout
                                    </button>

                                </Nav.Link>
                            </Nav>
                            
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}