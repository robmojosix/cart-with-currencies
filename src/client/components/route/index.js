import React from "react";
import { string, func, number } from "prop-types";
import Products from "../../redux/containers/products";
import Cart from "../../redux/containers/cart";
import MiniBasket from "../miniBasket";
import { Segment } from "semantic-ui-react";
import styles from "./styles.scss";

const displayName = "Route";
const defaultProps = { route: "shop" }
const propTypes = {
	route: string,
	totalProducts: number,
  changeRoute: func.isRequired
};

const routes = {
  shop: "shop",
  cart: "cart"
};

const isShopRoute = (route) => route === routes.shop;
const isCartRoute = (route) => route === routes.cart;

// Header should be abstarcted out into a component
// totalProducts props belongs with MiniBasket, for speed I'm leaving it here.
const Component = ({ route, changeRoute, totalProducts }) => (
  <Segment.Group>
		<Segment>
			<h2>Mock Shop</h2>
			<MiniBasket total={totalProducts}/>
		</Segment>
  	<Choose>
  		<When condition={ isShopRoute(route) }>
				<Segment>
	  	    <Products />
	        <button className={styles.cta} onClick={ () => changeRoute(routes.cart) }>CHECKOUT</button>
				</Segment>
  	  </When>
  	  <When condition={ isCartRoute(route) }>
				<Segment>
	  	    <Cart />
					<button className={styles.cta} onClick={ () => changeRoute(routes.shop) }>BACK</button>
				</Segment>
  	  </When>
  	</Choose>
  </Segment.Group>
)

Component.displayName = displayName;
Component.defaultProps = defaultProps;
Component.propTypes = propTypes;
export default Component;
