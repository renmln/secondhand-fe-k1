import { GET_ALL_NOTIFICATION, NOTIFICATION_ERROR, UPDATE_NOTIFICATION, } from "../actions/types";

const initialState = {
    notification: [],
    status: [],
    error: null,
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_NOTIFICATION:
            return {
                ...state,
                notification: action.notification,
                status: action.status,
            };
        case NOTIFICATION_ERROR:
            return {
                ...state,
                error: action.payload,
                status: "FAIL",
            };
        case UPDATE_NOTIFICATION:
            return {
                ...state,
                status: action.payload,
            };
        // case GET_PRODUCT:
        //     return {
        //         ...state,
        //         detailProduct: action.detailproduct,
        //     };
        // case CREATE_PRODUCT:
        //     return {
        //         ...state,
        //         status: action.status,
        //     };
        // case UPDATE_PRODUCT:
        //     return {
        //         ...state,
        //         status: action.payload,
        //     };
        // case DELETE_PRODUCT:
        //     return {
        //         ...state,
        //         status: action.payload,
        //     };
        // case CLEAR_PRODUCT:
        //     return {
        //         ...state,
        //         product: [],
        //         detailProduct: [],
        //         status: [],
        //         error: null,
        //     };

        default:
            return state;
    }
};

export default notificationReducer;
