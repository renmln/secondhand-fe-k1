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
import { getAllTransaction } from "../../redux/actions/transactionAction";
import { Container, Row, Col, Button, Stack, Table, Card } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import AddProduct from "../../images/addProduct.png";
import { getAllProductByIdSeller } from "../../redux/actions/productsActions";


export default function DaftarTerjual() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const { product } = useSelector((state) => state.product);
    const { user } = useSelector((state) => state.auth);
    const { alloffer } = useSelector((state) => state.offering);
    const { transaction } = useSelector((state) => state.transaction);

    useEffect(() => {
        if (token === null) {
            return navigate("/");
        }
        dispatch(getAllProductByIdSeller());
    }, [dispatch, navigate, token]);



    const terjual = []
    if (product && user) {
        for (let i = 0; i < product.length; i++) {
            if (product[i].id_seller === user.id && product[i].status === "NOT AVAILABLE") {
                terjual.push(product[i])
            }
        }
    }
    // console.log(product)
    // console.log(terjual)

    const handleFilterDiminati = () => {

        return navigate("/daftarDiminati");
    };
    const handleFilterSemua = () => {
        return navigate("/daftarjual");
    };
    const handleFilterTerjual = () => {
        return navigate("/daftarterjual");
    };

    return (
        <>
            <NavBar />
            <Container>
                <Row className="justify-content-md-center mt-5 mb-3">
                    <Col>
                        <h4 className="fw-bold">Daftar Jual Saya</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Stack direction="horizontal" gap={3} className="infoPenjual">
                            {user === null ? (
                                <></>
                            ) : (
                                <>
                                    <img src={user.photo_profile} alt="" className="image-profile" />
                                    <div>
                                        <h5 className="my-auto">{user.name}</h5>
                                        <p className="my-auto">{user.city}</p>
                                    </div>
                                </>
                            )}
                            <Button type="button" className="btn-block btnOutlineSmall me-2 ms-auto" onClick={() => navigate("/infoprofil")}>
                                Edit
                            </Button>
                        </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} md={12} xs={12}>
                        <div className="boxShadow mt-4">
                            <h5>Kategori</h5>
                            <Table style={{ color: "grey" }}>
                                <thead>
                                    <tr style={{ height: "50px" }} className="kategoriInActive" id="filterAll" onClick={handleFilterSemua}>
                                        <td>
                                            <i className="bi bi-box me-2"></i>Semua Produk<i className="bi bi-chevron-right float-end"></i>
                                        </td>
                                    </tr>
                                    <tr style={{ height: "50px" }} className="kategoriInActive" id="filterDiminati" onClick={handleFilterDiminati}>
                                        <td>
                                            <i className="bi bi-heart me-2"></i>Diminati<i className="bi bi-chevron-right float-end"></i>
                                        </td>
                                    </tr>
                                    <tr style={{ height: "50px" }} className="kategoriActive" id="filterTerjual" onClick={handleFilterTerjual}>
                                        <td>
                                            <i className="bi bi-currency-dollar me-2"></i>Terjual<i className="bi bi-chevron-right float-end"></i>
                                        </td>
                                    </tr>
                                </thead>
                            </Table>
                        </div>
                    </Col>
                    <Col lg={9} md={12} xs={12}>
                        <Row className="mt-4">
                            {terjual.length === 0 || terjual.length === undefined ? (
                                <>
                                <p className="text-center">Belum Ada Produk Yang Terjual</p>
                                </>
                            ) : (
                                terjual.map((item) => (
                                    <Col key={item.id} lg={4} md={4} xs={6} className="mb-4">
                                        <Link to={`/halamanproduk/${item.id}`}>
                                            <Card>
                                                <Card.Img variant="top" src={item.image_1} className="imgProductLarge" />
                                                <Card.Body>
                                                    <Card.Title className="textInfo" style={{ fontSize: "14px", height: "10px" }}>
                                                        {item.product_name}
                                                    </Card.Title>
                                                    <Card.Text className="textInfo" style={{ fontSize: "10px", height: "5px" }}>
                                                        {item.category}
                                                    </Card.Text>
                                                    <Card.Text className="textInfo" style={{ fontSize: "14px", height: "12px" }}>
                                                        <CurrencyFormat value={item.price} displayType={"text"} thousandSeparator={"."} decimalSeparator={","} prefix={"Rp. "} />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                ))
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
