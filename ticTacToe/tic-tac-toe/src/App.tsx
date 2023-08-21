import { useState } from "react";
import SquareButton from "./components/SquareButton";
import "./App.css";
import "./index.css";

function App() {
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

export default App;
