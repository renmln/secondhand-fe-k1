import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productReducer from "./productReducer";
import offeringReducer from "./offeringReducer";
import transactionReducer from "./transactionReducer"

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  offering: offeringReducer,
  transaction: transactionReducer
});
