import { connect } from "react-redux";
import * as actions from "../actions";
import Route from "../../components/route";
import { numberOfProductsInCart } from "../utils";

// Total products should belong to the MiniBasket
// Adding here to make minibasket simple.
export const mapStateToProps = (state) => {
  return {
    route: state.route,
    totalProducts: numberOfProductsInCart(state.cart.products)
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    changeRoute: (route) => {
      dispatch(actions.changeRoute(route));
    }
  }
};

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Route);

export default container;
