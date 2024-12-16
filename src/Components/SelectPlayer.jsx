import React from "react";
const SelectPlayer = ({ playerOne, playerTwo, handleSelectPlayer }) => {
  return (
    <div className="player-selection">
      <p>Select Name of the player who will start first</p>
      <div className="player-choice">
        <button onClick={() => handleSelectPlayer(playerOne)}>
          {playerOne}
        </button>
        <button onClick={() => handleSelectPlayer(playerTwo)}>
          {playerTwo}
        </button>
      </div>
    </div>
  );
};

export default SelectPlayer;
