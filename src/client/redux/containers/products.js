import { connect } from "react-redux";
import * as actions from "../actions";
import Products from "../../components/products";

export const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => {
			dispatch(actions.addToCartHandler(id));
		}
	};
};

const container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Products);

export default container;
