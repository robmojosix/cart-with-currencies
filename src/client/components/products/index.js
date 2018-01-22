import React from "react";
import { func, array } from "prop-types";
import { Product } from "../";
import { Card } from "semantic-ui-react";

const displayName = "Products";

const defaultProps = {
	addToCart: null,
	products: []
};

const propTypes = {
	addToCart: func.isRequired,
	products: array.isRequired
};

const component = ({ addToCart, products }) => (
	<div>
		<h2>{"Products"}</h2>
		<Card.Group>
			{
				products.map((product) => {
					const { title, price, id } = product;
					return (
						<Product
							key={id}
							title={title}
							price={price}
							onClick={ () => addToCart(id) }
						/>
					);
				})
			}
		</Card.Group>
	</div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
