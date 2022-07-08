import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, cekTokenExp } from "../../redux/actions/authActions";

import icon from "../../images/kotakbiru.svg";
import { FiLogIn, FiSearch, FiList, FiBell, FiUser, FiLogOut } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import fotoproduk from "../../images/Rectangle 23.png";
import alertnotif from "../../images/Ellipse.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAllOffering } from "../../redux/actions/offeringActions";

export default function NavBar() {
    const dispatch = useDispatch();
    const { isAuthenticated, user, status } = useSelector((state) => state.auth);
    const { alloffer } = useSelector((state) => state.offering);

    useEffect(() => {
        if (localStorage.getItem("token") && user === null) {
            dispatch(cekTokenExp());
        }
    }, [dispatch, isAuthenticated, status, user]);

    const handleLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        dispatch(getAllOffering())
    }, [dispatch]);
    // console.log(alloffer)


    const notif = []
    if (alloffer && user) {
        for (let i = 0; i < alloffer.length; i++) {
            if (alloffer[i].Product.id_seller === user.id) {
                notif.push(alloffer[i])
            }
        }
    }
    // console.log(notif)


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                    <a href="/">
                        <img src={icon} alt="" />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <form className="d-flex border buttonradius12 ">
                                <input className="form-control border-0" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn" type="submit">
                                    <FiSearch />
                                </button>
                            </form>
                        </Nav.Link>
                    </Nav>
                    {!isAuthenticated ? (
                        <Nav>
                            <Nav.Link href="/login">
                                <button type="button" className="btn btn-sm btn-custom nav-link text-light buttonradius12 active ">
                                    <FiLogIn /> Masuk
                                </button>
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav>
                            <Nav.Link href="/daftarjual">
                                <button type="button" className="btn btn-sm nav-link text-dark rounded-12px active">
                                    <FiList />
                                </button>
                            </Nav.Link>
                            <NavDropdown
                                title={
                                    <button type="button" className="btn btn-sm nav-link text-dark rounded-12px active">
                                        <FiBell />
                                    </button>
                                }
                                id="collasible-nav-dropdown"
                                align="end"
                            >
                                {notif === null ? (
                                    <><p>tidak ada notif</p>
                                    </>
                                ) : (
                                    notif.map((item) => {
                                        
                                        return <NavDropdown.Item href="#">
                                            <div className="card notifikasi">
                                                <div className="row">
                                                    <div className="col-2 m-auto">
                                                        <img src={item.Product.image_1} className="w-100" alt="" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="row mb-1" style={{ fontSize: "10px" }}>
                                                            <div className="col-xl-6 mb-1">
                                                                <p className="mb-1">Penawaran produk</p>
                                                            </div>
                                                            <div className="col-xl-6 mb-1" style={{ textAlign: "right" }}>
                                                                <p className="mb-1">
                                                                    20 Apr, 14:04 &ensp; <img src={alertnotif} alt="" />
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="mb-1" style={{ fontSize: "14px", fontWeight: "bold" }}>
                                                            {item.Product.product_name}
                                                        </p>
                                                        <p className="mb-1" style={{ fontSize: "14px", fontWeight: "bold" }}>
                                                            {item.Product.price}
                                                        </p>
                                                        <p className="mb-1" style={{ fontSize: "14px", fontWeight: "bold" }}>
                                                            Ditawar Rp {item.offering_price}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavDropdown.Item>
                                    })
                                )}

                            </NavDropdown>
                            <Nav.Link href="/infoprofil">
                                <button type="button" className="btn btn-sm nav-link text-dark rounded-12px active">
                                    <FiUser />
                                </button>
                            </Nav.Link>

                            <Nav.Link href="/">
                                <button type="button" className="btn btn-sm btn-custom nav-link text-light rounded-12px active" onClick={handleLogout}>
                                    <FiLogOut /> Logout
                                </button>
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}
