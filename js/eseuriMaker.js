/*
	Builds argumentative essay.
*/

app.controller('TemeMakerCtrl', function ($scope) {
	$scope.Theme = "";
	$scope.Hypothesis = "";
	$scope.Arguments = new Array();
	$scope.Conclusion = "";

	$scope.pros = 0;
	$scope.cons = 0;
	$scope.verified = false;
	$scope.results = new Array;
	$scope.hasErrors = false;
	$scope.errors = "";
	$scope.th = ["Primul ", "Al doilea ", "Al treilea ", "Al patrulea ", "Al cincilea ", "Al șaselea ", "Al șaptelea ", "Al optâlea", "Al nouălea", "Al zecelea"];

	$scope.wordCount = 0;
	$scope.canBeSaved = false;
	$scope.Saved = false;

	$scope.Tags = "";

	// Initializing mandatory arguments

	$scope.Arguments[0] = {
		"domain": "",
		"text": "",
		"type": "pro",
		"okay": true,
		"hasDomain": true
	}
	$scope.Arguments[1] = {
		"domain": "",
		"text": "",
		"type": "pro",
		"okay": true,
		"hasDomain": true
	}

	$scope.addArgument = function() {
		if ($scope.Arguments.length == 10) alert("Sunt prea multe argumente!");
		else 
			$scope.Arguments.push({
				"domain": "",
				"text": "",
				"type": "pro",
				"okay": true,
			"hasDomain": true
			});
	}

	$scope.checkText = function(s) {
		//Checks if there are enough letters in string s to be considered valid

		s = s.replace('script', '');
		var l = s.length;
		s = s.toLowerCase();
		var letters = 0;
		for (var i = 0; i < l; i++) {
			var code = s.charCodeAt(i);
			if ((code >= 97) && (code <= 122)) letters++;
		}
		if (letters <= 3) return false;
		return true;
	}
	

	$scope.hasConjunction = function(s) {
		// If argument s begins with a conjunction, a different wording is necessary

		var l = s.length;
		if (l < 3) return false;
		if (s[0] == "c" || s[0] == "s") {
			if (s[1] == "ă" || s[1] == "a") {
				if (s[2] == " ") return true;
				return false;
			}
			return false;
		}

		return false;
	}


	$scope.count = function() {
		//counts words in essay 
		var cnt = 0;
		for (var i = 0; i < $scope.results.length; i++) {
			cnt += countWords($scope.results[i]);
		}
		return cnt;
	}

	$scope.generateEssay = function() {
		//building essay
		$scope.Saved = false;
		$scope.results = [];
		$scope.result = "Pornind de la premisa că " + $scope.Hypothesis + ", voi demonstra " + $scope.Theme + ". ";
		$scope.results.push($scope.result);
		$scope.crtpro = -1;
		$scope.crtcon = -1;
		var l = $scope.Arguments.length;

		for (var i = 0; i < l; i++) {
			$scope.result = "";
			if ($scope.Arguments[i].okay) {
				if ($scope.Arguments[i].type == "pro") {
					//argument is for the theme
					$scope.crtpro++;
					$scope.result += $scope.th[$scope.crtpro] + "argument ";
					$scope.result += "în favoarea ipotezei ";
				}
				else {
					//argument is against the theme
					$scope.crtcon++;
					if ($scope.crtcon == 0) $scope.result += "Pe de alta parte, un argument ";
					else $scope.result += $scope.th[$scope.crtcon] + "argument ";
					$scope.result += "în defavoarea ipotezei ";
				}

				if ($scope.Arguments[i].hasDomain) {
					//argument is from a domain
					$scope.result += "provine din domeniul " + $scope.Arguments[i].domain + " și ";
				}

				if ($scope.hasConjunction($scope.Arguments[i].text)) $scope.result += "este ";
				else $scope.result += "se referă la faptul că ";
				$scope.result += $scope.Arguments[i].text + ".";
				$scope.results.push($scope.result);
			}
		}

		$scope.Tags = $scope.Tags.replace("script", "");

		$scope.result = "În concluzie, " + $scope.Conclusion + ". ";
		$scope.results.push($scope.result);
		$scope.wordCount = $scope.count();
		var pos = $(window).scrollTop();
		$('html, body').animate({scrollTop: pos + 200}, 'slow');
	}

	$scope.saveHomework = function() {
		// if user is logged in, save essay and wants to save essay
		var FinalEssay = $scope.results[0];
		var l = $scope.results.length;
		for (i = 1; i < l; i++) {
			FinalEssay = FinalEssay + " <br /> <br />" + $scope.results[i];
		}
		addHomework(FinalEssay, $scope.Tags);
		$scope.Saved = true;
		$scope.canBeSaved = false;
	}


	$scope.eliminateExtraPoints = function(s) {
		// If input is something like "Romana e okay! is awesome....". No extra punctuation needed.
		var l = s.length;
		l--;
		while(l > 0 && s[l] == "." || s[l] == "!" || s[l] == "?") l--;
		l++;
		s = s.substring(0, l);

		s = s.replace(/</g, '');
		s = s.replace(/>/g, '');
		s = s.replace(/'/g, '');
		return s;
	}

	$scope.notEnoughArguments = function() {
		//checks if given arguments are enough to build essay
		if (!$scope.verified) return false;
		return ($scope.cons + $scope.pros < 2);
	}

	$scope.verifyData = function() {
		//verifies input data

		var l = $scope.Arguments.length;
		$scope.pros = 0;
		$scope.cons = 0;
		$scope.results = [];
		$scope.wordCount = 0;

		// eliminating extra punctuation
		$scope.Hypothesis = $scope.eliminateExtraPoints($scope.Hypothesis);
		$scope.Theme = $scope.eliminateExtraPoints($scope.Theme);

		for (var i = 0; i < l; i++) {
			// eliminating extra punctuation
			$scope.Arguments[i].domain = $scope.eliminateExtraPoints($scope.Arguments[i].domain);
			$scope.Arguments[i].text = $scope.eliminateExtraPoints($scope.Arguments[i].text);
			
			//checking domain
			if ($scope.checkText($scope.Arguments[i].domain) == false) {
				$scope.Arguments[i].hasDomain = false;
				$scope.Arguments[i].domain = "";
			}
			else {
				$scope.Arguments[i].hasDomain = true;
			}
			if ($scope.checkText($scope.Arguments[i].text) == false) $scope.Arguments[i].okay = false;
			else {
				$scope.Arguments[i].okay = true;
				//counting arguments
				if ($scope.Arguments[i].type == "pro") $scope.pros++;
				else $scope.cons++;
			}
		}

		$scope.Conclusion = $scope.eliminateExtraPoints($scope.Conclusion);
		//showing errors
		$scope.errors = "";
		$scope.hasErrors = false;
		$scope.canBeSaved = false;

		if ($scope.notEnoughArguments()) {
			$scope.hasErrors = true;
			$scope.errors += "Nu sunt suficiente argumente valide pentru a genera eseul. Trebuie minim două argumente.";
		}
		if ($scope.checkText($scope.Hypothesis) == false) {
			$scope.hasErrors = true;
			$scope.errors += "Nu ai completat corect câmpul premisei. ";
		}
		if ($scope.checkText($scope.Theme) == false) {
			$scope.hasErrors = true;
			$scope.errors += "Nu ai completat corect tema premisei. ";
		}
		if ($scope.checkText($scope.Conclusion) == false) {
			$scope.hasErrors = true;
			$scope.errors += "Nu ai completat concluzia. ";
		}


		$scope.verified = true;

		//generating essay, if everything's okay :)
		if (!$scope.hasErrors) {
			if (userConnected == true) $scope.canBeSaved = true;
			$scope.generateEssay();
		}
	}

	$scope.resetEssay = function() {
		//resets input
		var deleteEverything = confirm("Sigur vrei să ștergi tot eseul?");
		if (deleteEverything == true) {
			$scope.Tags = "";
			$scope.Theme = "";
			$scope.Hypothesis = "";
			$scope.Arguments = new Array();
			$scope.Conclusion = "";

			$scope.pros = 0;
			$scope.cons = 0;
			$scope.verified = false;
			$scope.results = [];
			$scope.hasErrors = false;
			$scope.errors = "";
			$scope.canBeSaved = false;
			$scope.Saved = false;

			$scope.wordCount = 0;
			$scope.Arguments[0] = {
				"domain": "",
				"text": "",
				"type": "pro",
				"okay": true,
				"hasDomain": true
			}
			$scope.Arguments[1] = {
				"domain": "",
				"text": "",
				"type": "pro",
				"okay": true,
				"hasDomain": true
			}

		}
	}

});
