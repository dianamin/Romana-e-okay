/*
	Contains PageChangeCtrl - for changing views.
*/

var creations = [];

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
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: 'php/change_editable_page.php',
	            data: ({'lesson_id': id}),
	            success: function(data) {
	            	window.location.href = window.location.href + "admin/edit.php";
	            }
	        });
	    });
	}

});

