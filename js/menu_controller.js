function start_game(){
	name = prompt("User name");
	
	sessionStorage.setItem("username", name);
	
	loadpage("./html/game.html");
}

function phaser_game(){
	loadpage("./html/phasergame.html");
}

function infinite_game(){
	loadpage("./html/infinite.html");
}

function leaderboard(){
	loadpage("./html/leaderboard.html");
}

function exit (){
	if (name != ""){
		alert("Leaving " + name + "'s game");
	}
	name = "";
}

function menu(){
	loadpage("../index.html");
}

function options(){
	loadpage("./html/options.html");
}

function load(){
	loadpage("./html/load.html");
}

