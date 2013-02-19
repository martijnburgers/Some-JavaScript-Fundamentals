// See the bug?
function isWinner(player, others) {
	var player;
	var highest = 0;

	for(var i=0, n = others.length; i < n; i++) {
		player = others[i];
		if (player.score > highest) {
			highest = player.score;			
		}
	}

	return player.score > highest;
}
















//var player inside the body loop simple redeclares a variable that was already
//in scope, namely the player parameter.