import reducer from "./products";
import * as actionTypes from "../actions/types";
import { expect } from "chai";

import products from "../../data/products";

describe("products reducer", () => {
	it("returns the initial state", () => {
		const initalState = [];
		expect(reducer(undefined, {})).to.deep.equal(initalState);
	});

	describe("PRODUCTS_RECEIVED", () => {
		it("receives products", () => {
			const action = {
				type: actionTypes.PRODUCTS_RECEIVED,
				products
			};
			const initalState = [];
			const newState = products;
			expect(reducer(initalState, action)).to.deep.equal(newState);
		});
	});
});
