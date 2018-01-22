import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { MiniBasket } from "../";

describe("MiniBasket", () => {
  it("Renders total", () => {
    const total = 5;
    const wrapper = shallow(<MiniBasket total={total} />);

    expect(wrapper.find("h4").text()).to.equal(total.toString());
  });
});
