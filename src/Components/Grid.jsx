import { toast } from "react-toastify";

const Grid = ({
  currentPlayer,
  playerOne,
  playerTwo,
  setCurrentPlayer,
  winner,
  setWinner,
  grid,
  setGrid,
}) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (grid) => {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  };

  const checkDraw = (grid) => {
    for (let i = 0; i < 9; i++) {
      if (!grid[i]) return false;
    }
    return true;
  };

  const handleClick = (boxNo) => {
    if (winner) {
      toast.error(`This round has ended please start a new round`, {
        theme: "dark",
        autoClose: 2000,
        position: "top-left",
      });
      return;
    } else if (grid[boxNo]) {
      toast.error("This Box is already filled!!!", {
        theme: "dark",
        autoClose: 2000,
        position: "top-left",
      });
      return;
    } else if (currentPlayer === null) {
      toast.error("Select The Player First!!!", {
        theme: "dark",
        autoClose: 2000,
        position: "top-left",
      });
      return;
    } else {
      let currentGrid = [...grid];
      currentGrid[boxNo] = currentPlayer === playerOne ? "X" : "O";
      setGrid([...currentGrid]);
      let gameWinner = checkWinner(currentGrid);
      if (gameWinner != null) {
        setWinner(gameWinner);
        toast.success(
          `${gameWinner === "X" ? playerOne : playerTwo} has won the game🥳`,
          {
            theme: "dark",
            autoClose: 2000,
            position: "top-left",
          }
        );
      } else if (checkDraw(currentGrid)) {
        setWinner("Draw");
        toast(`This game has been drawn😐`, {
          theme: "dark",
          autoClose: 2000,
          position: "top-left",
        });
      } else
        setCurrentPlayer(currentPlayer === playerOne ? playerTwo : playerOne);
    }
  };

  return (
    <div className="game-grid">
      {grid.map((value, index) => (
        <div className="elem" key={index} onClick={() => handleClick(index)}>
          {value}
        </div>
      ))}
    </div>
  );
};
export default Grid;
