/*
	Contains some useful functions. :)
*/

$(window).bind('scroll', function () {
	//keeps navbar fixed at the top of the screen when scrolling
	var pozitie = $('#topnavbar').offset();
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


var scrollToTop = function() {
	//smoothly scrolls to top of the page
	$('html, body').animate({scrollTop: 0}, 'slow');
}

var showLogo = function() {
	//only shows logo if screen is wide enough
	//return window.innerWidth >= 450;
	return true;
}

var showElement = function(id) {
	//fade in animation
	document.getElementById(id).setAttribute("style", "animation: fade-in 1s; -webkit-animation: fade-in 1s; opacity: 1;");
}
var hideElement = function(id) {
	//fade out animation
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

var removeDiacritics = function(text) {
	//removes diacritics from string text

	text = text.replace("ă", "a");
	text = text.replace("â", "a");
	text = text.replace("î", "i");
	text = text.replace("ș", "s");
	text = text.replace("ț", "t");
	return text;
}

var isLetter = function(c) {
	//checks if character c is letter

	if ('a' <= c && c <= 'z') return true;
	if ('A' <= c && c <= 'Z') return true;
	return false;
}


var countWords = function(s) {
	//counts words from string s
	var cnt = 0;
	var isWord;
	var a = s.split(new RegExp('[-+()*/:? ]', 'g'));
	for (var j = 0; j < a.length; j++) {
		isWord = false;
		for (var k = 0; k < a[j].length && isWord == false; k++) 
			if (isLetter(a[j][k])) isWord = true;
		if (isWord) cnt++;
	}
	return cnt;
}


var addHomework = function(s, t) {
	//adds homework to database and reloads page
	$(function(){
        $.ajax({
            type: "POST",
            url: 'php/add_homework.php',
            data: ({'s': s, 'tags': t}),
            success: function(data) {
				setTimeout(function() {
					location.reload();
				}, 1500);
            }
        });
    });
}