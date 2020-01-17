import React from "react";
import styles from "./Balance.module.css";

const Balance = props => {
  return (
    <div className={styles.root}>
      <span>Balance: </span>
      <span>$</span>
      {props.value}
    </div>
  );
};

export default Balance;
