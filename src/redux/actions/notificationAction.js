import { GET_ALL_NOTIFICATION, NOTIFICATION_ERROR } from "./types";

export const getAllNotificationByIdSeller = (params) => async (dispatch) => {

    try {
        const response = await fetch(`http://localhost:8000/api/v1/notif/findmynotif`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await response.json();

        dispatch({
            type: GET_ALL_NOTIFICATION,
            notification: data,
            status: "ID_SELLER",
        });
    } catch (error) {
        dispatch({
            type: NOTIFICATION_ERROR,
            payload: error.response,
        });
        // Swal.fire({
        //     position: "center",
        //     icon: "error",
        //     title: error.message,
        //     showConfirmButton: false,
        //     timer: 1500,
        // });
    }
};