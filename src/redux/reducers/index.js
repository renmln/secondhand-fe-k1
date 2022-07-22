import { combineReducers } from "redux";

import authReducer from "./authReducer";
import productReducer from "./productReducer";
import offeringReducer from "./offeringReducer";
import transactionReducer from "./transactionReducer";
import notificationReducer from "./notificationReducer";

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  offering: offeringReducer,
  transaction: transactionReducer,
  notification: notificationReducer,
});
