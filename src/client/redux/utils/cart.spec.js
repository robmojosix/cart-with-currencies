import { calculateTotal, productExistInCart, numberOfProductsInCart } from "./cart";
import { expect } from "chai";

import products from "../../data/products";

describe("numberOfProductsInCart", () => {
	it("defaults to zero", () => {
		const cartProducts = [];
		const totalProducts = 0;
		expect(numberOfProductsInCart(cartProducts)).to.equal(totalProducts);
	});

	it("calculates the correct total", () => {
		const cartProducts = [
			{
				id: 2,
				quantity: 2
			},
			{
				id: 1,
				quantity: 1
			},
		];
		const totalProducts = 3;
		expect(numberOfProductsInCart(cartProducts)).to.equal(totalProducts);
	});
});

describe("calculateTotal", () => {
	it("calculates the correct total", () => {
		const cartProducts = [
			{
				id: 2,
				quantity: 2
			},
			{
				id: 1,
				quantity: 1
			},
		];
		const total = 5.15;
		expect(calculateTotal(products, cartProducts)).to.equal(total);
	});
});

describe("productExistInCart", () => {
	context("when a product exists in cart", () => {
		it("returns true", () => {
			const productId = 2;
			const state = {
				products: [{ id: productId }]
			};
			expect(productExistInCart(state, productId)).to.equal(true);
		});
	});
	context("when a product does not exist in cart", () => {
		it("returns false", () => {
			const productId = 2;
			const state = {
				products: [{ id: 1 }]
			};
			expect(productExistInCart(state, productId)).to.equal(false);
		});
	});
});
