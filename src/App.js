import React, { useState } from "react";

import { Board } from "./components/Board";

import './App.css';

const App = () => {

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null))
  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updatedBoard);

  

    
    setXPlaying(!xPlaying);
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />
      
    </div>
  );
}

export default App;

