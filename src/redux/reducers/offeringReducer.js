import { CREATE_OFFERING, OFFERING_ERROR } from "../actions/types";

const initialState = {
  offering: [],
  error: null,
};

const offeringReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_OFFERING:
      return {
        ...state,
        offering: action.offering,
      };
    case OFFERING_ERROR:
      return {
        ...state,
        offering: action.offering,
      };
    default:
      return state;
  }
};

export default offeringReducer;
