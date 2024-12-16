import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Player = ({
  className,
  player,
  playerName,
  setPlayerName,
  currentPlayer,
  winner,
  isEditing,
  setIsEditing,
}) => {
  let handleClick = () => {
    if (winner) {
      toast.error("Game Over, You can't change the name now", {
        position: "top-left",
        autoClose: 2000,
        theme: "dark",
      });
      return;
    }
    if (isEditing) {
      if (playerName === "") {
        toast.error("PlayerName Cannot Be Empty", {
          position: "top-left",
          autoClose: 2000,
          theme: "dark",
        });
        return;
      } else {
        toast.success(`playerName Successfully Changed to ${playerName}!!`, {
          position: "top-left",
          autoClose: 2000,
          theme: "dark",
        });
      }
    }
    setIsEditing((edit) => !edit);
  };

  let handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <div
      className={className}
      style={{
        border: currentPlayer === playerName ? "1px solid #3c155e" : "",
      }}
    >
      {isEditing ? (
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={playerName}
          required
          maxLength={10}
        />
      ) : (
        <h2>{playerName}</h2>
      )}
      {!currentPlayer && (
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      )}
      <p>{player === "Player1" ? "X" : "O"}</p>
    </div>
  );
};

export default Player;
