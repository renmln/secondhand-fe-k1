import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addOffering } from "../../redux/actions/offeringActions";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getProductById } from "../../redux/actions/productsActions";

export default function FormPenawaran() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailProduct } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const [id_product, setIdProduct] = useState("");
  const [id_buyer, setIdBuyer] = useState("");
  const [offering_price, setOfferingPrice] = useState("");

  const handleSubmit = async () => {
    const data = {
      id_product: detailProduct.id,
      id_buyer: user.id,
      offering_price: offering_price,
    };
    console.log(data);
    dispatch(addOffering(data));
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <input
            type="number"
            required
            value={id_product}
            onChange={(e) => setIdProduct(e.target.value)}
            hidden
          />
          <input
            type="number"
            required
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
            required
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
  );
}
