import { lookUpProductById } from "./products";
import { expect } from "chai";

import products from "../../data/products";

describe("lookUpProductById", () => {
	it("returns correct product", () => {
		const productId = 1;
		const foundProduct = products[0];
		expect(lookUpProductById(products, productId)).to.equal(foundProduct);
	});
});
