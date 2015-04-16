
var showElement = function(id) {
	document.getElementById(id).setAttribute("style", "animation: fade-in 1s; -webkit-animation: fade-in 1s; opacity: 1;");
}
var hideElement = function(id) {
	document.getElementById(id).setAttribute("style", "animation: fade-out 1s; -webkit-animation: fade-out 1s; opacity: 0;");
}

var getLevenshteinDistance = function(string1, string2) {
	var n = string1.length;
	var m = string2.length;

	var distance = [];

	for (var i = 0; i <= n; i++) distance[i] = new Array(m + 1);
	distance[0][0] = 0;
	for (var i = 0; i <= m; i++) distance[0][i] = i;
	for (var i = 0; i <= n; i++) distance[i][0] = i;

	for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= m; j++) {
			if (string1[i - 1] == string2[j - 1]) distance[i][j] = distance[i - 1][j - 1];
			else distance[i][j] = Math.min(distance[i - 1][j], distance[i - 1][j - 1], distance[i][j - 1]) + 1;
		}
	}


	return distance[n][m];
}

var acceptedError = function(string1, string2) {
	var n = string1.length;
	var m = string2.length;

	var d = getLevenshteinDistance(string1, string2);

	var epsilon = Math.min(n, m) / 2;
	return epsilon;
}
