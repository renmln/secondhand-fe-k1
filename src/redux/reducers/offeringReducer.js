import { CREATE_OFFERING, GET_ALL_OFFERING, GET_OFFER, OFFERING_ERROR, GET_ALL } from "../actions/types";

const initialState = {
  alloffer: [],
  offering: [],
  status: [],
  error: null,
  detailOffer: []
};

const offeringReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        alloffer: action.alloffer,
        status: action.status,
      };
    case GET_ALL_OFFERING:
      return {
        ...state,
        offering: action.offering,
        status: action.status,
      };
    case CREATE_OFFERING:
      return {
        ...state,
        status: action.status,
      };
    case GET_OFFER:
      return {
        ...state,
        detailOffer: action.detailoffer,
      };
    case OFFERING_ERROR:
      return {
        ...state,
        error: action.payload,
        status: "FAIL",
      };
    default:
      return state;
  }
};

export default offeringReducer;
