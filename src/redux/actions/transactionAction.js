import Swal from "sweetalert2";
import {
    GET_ALL_TRANSACTION,
    CREATE_TRANSACTION,
    TRANSACTION_ERROR
} from "./types";
import axios from "axios";


export const getAllTransaction = () => async (dispatch) => {
    try {
        const res = await fetch(`http://localhost:8000/api/v1/transactions`);
        const data = await res.json();
        dispatch({
            type: GET_ALL_TRANSACTION,
            transaction: data,
            status: "OK",
        });
    } catch (err) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: err.response.data.msg,
        });
    }
};

export const addTransaction = (params) => async (dispatch) => {
    try {
        const id_seller = params.id_seller;
        const id_buyer = params.id_buyer;
        const id_offering = params.id_offering;
        const id_product = params.id_product;
        const status = params.status;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json",
            },
        };
        const response = await axios.post(
            "http://localhost:8000/api/v1/transaction",
            {
                id_seller,
                id_offering,
                id_buyer,
                id_product,
                status
            },
            config
        );
        const data = await response.data;

        console.log(data);

        dispatch({
            type: CREATE_TRANSACTION,
            status: data.status,
        });
        // Swal.fire({
        //     title: "Berhasil",
        //     text: "Harga tawaranmu telah terkirim",
        //     icon: "success",
        //     confirmButtonText: "OK",
        // });
    } catch (error) {
        dispatch({
            type: TRANSACTION_ERROR,
            payload: error.response,
        });

        Swal.fire({
            position: "center",
            icon: "error",
            title: error,
            showConfirmButton: false,
            timer: 150000,
        });
    }
};