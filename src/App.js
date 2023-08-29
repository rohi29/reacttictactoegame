import React, { useState } from "react";

import { Board } from "./components/Board";

import './App.css';

const App = () => {

  const board = ["X","X","X","X","X","X","X","X","X"]

  return (
    <div className="App">
      <Board board={board} onClick={null} />
      
    </div>
  );
}

export default App;

