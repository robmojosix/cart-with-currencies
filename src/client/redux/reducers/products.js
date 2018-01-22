import * as actionTypes from "../actions/types";

const reducer = (state=[], action) => {
	switch(action.type) {
	case actionTypes.PRODUCTS_RECEIVED:
		return action.products;
	default:
		return state;
	}
};

export default reducer;
