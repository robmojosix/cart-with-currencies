import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { Products, Product } from "../";

describe("Products", () => {
	let wrapper;
	const addToCart = () => {};
	const products = [
		{
			id: 1,
			title: "product a",
			price: 34
		},
		{
			id: 2,
			title: "product b",
			price: 21
		},
	];

	beforeEach(() => {
		wrapper = shallow(<Products
			addToCart={addToCart}
			products={products}
		/>);
	});

	it("renders the correct number of products", () => {
		expect(wrapper.find(Product).length).to.equal(products.length);
	});
});
