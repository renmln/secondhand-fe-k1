import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "../NavBar";
import CarouselBanner from "../Carousel";
import { FiSearch } from "react-icons/fi";
import Rectangle from '../../images/Rectangle 23.png';

export default function LandingPage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="row">
                <CarouselBanner />
            </div>
            <div className="container py-3">
                <p className="fw-bold">Telusuri Kategori</p>
                <div className="container py-3 d-flex buttonradius12">
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filtersemua"
                    > <FiSearch /> Semua
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterHobi"
                    > <FiSearch /> Hobi
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterKendaraan"
                    > <FiSearch /> Kendaraan
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterBaju"
                    > <FiSearch /> Baju
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterElektronik"
                    > <FiSearch /> Elektronik
                    </button>
                    <button
                        className="btn btn-custom me-3 "
                        onclick="/"
                        id="filterKesehatan"
                    > <FiSearch /> Kesehatan
                    </button>

                </div>


            </div>
            <div id="card" className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xl-2 col-sm-12">
                        <div className="card" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center">
                                <img className="card-img-top center-cropped m-1 img-fluid" src={Rectangle} style={{ height: "100px" }} alt='test' />
                            </div>
                            <div class="card-body mb-3">
                                <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                                <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                                <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div class="row row-cols-6 row-cols-md-6 row-cols-sm-12 g-4" id="cars-container">
                    <div className="card  " style={{ border: "none" }}>
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top center-cropped m-1" src={Rectangle} style={{ height: "100px" }} alt='test' />
                        </div>
                        <div class="card-body mb-3">
                            <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                            <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                            <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                        </div>
                    </div>
                    <div className="card  " style={{ border: "none" }}>
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top center-cropped m-1" src={Rectangle} style={{ height: "100px" }} alt='test' />
                        </div>
                        <div class="card-body mb-3">
                            <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                            <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                            <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                        </div>
                    </div>
                    <div className="card  " style={{ border: "none" }}>
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top center-cropped m-1" src={Rectangle} style={{ height: "100px" }} alt='test' />
                        </div>
                        <div class="card-body mb-3">
                            <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                            <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                            <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                        </div>
                    </div>
                    <div className="card  " style={{ border: "none" }}>
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top center-cropped m-1" src={Rectangle} style={{ height: "100px" }} alt='test' />
                        </div>
                        <div class="card-body mb-3">
                            <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                            <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                            <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                        </div>
                    </div>
                    <div className="card  " style={{ border: "none" }}>
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top center-cropped m-1" src={Rectangle} style={{ height: "100px" }} alt='test' />
                        </div>
                        <div class="card-body mb-3">
                            <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                            <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                            <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                        </div>
                    </div>
                    <div className="card  " style={{ border: "none" }}>
                        <div className="d-flex justify-content-center">
                            <img className="card-img-top center-cropped m-1" src={Rectangle} style={{ height: "100px" }} alt='test' />
                        </div>
                        <div class="card-body mb-3">
                            <h6 class="card-title " style={{ fontsize: '14px' }}>Jam Tangan Casio</h6>
                            <p className="" style={{ fontsize: '10px' }}>Aksesoris</p>
                            <p class="" style={{ fontsize: '14px' }}>Rp 250.000</p>
                        </div>
                    </div>

                </div> */}
                {/* <div class="card">
                    <img class="card-img-top col-xl-2" src={Rectangle} alt="Cardimagecap" />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> */}
            </div>
        </div>

    )
}