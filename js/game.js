// Constants for tic-tac-toe
var NO_OF_BOXES = 9;
var NO_OF_BLOCKS = 8;
var map_box_block = {
	0: ['row0', 'col0', 'diag1'],
	1: ['row0', 'col1'],
	2: ['row0', 'col2', 'diag2'],
	3: ['row1', 'col0'],
	4: ['row1', 'col1', 'diag1', 'diag2'],
	5: ['row1', 'col2'],
	6: ['row2', 'col0', 'diag2'],
	7: ['row2', 'col1'],
	8: ['row2', 'col2', 'diag1']
}

// Scores of players
var SCORES = {
	X: 0,
	O: 0
}

// Current status of game
var NO_OF_TURNS = 0;
var CURRRENT_PLAYER = 'X';

// var row0 = [];
// var row1 = [];
// var row2 = [];
// var col0 = [];
// var col1 = [];
// var col2 = [];
// var diag1 = [];
// var diag2 = [];
var game_status = {
	row0: [],
	row1: [],
	row2: [],
	col0: [],
	col1: [],
	col2: [],
	diag1: [],
	diag2: []
};

function reset_game() {
	game_status = {
		row0: [],
		row1: [],
		row2: [],
		col0: [],
		col1: [],
		col2: [],
		diag1: [],
		diag2: []
	};
	NO_OF_TURNS = 0;
	CURRRENT_PLAYER = 'X';

}

function next_turn() {
	console.log('In next_turn()');
	NO_OF_TURNS += 1;
	if (CURRRENT_PLAYER == 'X'){
		CURRRENT_PLAYER = 'O';
		console.log(CURRRENT_PLAYER);
	}
	else if (CURRRENT_PLAYER == 'O'){
		CURRRENT_PLAYER = 'X';
		console.log(CURRRENT_PLAYER);
	}
}

function win_game() {
	alert("Player " + CURRRENT_PLAYER + " won!");
	SCORES[CURRRENT_PLAYER] += 1;
}

function update_status(box) {
	// Array of blocks (string) in which
	// a particular box is present
	var blocks = map_box_block[box];
	// console.log(blocks);
	var blocks_length = blocks.length;
	console.log(game_status);
	for(var i=0; i < blocks_length; i++) {
		var block = blocks[i];
		console.log(blocks);
		console.log(block);
		console.log(game_status);
		console.log(game_status[block]);
		if(game_status[block].indexOf(CURRRENT_PLAYER) == -1 && game_status[block].length == 0) {
			game_status[block].push(CURRRENT_PLAYER);
		}
		else if(game_status[block].indexOf(CURRRENT_PLAYER) != -1) {
			game_status[block].push(CURRRENT_PLAYER);
		}
		if (game_status[block].length == 3) {
			win_game();
			reset_game();
		}
	}
	next_turn();
}
