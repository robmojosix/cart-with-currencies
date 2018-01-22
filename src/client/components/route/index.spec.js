import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import Route from "./index";
import Products from "../../redux/containers/products";
import Cart from "../../redux/containers/cart";
import MiniBasket from "../miniBasket";

import sandbox from "../../../../utilities/tests/sandbox";

describe("Route component", () => {
  context("on shop route", () => {
    let wrapper;
    beforeEach(() => {
      const route = "shop";
      const changeRouteSpy = sandbox.spy();
      wrapper = shallow(<Route route={route} changeRoute={changeRouteSpy} />);
    });

    it("renders the shop", () => {
      expect(wrapper.find(MiniBasket).length).to.equal(1);
      expect(wrapper.find(Products).length).to.equal(1);
      expect(wrapper.find(Cart).length).to.equal(0);
    });

    it("renders the CHECKOUT button", () => {
      expect(wrapper.find("button").text()).to.equal("CHECKOUT");
    });
  });

  context("on cart route", () => {
    let wrapper;
    beforeEach(() => {
      const route = "cart";
      const changeRouteSpy = sandbox.spy();
      wrapper = shallow(<Route route={route} changeRoute={changeRouteSpy} />);
    });

    it("renders the cart", () => {
      expect(wrapper.find(MiniBasket).length).to.equal(1);
      expect(wrapper.find(Products).length).to.equal(0);
      expect(wrapper.find(Cart).length).to.equal(1);
    });

    it("renders the BACK button", () => {
      expect(wrapper.find("button").text()).to.equal("BACK");
    });
  });
})
