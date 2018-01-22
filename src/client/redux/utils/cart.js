import { lookUpProductById } from "./";

export const numberOfProductsInCart = (products) => {
	return products.reduce((total, { quantity }) => ( total+quantity ), 0);
}

export const calculateTotal = (productDirectory, cartProducts) => {
	return cartProducts.reduce((total, product) => (
		Math.round(
			(total
			+ (lookUpProductById(productDirectory, product.id).price
			* product.quantity))
			* 100
		) / 100
	), 0);
};

export const productExistInCart = (state, id) => {
	if(state.products.length <= 0) { return false; }
	return state.products.filter((item) => item.id === id).length > 0;
};
