import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import Cart from "../../components/cart";
import { lookUpProductById } from "../utils";

const mapProductsAndQuantity = (state) => (
	state.cart.products.map((item) => {
		return {
			...lookUpProductById(state.products, item.id),
			quantity: item.quantity
		};
	})
);

export const mapStateToProps = (state) => {
	return {
		products: mapProductsAndQuantity(state),
		total: state.cart.total,
		currency: state.exchangeRates.rate,
		rates: state.exchangeRates.rates
	};
};

export const mapDispatchToProps = (dispatch) =>
	bindActionCreators({
		increaseQuantity: actions.increaseQuantityHandler,
		decreaseQuantity: actions.decreaseQuantityHandler,
		fetchExchangeRates: actions.fetchExchangeRates,
		updateExchangeRate: actions.updateExchangeRateHandler
	}, dispatch);

const container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);

export default container;
