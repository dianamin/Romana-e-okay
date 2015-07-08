/*
	Contains PageChangeCtrl - for changing views.
*/


app.controller('PageChangeCtrl', function ($scope) {
	$scope.selected = 0;
	$scope.pages = pages;
	$scope.currentPage = pages[0];
	$scope.chosenView = "none";
	$scope.SelectedCreation = -1;

	$scope.showLogo = function() {
		return window.innerWidth >= 450;
	}

	$scope.hasLider = function() {
		// for contexts
		return $scope.currentPage.lider != "-";
	}

	$scope.changePage = function(x) {
		// changing view
		scrollToTop();
		$scope.selected = x;
		$scope.SelectedCreation = -1;
		$scope.currentPage = pages[x];
		if ($scope.currentPage.category == "lesson") {
			$scope.chosenView = "none";
			$scope.SelectedCreation = -1;
		}
		//$('html, body').animate({scrollTop: 0}, "slow");
	}

	$scope.chooseView = function(x) {
		// Creations or Context
		$scope.chosenView = x;
		$scope.SelectedCreation = -1;
		showElement(x);
		var position = $('#alege').offset();
		$('html, body').animate({scrollTop: position.top - 100}, "slow");
	}

	$scope.selectedPage = -1;

	$scope.chooseView2 = function(page) {
		$scope.selectedPage = page;
		var position = $('#scrollHere').offset();
		$('html, body').animate({scrollTop: position.top - 150}, "slow");
	}

	$scope.openCreation = function(id) {
		//opens Creation
		console.log(creations[$scope.selected - 1][id].page);
		$scope.SelectedCreation = creations[$scope.selected - 1][id].page;
		//location.href = "#continut";
		var position = $('#continut').offset();
		$('html, body').animate({scrollTop: position.top}, "slow");
	}

});

