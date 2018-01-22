import { mapStateToProps, mapDispatchToProps } from "./route";
import { expect } from "chai";

import sandbox from "../../../../utilities/tests/sandbox";

describe("map route state to props", () => {
	it("returns the correct state in props", () => {
    const route = "shop";
		const state = {
      route,
			totalProducts: 0,
			products: [],
			cart: {
				products: [],
				totoal: 0
			}
		};
		const props = {
			route,
			totalProducts: 0
		};
		expect(mapStateToProps(state)).to.deep.equal(props);
	});

	it("returns the correct dispatch in props", () => {
		const dispatch = sandbox.spy();
		const props = {
			changeRoute: () => {}
		};
		const dispatchMapped = JSON.stringify(mapDispatchToProps(dispatch));
		const expectedProps = JSON.stringify(props);
		expect(dispatchMapped).to.equal(expectedProps);
	});
});
