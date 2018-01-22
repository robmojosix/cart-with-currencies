import * as actionTypes from "./types";
import fetch from "universal-fetch";
import products from "../../data/products";

// Actions file getting big, would extrat Domain specific actions
// into new files as part of a refactor
export const changeRoute = (route) => {
	return {
		type: actionTypes.CHANGE_ROUTE,
		route
	}
}

export const decreaseQuantityHandler = (id) => {
	return (dispatch, getState) => {
		dispatch(decreaseQuantity(id));

		const {products, cart} = getState();
		dispatch(calculateTotal(products, cart.products));
	};
};

export const increaseQuantityHandler = (id) => {
	return (dispatch, getState) => {
		dispatch(increaseQuantity(id));

		const {products, cart} = getState();
		dispatch(calculateTotal(products, cart.products));
	};
};

export const increaseQuantity = (id) => {
	return {
		type: actionTypes.INCREASE_QUANTITY,
		productId: id
	};
};

export const decreaseQuantity = (id) => {
	return {
		type: actionTypes.DECREASE_QUANTITY,
		productId: id
	};
};

export const calculateTotal = (products, cartProducts) => {
	return {
		type: actionTypes.CALCULATE_TOTAL,
		productDirectory: products,
		cartProducts
	};
};

export const addToCartHandler = (id) => {
	return (dispatch, getState) => {
		dispatch(addToCart(id));

		const { products, cart } = getState();
		dispatch(calculateTotal(products, cart.products));
	};
};

export const addToCart = (id) => (
	{
		type: actionTypes.ADD_TO_CART,
		productId: id
	}
);

export const fetchProducts = () => {
	// In a real world app we would make a
	// server request for product data here.
	// Intead I am using a local fixture.
	return new Promise((resolve, reject) => {
		resolve(products);
	})
}

// Example of Request (to possible mock server)
// export const fetchProducts = () => {
// 	return fetch("http://localhost:3001/products")
// 		.then((response) => {
// 			if (response.status >= 400) {
// 				throw new Error("Bad response from server");
// 			}
// 			return response.json();
// 		});
// };

export const fetchExchangeRates = (url) => {
	return (dispatch) => {
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((payload) => dispatch(exchangeRatesFetchSuccess(payload.quotes)))
            .catch(() => dispatch(exchangeRatesFetchError(true)));
    };
};

export const exchangeRatesFetchError = (bool) => {
    return {
        type: actionTypes.XR_FETCH_ERROR,
        hasErrored: bool
    };
};

export const exchangeRatesFetchSuccess = (rates) => {
    return {
        type: actionTypes.XR_FETCH_SECCESS,
        rates
    };
};

export const updateExchangeRate = (rate) => {
	return {
			type: actionTypes.UPDATE_XR,
			rate
	};
};

export const updateExchangeRateHandler = (rate) => {
	return (dispatch) => {
		dispatch(updateExchangeRate(rate));
	};
};
