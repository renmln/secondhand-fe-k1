import Swal from "sweetalert2";
import { CREATE_OFFERING, OFFERING_ERROR } from "./types";

export const addOffering = (params) => async (dispatch) => {
  try {
    var formdata = new FormData();
    formdata.append("id_product", params.id_product);
    formdata.append("id_buyer", params.id_buyer);
    formdata.append("offering_price", params.offering_price);

    const response = await fetch(
      "http://localhost:8000/api/v1/products/offer",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formdata,
      }
    );

    const data = await response.json();

    dispatch({
      type: CREATE_OFFERING,
      status: data.status,
    });

    Swal.fire({
      title: "Berhasil",
      text: "Harga tawaranmu telah terkirim",
      icon: "success",
      confirmButtonText: "OK",
    });
  } catch (error) {
    dispatch({
      type: OFFERING_ERROR,
      payload: error.response,
    });

    Swal.fire({
      position: "center",
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
