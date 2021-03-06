/********************* Constants for tic-tac-toe ********************/
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
var BLANK = '';

/************************ Scores of players *************************/
var SCORES = {
	X: 0,
	O: 0
}

/********************** Current status of game **********************/
var NO_OF_TURNS = 0;
var CURRENT_PLAYER = 'X';
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
var BOARD = [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK];

/********************** Utility functions for game ******************/
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
	CURRENT_PLAYER = 'X';
	for(var i=1; i<10; i++){
		var id="div"+i;
		// console.log(id);
		document.getElementById(id).innerHTML = "";
	}
	document.getElementById("msg").innerHTML = "Player X turn";
	BOARD = [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK];
}

function next_turn() {
	NO_OF_TURNS += 1;
	if (CURRENT_PLAYER == 'X'){
		CURRENT_PLAYER = 'O';
	}
	else if (CURRENT_PLAYER == 'O'){
		CURRENT_PLAYER = 'X';
	}
}

function win_game() {
	alert("Player " + CURRENT_PLAYER + " won!");
	SCORES[CURRENT_PLAYER] += 1;
}

function draw_game(argument) {
	alert("It's a draw!")
}

/**************************** Main function for game ****************/
function update_status(box) {
	// Array of blocks (string) in which
	// a particular box is present
	if(BOARD[box] != BLANK) {
		alert("This box is already filled");
		return;
	}
	// console.log('lkjlkj');
	BOARD[box] = CURRENT_PLAYER;
	element_id = "div" + (box+1);
	document.getElementById(element_id).innerHTML = "<p style='padding-top: 0px; font-size:32px'>" + CURRENT_PLAYER + "</p>";
	var blocks = map_box_block[box];
	var blocks_length = blocks.length;
	for(var i=0; i < blocks_length; i++) {
		var block = blocks[i];
		if(game_status[block].indexOf(CURRENT_PLAYER) == -1 && game_status[block].length == 0) {
			game_status[block].push(CURRENT_PLAYER);
		}
		else if(game_status[block].indexOf(CURRENT_PLAYER) != -1) {
			game_status[block].push(CURRENT_PLAYER);
		}
		console.log(NO_OF_TURNS);
		if (game_status[block].length == 3) {
			win_game();
			reset_game();
		}
		else if(NO_OF_TURNS == 8) {
			draw_game();
			reset_game();
		}
	}
	next_turn();
}
