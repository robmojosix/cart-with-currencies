import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { Price } from "../";
import styles from "./styles.scss";

describe("Price component", () => {
  it("Renders $ by default", () => {
    const price = 1.23;
    const wrapper = shallow(<Price price={price} />);

    expect(wrapper.find(`.${styles.currency}`).text()).to.equal("$");
  });

  it("Renders price correctly", () => {
    const price = 1.23;
    const wrapper = shallow(<Price price={price} />);

    expect(wrapper.find(`.${styles.price}`).text()).to.equal(price.toString());
  });

  it("Renders different currencies correctly", () => {
    const price = 1.23;
    const currency = "USD";
    const currencySymbol = "$";
    const wrapper = shallow(<Price currency={currency} price={price} />);

    expect(wrapper.find(`.${styles.currency}`).text()).to.equal(currencySymbol);
  });
});
