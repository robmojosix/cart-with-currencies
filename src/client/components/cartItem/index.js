import React from "react";
import { Price } from "../";
import { string, number, func } from "prop-types";
import { Card } from "semantic-ui-react";

const displayName = "cartItem";

const defaultProps = {
	id: null,
	title: null,
	price: null,
	quantity: 1,
	increaseQuantity: null,
	decreaseQuantity: null,
};

const propTypes = {
	id: number.isRequired,
	title: string.isRequired,
	price: number.isRequired,
	quantity: number.isRequired,
	increaseQuantity: func.isRequired,
	decreaseQuantity: func.isRequired,
	currency: string,
};

const component = ({ currency, id, title, price, quantity, increaseQuantity, decreaseQuantity }) => (
	<Card>
		<Card.Content>
			<h3>{title}</h3>
			<Price currency={currency} price={price} />
			<p>quantity {quantity}</p>
			<button onClick={ () => increaseQuantity(id) }>+</button>
			<button onClick={ () => decreaseQuantity(id) }>-</button>
		</Card.Content>
	</Card>
);

component.displayName = displayName;
component.propTypes = propTypes;
component.defaultProps = defaultProps;
export default component;
