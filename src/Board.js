import React from "react";
import './index.css';

function Player(props) {
	if (props.player == '') return <svg onClick={props.onClick} className="player"></svg>;

	if (props.player == "x") {
		return (
			<svg onClick={props.onClick} className="player">
				<line x1="5%" y1="5%" x2="95%" y2="95%" style={{stroke:'rgb(237, 135, 150)', strokeWidth:15}} />
				<line x1="95%" y1="5%" x2="5%" y2="95%" style={{stroke:'rgb(237, 135, 150)', strokeWidth:15}} />
			</svg>
		);
	} 

	return (
		<svg className="player" onClick={props.onClick}>
			<circle cx="50%" cy="50%" r="50%" fill="rgb(138, 173, 244)" />
			<circle cx="50%" cy="50%" r="35%" fill="rgb(24, 25, 38)" />
		</svg>
	);
}

function Tile(props) {
	return (
		<div className="tile">
			<Player player={props.player} onClick={props.onClick}/>
		</div>
	);
}

function Board(props) {
	let board = props.board;

	return (
		<div className="board-container">
			{board.map((player, index) => <Tile key={index} player={player} onClick={() => props.onClick(index)}/>)}
		</div>
	);
}

export { Board };
