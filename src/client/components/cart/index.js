import React from "react";
import { CartItem, Price } from "../";
import { array, func, number, string, object } from "prop-types";
import fetch from "universal-fetch";
import { currenciesUrl } from "../../config";
import { SelectCurrency } from "../";

const displayName = "Cart";

const defaultProps = {
	products: [],
	total: 0,
	increaseQuantity: null,
	decreaseQuantity: null,
	fetchExchangeRates: null,
	updateExchangeRate: null
};

const propTypes = {
	products: array.isRequired,
	total: number.isRequired,
	currency: string,
	increaseQuantity: func.isRequired,
	decreaseQuantity: func.isRequired,
	fetchExchangeRates: func.isRequired,
	updateExchangeRate: func.isRequired,
	rates: object
};

// should be controlled by redux store
// for single source of truth
// would be added after the fetchRates call
const rateOptions = ["USD", "GBP", "AUD", "CAD", "MXN"];

// not a great funciton, this should be in the XR reducer
// and price should be recalculated after each UPDATE_XR event is triggered
const calculatePriceWithCurrency = (price, currency, rates) => {
	const currencyKey = `USD${currency}`;
	const rate = rates[currencyKey];

	// crude exchange rate calculation
	return Math.round((price * rate) * 100) / 100;
}

// As this is called only when cart is display
// we breidly see no results displayed for price when we first
// switch to the cart route.
// I would fix this by fetching the exchange rates data in the route component ahead of time
// A better idea would also be to fetch it on the server.
class Cart extends React.Component {
	componentWillMount() {
		this.props.fetchExchangeRates(currenciesUrl);
	}

	render() {
		const { rates, currency, total, products, increaseQuantity, decreaseQuantity, updateExchangeRate } = this.props;
		return (
			<div>
				{
					products.map((item, i) => (
						<CartItem
							key={i}
							id={item.id}
							title={item.title}
							price={calculatePriceWithCurrency(item.price, currency, rates)}
							currency={currency}
							quantity={item.quantity}
							increaseQuantity={increaseQuantity}
							decreaseQuantity={decreaseQuantity}
						/>
					))
				}
				<span>Total: </span>
				<Price currency={currency} price={calculatePriceWithCurrency(total, currency, rates)} />
				<SelectCurrency options={rateOptions} updateCurrency={updateExchangeRate}/>
			</div>
		)
	}
}

Cart.displayName = displayName;
Cart.defaultProps = defaultProps;
Cart.propTypes = propTypes;
export default Cart;
