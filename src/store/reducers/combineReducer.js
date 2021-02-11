import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import productReducer from "./product";

export default combineReducers({
  coun : counterReducer,
  products:productReducer,
});
