import pfp from "../assets/pfp.png";
import teamlogo from "../assets/team-logo.png";
import oShape from "../assets/o-shape.png"
import xShape from "../assets/x-shape.png"
import { useState } from "react";
function GamePage(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };
  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };


  return (
    <div>
      <div className="header-container">
        <input
          type="button"
          className="return-btn"
          onClick={props.onClick}
          value={props.value}
        />
      </div>
      <div className="pfp">
        <div className="pfp-container">
          <img src={pfp} width={150} height={150} className="pfp-img" />
          <div className="black">
            <span id="p1" className="name">
              {props.p1}
            </span>
          </div>
        </div>
        <div className="pfp-container">
          <img src={pfp} width={150} height={150} className="pfp-img" />
          <div className="black">
            <span id="p2" className="name">
              {props.p2}
            </span>
          </div>
        </div>
      </div>
      <div className="game-container">
        <div className="btn-container">
        <div className="tic-tac-toe">
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="square-container">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      {winner && (
        <div className="winner">
          Winner: {winner}
          <button className="play-again" onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
        </div>
        <img src={teamlogo} id="team-logo" />
      </div>
    </div>
  );
}
export default GamePage;
