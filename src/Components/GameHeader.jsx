import React from "react";
import Player from "./Player";

const GameHeader = ({
  playerOne,
  playerTwo,
  setPlayerOne,
  setPlayerTwo,
  currentPlayer,
  isEditingPlayer1,
  isEditingPlayer2,
  setIsEditingPlayer1,
  setIsEditingPlayer2,
}) => {
  return (
    <div className="game-header">
      <Player
        className="player"
        player="Player1"
        playerName={playerOne}
        setPlayerName={setPlayerOne}
        currentPlayer={currentPlayer}
        isEditing={isEditingPlayer1}
        setIsEditing={setIsEditingPlayer1}
      />
      <Player
        className="player"
        player="Player2"
        playerName={playerTwo}
        setPlayerName={setPlayerTwo}
        currentPlayer={currentPlayer}
        isEditing={isEditingPlayer2}
        setIsEditing={setIsEditingPlayer2}
      />
    </div>
  );
};

export default GameHeader;
