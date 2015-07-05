/*
	Contains some useful functions. :)
*/

$(window).bind('scroll', function () {
	var pozitie = $('#topnavbar').offset();
	console.log(pozitie.top);
	console.log($(window).scrollTop());
	if ($(window).scrollTop() <= window.innerHeight / 4) {
        $('#topnavbar').removeClass('fixed');
	}
	else {
	    if ($(window).scrollTop() >= pozitie.top) {
	        $('#topnavbar').addClass('fixed');
	    } else {
	        $('#topnavbar').removeClass('fixed');
	    }
	}
});

var showLogo = function() {
	console.log ("Screen width: ", window.innerWidth);
	return window.innerWidth >= 450;
}

var showElement = function(id) {
	document.getElementById(id).setAttribute("style", "animation: fade-in 1s; -webkit-animation: fade-in 1s; opacity: 1;");
}
var hideElement = function(id) {
	document.getElementById(id).setAttribute("style", "animation: fade-out 1s; -webkit-animation: fade-out 1s; opacity: 0;");
}

var getLevenshteinDistance = function(string1, string2) {
	/*
		Calculates the Levenshtein Distance (minimum number of single-character edits) between two strings
		using dynamic programming.
	*/

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
	/*
		When the Levenshtein Distance between two strings is smaller or equal two the returned value, those
		strings are almost equal and the input string will be corrected.
	*/

	var n = string1.length;
	var m = string2.length;

	var d = getLevenshteinDistance(string1, string2);

	var epsilon = Math.min(n, m) / 2;
	return epsilon;
}
