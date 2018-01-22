import { combineReducers } from "redux";
import cart from "./cart";
import products from "./products";
import route from "./route";
import exchangeRates from "./exchangeRates";

const reducers = combineReducers({
	cart,
	products,
	route,
	exchangeRates
});

export default reducers;
