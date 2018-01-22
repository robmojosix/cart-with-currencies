import React from "react";
import { array, func } from "prop-types"
import styles from "./styles.scss";

const displayName = "SelectCurrency";

const defaultProps = {
  options: [],
  updateCurrency: null
}

const propTypes = {
  options: array.isRequired,
  updateCurrency: func
}

const component = ({ options, updateCurrency }) => (
  <select className={styles.select} onChange={ (event) => updateCurrency(event.target.value) }>
  {
    options.map((rate, i) => (
      <option
        key={i}
      >{rate}</option>
    ))
  }
  </select>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
