app.controller('TemeMakerCtrl', function ($scope) {
	$scope.Theme;
	$scope.Hypothesis;
	$scope.Arguments = new Array();
	$scope.pros = 0;
	$scope.cons = 0;

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
	}

	$scope.verifyArguments = function() {
		var l = $scope.Arguments.length;
		$scope.pros = 0;
		$scope.cons = 0;

		for (var i = 0; i < l; i++) {
			if ($scope.checkText($scope.Arguments[i].domain) == false) $scope.Arguments[i].hasDomain = false;
			if ($scope.checkText($scope.Arguments[i].text) == false) $scope.Arguments[i].okay = false;
			else {
				if ($scope.Arguments[i].type == "pro") $scope.pros++;
				else $scope.cons++;
			}
		}
		console.log($scope.pros, $scope.cons);
	}
});
