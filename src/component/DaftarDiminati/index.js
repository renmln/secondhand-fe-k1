import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FiBox,
  FiHeart,
  FiDollarSign,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";
import { getAllOffering, getOfferingByIdBuyer } from "../../redux/actions/offeringActions";

export default function DaftarDiminati() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { product } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const { alloffer } = useSelector((state) => state.offering);


  useEffect(() => {
    dispatch(getAllOffering())
  }, [dispatch]);

  const diminati = []
  if (alloffer && user) {
    for (let i = 0; i < alloffer.length; i++) {
      if (alloffer[i].Product.id_seller === user.id) {
        diminati.push(alloffer[i])
      }
    }
  }
  return (
    <div className="container">
      <div>
        <NavBar />
      </div>
      <div>
        <p className="fw-bold my-3">Daftar Jual Saya</p>
        <div className="row">
          {user === null ? (
            <></>
          ) : (
            <>
              <div
                className="col-xl-1 col-sm-1 col-1 d-flex"
                style={{ width: "70px" }}
              >
                <img
                  src={user.photo_profile}
                  alt=""
                  className="img-fluid align-items-center"
                  style={{ width: "70px", objectFit: "contain" }}
                />
              </div>
              <div className="col-xl-10  col-sm-6 col-9">
                <p className="fw-bold mb-1" style={{ fontSize: "16px" }}>
                  {user.name}
                </p>
                <p className="mb-1" style={{ fontSize: "14px" }}>
                  {user.city}
                </p>
              </div>
            </>
          )}
          <div className="col-xl-1  col-sm-3 col-1">
            <button className="btn btn-custom borderradius8">edit</button>
          </div>
        </div>
      </div>
      <div>
        <div className="row my-4 ">
          <div className="col-3 card p-3">
            <p className="fw-bold" style={{ fontSize: "16px" }}>
              Kategori
            </p>
            <table>
              <tr>
                <td>
                  <FiBox />
                </td>
                <td>
                  <a href={`/daftarjual`}>
                    Semua Produk
                  </a>
                </td>
                <td>
                  <FiChevronRight />
                </td>
              </tr>

              <tr>
                <td>
                  <FiHeart />
                </td>
                <td>
                  <a href={`/daftarDiminati`}>Diminati</a>
                </td>
                <td>
                  <FiChevronRight />
                </td>
              </tr>
              <tr>
                <td>
                  <FiDollarSign />
                </td>
                <td>
                  <a href="daftarterjual">
                    Terjual
                  </a>
                </td>
                <td>
                  <FiChevronRight />
                </td>
              </tr>
            </table>
          </div>
          <div className="col-9 ">
            <div className="row justify-content-center">

              {diminati === null || diminati === undefined ? (
                <>
                  <h4 className="text-center pt-5">Produk Tidak Tersedia</h4>
                </>
              ) : (
                diminati.map((item) => (
                  <>
                    <div
                      // key={item.}
                      className="col-xl-3 col-md-5 col-sm-12 m-2"
                      style={{ border: "1px solid rgba(0,0,0,.125)" }}
                    >
                      <a
                        href={`/halamanproduk/${item.id_product}`}
                        className="text-decoration-none"
                        style={{ color: "black" }}
                      >
                        <div
                          className="card "
                          style={{
                            border: "none",
                            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                            padding: "8px, 8px, 16px, 8px",
                            borderRadius: "4px",
                          }}
                        >
                          <div className="d-flex justify-content-center">
                            <img
                              className="card-img-top center-cropped m-1 img-fluid"
                              style={{ height: "250px", objectFit: "cover" }}
                              src={item.Product.image_1}
                              alt="test"
                            />
                          </div>
                          <div className="card-body">
                            <h6
                              className="card-title text-decoration-none"
                              style={{ fontsize: "14px" }}
                            >
                              {item.Product.product_name}
                            </h6>
                            <p
                              className="text-decoration-none"
                              style={{ fontsize: "10px" }}
                            >
                              {item.Product.category}
                            </p>
                            <p
                              className="text-decoration-none"
                              style={{ fontsize: "14px" }}
                            >
                              Rp {item.Product.price}
                            </p>
                            <p
                              className="text-decoration-none"
                              style={{ fontsize: "14px" }}
                            >
                              Harga Tawar : Rp {item.offering_price}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </>

                ))

              )}




            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
