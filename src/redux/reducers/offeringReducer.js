import {
  CREATE_OFFERING,
  GET_ALL_OFFERING,
  GET_OFFERING,
  OFFERING_ERROR,
} from "../actions/types";

const initialState = {
  offering: [],
  detailOffering: [],
  status: [],
  error: null,
};

const offeringReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_OFFERING:
      return {
        ...state,
        offering: action.offering,
        status: action.status,
      };
    case GET_OFFERING:
      return {
        ...state,
        detailOffering: action.detailOffering,
      };
    case CREATE_OFFERING:
      return {
        ...state,
        status: action.status,
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
