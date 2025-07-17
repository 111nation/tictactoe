import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { Board } from "./Board";
import * as GameState from "./GameState"


function GameStat(props) {
	switch (props.state) {
		case GameState.TURN_1:
			var msg = "Turn: Player X";
			break;
		case GameState.TURN_2:
			var msg = "Turn: Player O";
			break;
		case GameState.WIN_1:
			var msg = "Player X Wins!";
			break;
		case GameState.WIN_2:
			var msg = "Player O Wins!";
			break;
		case GameState.DRAW:
			var msg = "Draw! No one wins!";
			break;
	}
	
	return <p className="game-stat">{msg}</p>;
}

function ResetButton(props) {
	switch (props.state) {
		case GameState.GAME:
		case GameState.TURN_1:
		case GameState.TURN_2:
			var className = "reset-btn hidden";
			break;

		default: 
			var className = "reset-btn";
	}

	return <input type="button" value="Next Round" className={className} onClick={props.onClick}/>

}

function Scores(props) {
	return (
		<div className="scores-container">
			<p>
				<span className="score-heading">Player X:</span> 
				{props.player1}
			</p>
			<p>
				<span className="score-heading">Player O:</span> 
				{props.player2}
			</p>
		</div>
	);
}

function App() {
	let [board, setBoard] = useState(Array(9).fill(''));
	let [playerXTurn, setPlayerXTurn] = useState(true);
	let [gameState, setGameState] = useState(GameState.TURN_1);

	let [scores, setScores] = useState([0,0]);

	const changeBoard = (val, index) => {
		const newBoard = [...board];
		newBoard[index] = val;
		setBoard(newBoard);

		return newBoard;
	}

	const wins = (player) => {
		const newScores = [...scores];
		newScores[player]+=1;
		setScores(newScores);
	}

	const tileClicked = (tile) => {
		if (board[tile] !== '') return;
		if (GameState.getState(board) !== GameState.GAME) return;

		let newBoard = changeBoard(playerXTurn ? 'x' : 'o', tile);
		const next = !playerXTurn

		let state = GameState.getState(newBoard); 
		if (GameState.getState(newBoard) === GameState.GAME) {
			state = next ? GameState.TURN_1 : GameState.TURN_2;
		}

		if (state == GameState.WIN_1) wins(0); // Player 1 wins
		if (state == GameState.WIN_2) wins(1); // Player 2 wins

		setPlayerXTurn(next);
		setGameState(state);
	}

	const resetGame = () => {
		setBoard(Array(9).fill(''));
		setGameState(playerXTurn ? GameState.TURN_1 : GameState.TURN_2);
	}

	return (
		<div className="game-container">
			<h1 className="game-title">Catpuccin TicTacToe</h1>
			<GameStat state={gameState}/>
			<Scores player1={scores[0]} player2={scores[1]}/>
			<Board board={board} onClick={(tile) => tileClicked(tile)}/>
			<ResetButton state={gameState} onClick={resetGame}/>
		</div>
	);
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
