import React from "react";

const Button = ({ symbol, operation }) => {
  return (
    <button className="button" onClick={operation}>
      {symbol}
    </button>
  );
};

export default Button;
