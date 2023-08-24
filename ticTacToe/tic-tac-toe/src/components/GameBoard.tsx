import React from "react";
import SquareButton from "./SquareButton";

function GameBoard() {
  return (
    <div className="grid-container">
      <SquareButton />
      <SquareButton />
      <SquareButton />
      <SquareButton />
      <SquareButton />
      <SquareButton />
      <SquareButton />
      <SquareButton />
      <SquareButton />
    </div>
  );
}

export default GameBoard;
