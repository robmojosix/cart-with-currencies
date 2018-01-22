import React from "react";
import { Price } from "../";
import { string, number, func } from "prop-types";
import { Card } from "semantic-ui-react";
import styles from "./styles.scss";

const displayName = "Product";

const defaultProps = {
	title: "",
	price: 0
};

const propTypes = {
	onClick: func.isRequired,
	title: string.isRequired,
	price: number.isRequired
};

const component = ({ title, price, onClick }) => (
	<Card>
		<Card.Content>
			<h2>{title}</h2>
			<Price price={price} />
			<button className={styles.cart} onClick={onClick} >{"Add to cart"}</button>
		</Card.Content>
	</Card>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
