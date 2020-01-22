import React from 'react';
import Input from 'ui/Input/Input';

const CurrencyFieldInput = props => (
  <Input inputMode="numeric" pattern="[0-9]*" placeholder="0" {...props} />
);

export default CurrencyFieldInput;
