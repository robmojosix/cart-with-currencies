import { mapStateToProps, mapDispatchToProps } from "./products";
import { expect } from "chai";

import sandbox from "../../../../utilities/tests/sandbox";

describe("map products state to props", () => {
	it("returns the correct state in props", () => {
		const state = {
			products: [],
			cart: {
				products: [],
				totoal: 0
			}
		};
		const props = {
			products: []
		};
		expect(mapStateToProps(state)).to.deep.equal(props);
	});

	it("returns the correct dispatch in props", () => {
		const dispatch = sandbox.spy();
		const props = {
			addToCart: () => {}
		};
		const dispatchMapped = JSON.stringify(mapDispatchToProps(dispatch));
		const expectedProps = JSON.stringify(props);
		expect(dispatchMapped).to.equal(expectedProps);
	});
});
