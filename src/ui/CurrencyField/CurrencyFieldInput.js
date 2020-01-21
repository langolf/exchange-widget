import React from "react";
import Input from "../Input/Input";

const CurrencyFieldInput = props => (
  <Input inputMode="numeric" pattern="[0-9]*" placeholder="0" />
);

export default CurrencyFieldInput;
