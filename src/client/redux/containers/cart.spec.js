import { mapStateToProps, mapDispatchToProps } from "./cart";
import { expect } from "chai";

import sandbox from "../../../../utilities/tests/sandbox";

describe("map cart state to props", () => {
	it("returns the correct state in props", () => {
		const state = {
			products: [],
			cart: {
				products: [],
				totoal: 0
			}
		};
		const props = {
			products: [],
			total: state.cart.total
		};
		expect(mapStateToProps(state)).to.deep.equal(props);
	});

	it("returns the correct dispatch in props", () => {
		const dispatch = sandbox.spy();
		const props = {
			increaseQuantity: () => {},
			decreaseQuantity: () => {}
		};
		const dispatchMapped = JSON.stringify(mapDispatchToProps(dispatch));
		const expectedProps = JSON.stringify(props);
		expect(dispatchMapped).to.equal(expectedProps);
	});
});
