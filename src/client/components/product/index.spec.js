import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sandbox from "../../../../utilities/tests/sandbox";
import { Product, Price } from "../";

describe("product", () => {
	const title = "product a";
	const price = 23;
	const onClick = sandbox.spy();

	it("renders the title correctly", () => {
		const wrapper = shallow(<Product
			title={title}
			price={price}
			onClick={onClick}
		/>);

		expect(wrapper.find("h2").text()).to.equal(title);
	});

	it("renders the correct price format", () => {
		const wrapper = shallow(<Product
			title={title}
			price={price}
			onClick={onClick}
		/>);

		expect(wrapper.find(Price).prop('price')).to.equal(price);
	});

	it("calls the onclick prop when the add to basket button is clicked", () => {
		const wrapper = shallow(<Product
			title={title}
			price={price}
			onClick={onClick}
		/>);

		wrapper.find("button").simulate("click");
		expect(onClick).calledOnce;
	});
});
