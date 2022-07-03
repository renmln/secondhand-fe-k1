import { CREATE_OFFERING, OFFERING_ERROR } from "../actions/types";

const initialState = {
  offering: [],
  status: [],
  error: null,
};

const offeringReducer = (state = initialState, action) => {
  switch (action.type) {
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
