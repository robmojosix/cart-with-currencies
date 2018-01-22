import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import sandbox from "../../../../utilities/tests/sandbox";
import { CartItem } from "../";

describe("cartItem", () => {
	const id = 1;
	const title = "product a";
	const price = 23;
	const quantity = 1;
	const increaseQuantity = sandbox.spy();
	const decreaseQuantity = sandbox.spy();

	it("renders increaseQuantity prop as clickable cta", () => {
		const wrapper = shallow(<CartItem
			id={id}
			title={title}
			price={price}
			quantity={quantity}
			increaseQuantity={increaseQuantity}
			decreaseQuantity={decreaseQuantity}
		/>);

		wrapper.find("button").first().simulate("click");
		expect(increaseQuantity).calledOnce;
	});
});
