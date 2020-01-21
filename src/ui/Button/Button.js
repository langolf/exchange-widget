import React from "react";
import clsx from "clsx";

import style from "./Button.module.css";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx({
        [style.button]: true,
        [className]: true
      })}
      type={props.type || "button"}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
