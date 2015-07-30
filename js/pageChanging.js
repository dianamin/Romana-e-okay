/*
	Contains PageChangeCtrl - for changing views.
*/

var creations = [];
var progress = [];

app.controller('PageChangeCtrl', function ($scope, $http) {
	$scope.selected = 0;
	$scope.pages = pages;
	$scope.currentPage = pages[0];
	$scope.chosenView = "none";
	$scope.SelectedCreation = -1;
	$scope.editablePage = "";
	$scope.editing = false;
	$scope.pageVersion = "0";

	$scope.creations = [];

	$http({method: 'GET', url: 'php/get_lessons.php'}).success(function(data) {
		creations = data;
		$scope.creations = data;
	});


	$http({method: 'GET', url: 'php/get_user_progress.php'}).success(function(data) {
		progress = data;
		console.log(progress);
	});


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
		$scope.editing = false;
		//$('html, body').animate({scrollTop: 0}, "slow");
	}

	$scope.chooseView = function(x) {
		// Creations or Context
		$scope.chosenView = x;
		$scope.SelectedCreation = -1;
		showElement(x);
		var position = $('#alege').offset();
		$('html, body').animate({scrollTop: position.top - 100}, "slow");
		$scope.editing = false;
	}

	$scope.selectedPage = -1;

	$scope.chooseView2 = function(page) {
		$scope.selectedPage = page;
		var position = $('#scrollHere').offset();
		$('html, body').animate({scrollTop: position.top - 150}, "slow");
		$scope.editing = false;
	}

	$scope.openCreation = function(index) {
		//opens Creation
		$scope.editing = false;
		$scope.SelectedCreation = creations[index].page;
		$scope.editablePage = index;
		$scope.pageVersion = creations[index].version;
		$scope.SelectedCreation = $scope.SelectedCreation + $scope.pageVersion + ".html";
		//location.href = "#continut";
		var position = $('#continut').offset();
		$('html, body').animate({scrollTop: position.top}, "slow");
		$scope.editing = false;
	}

	$scope.editPage = function() {
		var id = $scope.creations[$scope.editablePage].global_id;
		window.location.href += "admin/#/edit/" + id;
	}

	$(function() {
       $('footer').waypoint(function() {
			if (userConnected) {

			}
		}, {
          	offset: '100%'
        });
    });

});

