import React from "react";

export const Currency = ({ amount, fontSize }) => {
  const currencySymbol = <span className={"currency-symbol"}>₹</span>;
  return (
    <>
      {currencySymbol}
      <span style={{ fontSize: fontSize }} className={"list-item-font"}>
        {amount}
      </span>
    </>
  );
};
