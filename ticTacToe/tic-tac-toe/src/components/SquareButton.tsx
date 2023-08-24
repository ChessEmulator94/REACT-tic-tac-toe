import React from "react";
import { useState } from "react";

function SquareButton({ xNext, toggleX }) {
  const [value, updateValue] = useState("");
  const [isXNext, setIsXNext] = useState(true);

  const [isDisabled, setDisabled] = useState(false);

  const toggleClickable = () => {
    setDisabled(true);
  };

  const handleClick = () => {
    updateValue(xNext ? "X" : "O");
    toggleX(!xNext);
    setDisabled(true);
  };

  return (
    <div>
      <button
        className={isDisabled ? "disabled-button" : "testButton"}
        onClick={() => handleClick()}
        disabled={isDisabled}
      >
        {value}
      </button>
    </div>
  );
}

export default SquareButton;
