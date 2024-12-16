import React from "react";

const Winner = ({ winner, handleReset, playerOne, playerTwo }) => {
  let winnerMessage = <h1>This game has been drawn start the new game.</h1>;

  if (winner !== "Draw") {
    winnerMessage = (
      <h1>
        Winner of the current game is {winner == "X" ? playerOne : playerTwo}🥇
      </h1>
    );
  }

  return (
    <div className="winner-div">
      {winnerMessage}
      <button className="reset" onClick={handleReset}>
        New Game
      </button>
    </div>
  );
};

export default Winner;
