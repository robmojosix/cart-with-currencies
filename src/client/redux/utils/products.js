export const lookUpProductById = (products, id) => (
	products.filter((product) => product.id === id)[0]
);
