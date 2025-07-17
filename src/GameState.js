export const TURN_1 = 1;
export const TURN_2 = 2;
export const GAME = 3;
export const WIN_1 = 4;
export const WIN_2 = 5;
export const DRAW = 6;

export let playerXTurn = true;

function checkVertical(board, player, col, index=0) {
	// Checks vertically to see if occupied row 
	if (board[index*3+col] !== player) return false;
	if (index == 2) return true;

	return checkVertical(board, player, col, index+1);
}

function checkHorizontal(board, player, row, index=0) {
	// Checks horizontally to see if occupied row 
	if (board[index+(row*3)] !== player) return false;
	if (index == 2) return true;

	return checkHorizontal(board, player, row, index+1);
}

function checkDiagonal1(board, player, index=0) {
	if (board[index*4] !== player) return false;
	if (index === 2) return true;

	return checkDiagonal1(board, player, index+1);
}

function checkDiagonal2(board, player, index=0) {
	if (board[index*2 + 2] !== player) return false;
	if (index === 2) return true;

	return checkDiagonal2(board, player, index+1);
}

function checkPlayerWin(board, player) {
	for (let i = 0; i < 3; i++) {
		if (checkVertical(board, player, i)) return true;
		if (checkHorizontal(board, player, i)) return true;
	}

	if (checkDiagonal1(board, player)) return true;
	if (checkDiagonal2(board, player)) return true;

	return false;
}

function isFull(board) {
	for (let i in board) {
		if (board[i] === '') return false;
	}

	return true;
}


export function getState(board) {
	//	Expects valid gameboard
	if (checkPlayerWin(board, 'x')) return WIN_1;
	if (checkPlayerWin(board, 'o')) return WIN_2;
	if (isFull(board)) return DRAW;

	return GAME; // Continue the game
}
