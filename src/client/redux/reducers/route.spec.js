import reducer, { initialState } from "./route";
import * as actionTypes from "../actions/types";
import { expect } from "chai";

describe("products reducer", () => {
	it("returns the initial state", () => {
		expect(reducer(undefined, {})).to.deep.equal(initialState);
	});

	describe("CHANGE_ROUTE", () => {
		it("updates route", () => {
      const newRoute = "cart";
      const action = {
				type: actionTypes.CHANGE_ROUTE,
				route: newRoute
			};
			expect(reducer(initialState, action)).to.deep.equal(newRoute);
		});
	});
});
