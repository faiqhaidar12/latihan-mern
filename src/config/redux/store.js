import reducer from "./reducer/reducer";
import { createStore, combineReducers } from "redux";

const store = createStore(reducer);

export default store;
