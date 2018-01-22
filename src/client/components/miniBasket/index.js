import React from "react";
import { number } from "prop-types"
import { Icon } from "semantic-ui-react";
import styles from "./styles.scss";

const displayName = "MiniBasket";
const defaultProps = { toal: 0 };
const propTypes = { toal: number };

const component = ({ total }) => (
  <div className={styles.basket}>
    <Icon name="shopping basket"/>
    <h4 className={styles.total}>{total}</h4>
  </div>
);

component.displayName = displayName;
component.defaultProps = defaultProps;
component.propTypes = propTypes;
export default component;
