import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = ({ value, onChange }) => {
  return (
    <div className={styles.root}>
      <input
        value={value}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder="0"
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
