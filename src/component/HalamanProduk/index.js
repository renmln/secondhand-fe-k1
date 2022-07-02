import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { addOffering } from "../../redux/actions/offeringActions";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import profilpenjual from "../../images/profilpenjual.png";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

import NavBar from "../NavBar";
import { getProductById } from "../../redux/actions/productsActions";

export default function HalamanProduk() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailProduct } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const [modalShow, setModalShow] = React.useState(false);

  const [id_product, setIdProduct] = useState("");
  const [id_buyer, setIdBuyer] = useState("");
  const [offering_price, setOfferingPrice] = useState("");

  React.useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const handleSubmit = async () => {
    const data = {
      id_product: detailProduct.id,
      id_buyer: user.id,
      offering_price: offering_price,
    };
    console.log(data);
    console.log(detailProduct.id);
    dispatch(addOffering(data));
  };
  function ModalTawar(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h6>Masukkan Harga Tawarmu</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: "14px" }}>
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
          <div className="row p-1">
            <div className="col-3 m-auto ">
              <img
                src={profilpenjual}
                alt="profilpenjual"
                style={{ widht: "48" }}
              />
            </div>
            <div
              className="col-9 "
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                paddingTop: "18px",
                paddingLeft: "5px",
              }}
            >
              <b>{detailProduct.product_name}</b>
              <p>Rp {detailProduct.price}</p>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-3">
                <input
                  type="number"
                  value={id_product}
                  onChange={(e) => setIdProduct(e.target.value)}
                  hidden
                />
                <input
                  type="number"
                  value={id_buyer}
                  onChange={(e) => setIdBuyer(e.target.value)}
                  hidden
                />
                <label htmlFor="harga_tawar" className="form-label">
                  Harga Tawar
                </label>
                <input
                  type="number"
                  className="form-control rounded "
                  id="harga_tawar"
                  placeholder="Rp 0,00"
                  style={{ borderRadius: "16px" }}
                  value={offering_price}
                  onChange={(e) => setOfferingPrice(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-custom me-3 mb-2 "
                onClick={handleSubmit}
              >
                Kirim
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  if (localStorage.getItem("token") === null) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Harap Login Terlebih Dahulu",
      showConfirmButton: false,
      timer: 1000,
    });
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      {detailProduct.length === 0 ? (
        <></>
      ) : (
        <>
          <div>
            <NavBar />
          </div>
          {user === null ? (
            <></>
          ) : (
            <>
              <div className="container-fluid mt-5">
                <div className="row mx-auto mb-3">
                  <div className="col-xl-6 col-sm-12">
                    <img
                      className="img-fluid center-cropped rounded"
                      src={detailProduct.image_1}
                      alt="halamanproduk"
                      style={{ width: "600px", objectFit: "cover" }}
                    />
                    <h5 className="mt-5">Deskripsi</h5>
                    <p>{detailProduct.description}</p>
                  </div>
                  <div className="col-xl-4 col-sm-12">
                    <div className="card mt-1 p-2 rounded mb-2">
                      <h6 className="card-title " style={{ fontsize: "14px" }}>
                        {detailProduct.product_name}
                      </h6>
                      <p style={{ fontsize: "10px" }}>
                        {detailProduct.category}
                      </p>
                      <p style={{ fontsize: "14px" }}>
                        Rp {detailProduct.price}
                      </p>
                      {detailProduct.id_seller === user.id ? (
                        <>
                          <button className="btn btn-custom me-3 mb-2 ">
                            {" "}
                            Terbitakan
                          </button>
                          <button className="btn btn-custom me-3 mb-2 ">
                            {" "}
                            Edit
                          </button>
                        </>
                      ) : (
                        <button
                          className="btn btn-custom me-3 mb-2 "
                          onClick={() => setModalShow(true)}
                          id="Terbitkan"
                        >
                          Saya tertarik dan ingin nego
                        </button>
                      )}
                    </div>
                    <div className="card">
                      <div className="row m-2">
                        <div className="col-2">
                          <img
                            src={profilpenjual}
                            alt="profilpenjual"
                            style={{ width: "50px" }}
                          />
                        </div>
                        <div className="col-10">
                          <h5>Nama Penjual</h5>
                          <p>Kota</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ModalTawar
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
