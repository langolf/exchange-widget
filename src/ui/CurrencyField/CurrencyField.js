import React, { useState } from "react";
import Input from "../Input/Input.js";
import Selector from "../Selector/Selector.js";
import Balance from "../Balance/Balance.js";
import style from "./CurrencyField.module.css";
import StatusLine from "../StatusLine/StatusLine.js";

const CurrencyField = props => {
  const [balance, setBalance] = useState(20);
  const [value, setValue] = useState("");

  return (
    <form className={style.root}>
      <h1>Exchange</h1>
      <div className={style.field}>
        <div className={style.fieldSelector}>
          <Selector />
        </div>
        <div className={style.fieldInput}>
          <Input value={value} />
        </div>
      </div>

      <div className={style.status}>
        <div className={style.balance}>
          <Balance value={balance} />
        </div>

        <div className={style.message}>
          <StatusLine message={"hello"} />
        </div>
      </div>
    </form>
  );
};

export default CurrencyField;
