import reducer from "./cart";
import * as actionTypes from "../actions/types";
import { expect } from "chai";

import products from "../../data/products";

let productId = 12345;

describe("cart reducer", () => {
	it("returns the initial state", () => {
		const initalState = {
			products: [],
			total: 0
		};
		expect(reducer(undefined, {})).to.deep.equal(initalState);
	});

	describe("ADD_TO_CART", () => {
		context("when product exists in cart", () => {
			it("increases cart item quantity", () => {
				const action = {
					type: actionTypes.ADD_TO_CART,
					productId
				};
				const initialState = {
					products: [
						{
							id: productId,
							quantity: 1
						}
					]
				};
				const newState = {
					products: [
						{
							id: productId,
							quantity: 2
						}
					]
				};
				expect(reducer(initialState, action)).to.deep.equal(newState);
			});
		});
		context("when product does not exist in cart", () => {
			it("adds the product to the cart", () => {
				const action = {
					type: actionTypes.ADD_TO_CART,
					productId
				};
				const initialState = {
					products: []
				};
				const newState = {
					products: [
						{
							id: productId,
							quantity: 1
						}
					]
				};
				expect(reducer(initialState, action)).to.deep.equal(newState);
			});
		});
	});

	describe("INCREASE_QUANTITY", () => {
		it("increases cart item quantity", () => {
			const action = {
				type: actionTypes.INCREASE_QUANTITY,
				productId
			};
			const initialState = {
				products: [
					{
						id: productId,
						quantity: 1
					}
				]
			};
			const newState = {
				products: [
					{
						id: productId,
						quantity: 2
					}
				]
			};
			expect(reducer(initialState, action)).to.deep.equal(newState);
		});
	});

	describe("DECREASE_QUANTITY", () => {
		it("decreases cart item quantity", () => {
			const action = {
				type: actionTypes.DECREASE_QUANTITY,
				productId
			};
			const initialState = {
				products: [
					{
						id: productId,
						quantity: 2
					}
				]
			};
			const newState = {
				products: [
					{
						id: productId,
						quantity: 1
					}
				]
			};
			expect(reducer(initialState, action)).to.deep.equal(newState);
		});
	});

	describe("CALCULATE_TOTAL", () => {
		it("calculates the cart total cart", () => {
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
			const action = {
				type: actionTypes.CALCULATE_TOTAL,
				productDirectory: products,
				cartProducts
			};
			const initialState = { total: 0 };
			const newState = { total: 5.15 };
			expect(reducer(initialState, action)).to.deep.equal(newState);
		});
	});
});
