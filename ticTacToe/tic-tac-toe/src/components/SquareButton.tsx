import React from "react";
import { useState } from "react";

function SquareButton() {
  const [value, updateValue] = useState("");
  const [isXNext, setIsNext] = useState(false);

  return (
    <div>
      <button
        className="testButton"
        onClick={() => updateValue(isXNext ? "X" : "O")}
      >
        {value}
      </button>
    </div>
  );
}

export default SquareButton;
