import React from "react";
import Grid from "./Components/Grid.jsx";
import { useState } from "react";
import SelectPlayer from "./Components/SelectPlayer.jsx";
import { toast } from "react-toastify";
import GameHeader from "./Components/GameHeader.jsx";
import Winner from "./Components/Winner.jsx";
import Confetti from "react-confetti";
const App = () => {
  const [playerOne, setPlayerOne] = useState("Player1");
  const [playerTwo, setPlayerTwo] = useState("Player2");
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [isEditingPlayer1, setIsEditingPlayer1] = useState(false);
  const [isEditingPlayer2, setIsEditingPlayer2] = useState(false);

  const handleSelectPlayer = (playerName) => {
    if (isEditingPlayer1 || isEditingPlayer2) {
      toast.error("Please save the edited names before selecting player", {
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }
    setCurrentPlayer(playerName);
    toast.success(`${playerName} will start first`, {
      theme: "dark",
      autoClose: 2000,
      position: "top-left",
    });
  };

  const handleReset = () => {
    setCurrentPlayer(null);
    setWinner(null);
    setGrid(Array(9).fill(null));
  };

  return (
    <>
      <header>
        <h1>Tic Tac Toe</h1>
      </header>
      <div className="game">
        <GameHeader
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          playerTwo={playerTwo}
          setPlayerTwo={setPlayerTwo}
          currentPlayer={currentPlayer}
          isEditingPlayer1={isEditingPlayer1}
          isEditingPlayer2={isEditingPlayer2}
          setIsEditingPlayer1={setIsEditingPlayer1}
          setIsEditingPlayer2={setIsEditingPlayer2}
        />
        <Grid
          currentPlayer={currentPlayer}
          playerOne={playerOne}
          playerTwo={playerTwo}
          setCurrentPlayer={setCurrentPlayer}
          winner={winner}
          setWinner={setWinner}
          grid={grid}
          setGrid={setGrid}
        />
      </div>
      {!currentPlayer && (
        <SelectPlayer
          playerOne={playerOne}
          playerTwo={playerTwo}
          handleSelectPlayer={handleSelectPlayer}
        />
      )}
      {winner && (
        <Winner
          winner={winner}
          handleReset={handleReset}
          playerOne={playerOne}
          playerTwo={playerTwo}
        />
      )}
      {winner && winner != "Draw" && (
        <Confetti style={{ width: "100%", height: "100%" }} />
      )}
    </>
  );
};

export default App;
