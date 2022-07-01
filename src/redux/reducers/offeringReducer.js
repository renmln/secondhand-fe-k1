import { CREATE_OFFERING, OFFERING_ERROR } from "../actions/types";

const initialState = {
  offering: [],
<<<<<<< HEAD
  status: [],
=======
>>>>>>> 9bc344bbd88fd2cab65d81e9ebb46d9c2e0f0c29
  error: null,
};

const offeringReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_OFFERING:
      return {
        ...state,
        offering: action.offering,
<<<<<<< HEAD
        status: action.status,
=======
>>>>>>> 9bc344bbd88fd2cab65d81e9ebb46d9c2e0f0c29
      };
    case OFFERING_ERROR:
      return {
        ...state,
        offering: action.offering,
<<<<<<< HEAD
        status: action.status,
=======
>>>>>>> 9bc344bbd88fd2cab65d81e9ebb46d9c2e0f0c29
      };
    default:
      return state;
  }
};

export default offeringReducer;
