<h2 align="center">Catpuccin TicTacToe: First Major React Project</h2>

<div align="center">
  <img height="200px" alt="image" src="https://github.com/user-attachments/assets/d9c1870f-5cf5-4e29-b054-487c6fc40380" />
  <img height="200px" alt="image" src="https://github.com/user-attachments/assets/004939ce-6aa3-4125-95b8-b37d90e7524f" />
  <img height="200px" alt="image" src="https://github.com/user-attachments/assets/f8f1bb10-a683-4d12-a4f3-f72248ae2c89" />
</div>

After years of using vanilla HTML/CSS/JavaScript I have experimented with **React**. As a result, <a href="https://tictactoe-111nation.vercel.app/">Catpuccin TicTacToe</a> was created. 

Catpuccin TicTacToe displays React's fundamental concepts of reusable components. Each tile on the board is a reusable `<Tile />` Component which contains `div` and `svg` elements representing playable tiles.

```jsx
function Tile(props) {
	return (
		<div className="tile">
			<Player player={props.player} onClick={props.onClick}/>
		</div>
	);
}
```
In `Board.js` each tile is loaded dynamically onto the board. `Board` accepts 1D array representing all the player's positions and displays them to the UI accordingly.

```jsx
function Board(props) {
	let board = props.board;

	return (
		<div className="board-container">
			{board.map((player, index) => <Tile key={index} player={player} onClick={() => props.onClick(index)}/>)}
		</div>
	);
}
```
