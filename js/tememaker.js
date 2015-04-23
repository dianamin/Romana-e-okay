app.controller('TemeMakerCtrl', function ($scope) {
	$scope.Theme = "";
	$scope.Hypothesis = "";
	$scope.Arguments = new Array();
	$scope.pros = 0;
	$scope.cons = 0;
	$scope.verified = false;
	$scope.result;
	$scope.hasErrors = false;
	$scope.errors = "";

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
		$scope.Arguments.push({
			"domain": "",
			"text": "",
			"type": "pro",
			"okay": true,
		"hasDomain": true
		});
	}

	$scope.checkText = function(s) {
		var l = s.length;
		s = s.toLowerCase();
		var letters = 0;
		for (var i = 0; i < l; i++) {
			var code = s.charCodeAt(i);
			console.log(code);
			if ((code >= 97) && (code <= 122)) letters++;
		}
		console.log(s);
		if (letters <= 3) return false;
		return true;
	}


	$scope.generateEssay = function() {
		console.log("generating...");

		$scope.result = "Pornind de la premisa că " + $scope.Hypothesis + ", voi demonstra " + $scope.Theme + ". ";
		$scope.result = $scope.result + "/n bla bla";

	}

	$scope.enoughArguments = function() {
		return ($scope.cons + $scope.pros >= 2);
	}
	$scope.notEnoughArguments = function() {
		if (!$scope.verified) return false;
		return ($scope.cons + $scope.pros < 2);
	}

	$scope.verifyArguments = function() {
		var l = $scope.Arguments.length;
		$scope.pros = 0;
		$scope.cons = 0;

		for (var i = 0; i < l; i++) {
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
				if ($scope.Arguments[i].type == "pro") $scope.pros++;
				else $scope.cons++;
			}
		}

		$scope.verified = true;

		if ($scope.notEnoughArguments()) {
			$scope.hasErrors = true;
			$scope.errors += "Nu sunt suficiente argumente valide pentru a genera eseul. ";
		}
		if ($scope.checkText($scope.Hypothesis) == false) {
			$scope.hasErrors = true;
			$scope.errors += "Nu ai completat corect câmpul premisei. ";
		}
		if ($scope.checkText($scope.Theme) == false) {
			$scope.hasErrors = true;
			$scope.errors += "Nu ai completat corect tema premisei. ";
		}


		if ($scope.enoughArguments()) $scope.generateEssay();
	}

});
