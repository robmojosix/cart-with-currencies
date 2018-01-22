import React from "react";
import { string, number } from "prop-types"
import styles from "./styles.scss";
const defaultCurrency = 'USD';

const mapCurrencyToSymbol = {
  'GBP': '£',
  'USD': '$',
  "AUD": 'A$',
  "CAD": 'C$',
  "MXN": 'M$'
};

const displayName = "Price";

const defaultProps = {
  currency: defaultCurrency,
  price: 0.00
}

const propTypes = {
  curreny: string,
  price: number.isRequired
}

const component = ({ currency, price }) => (
  <div className={styles.priceContainer} >
    <span className={styles.currency}>
      { mapCurrencyToSymbol[currency] }
    </span>
    <span className={styles.price}>{price}</span>
  </div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
