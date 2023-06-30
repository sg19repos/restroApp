import React from "react";
import { GlobalFont, GlobalFontColor } from "../../../Themes/GlobalThemes";

export const Currency = ({ amount, fontSize, color = GlobalFontColor }) => {
  const currencySymbol = <span className={"currency-symbol"}>₹</span>;
  return (
    <div style={{ color: color, fontSize: fontSize }}>
      {currencySymbol}
      <span
        style={{ fontSize: fontSize, ...GlobalFont }}
        className={"list-item-font"}
        color={color}
      >
        {amount}
      </span>
    </div>
  );
};
