import React, { useState } from "react";
import SquareButton from "./SquareButton";

function GameBoard() {
  // Stores if next player is X or O
  const [nextIsX, setNextIsX] = useState(true);

  // Changes player
  const toggleNextIsX = () => {
    setNextIsX(!nextIsX);
  };

  return (
    <div className="grid-container">
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
      <SquareButton xNext={nextIsX} toggleX={toggleNextIsX} />
    </div>
  );
}

export default GameBoard;
