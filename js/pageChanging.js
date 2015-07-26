/*
	Contains PageChangeCtrl - for changing views.
*/


app.controller('PageChangeCtrl', function ($scope) {
	$scope.selected = 0;
	$scope.pages = pages;
	$scope.currentPage = pages[0];
	$scope.chosenView = "none";
	$scope.SelectedCreation = -1;
	$scope.editablePage = "";
	$scope.editing = false;
	$scope.pageVersion = "0";

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
		if (x == 'context') {
			$scope.editablePage = $scope.currentPage.details;
		}
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

	$scope.openCreation = function(id) {
		//opens Creation
		$scope.editing = false;
		console.log(creations[$scope.selected - 1][id].page);
		$scope.SelectedCreation = creations[$scope.selected - 1][id].page;
		$scope.editablePage = $scope.SelectedCreation;
		$scope.pageVersion = creations[$scope.selected - 1][id].version;
		$scope.SelectedCreation = $scope.SelectedCreation + $scope.pageVersion + ".html";
		//location.href = "#continut";
		var position = $('#continut').offset();
		$('html, body').animate({scrollTop: position.top}, "slow");
		$scope.editing = false;
	}

	$scope.editPage = function(id) {
		if ($scope.chosenView == 'context') lesson = -1;
		else lesson = id;
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: 'php/change_editable_page.php',
	            data: ({'url': $scope.editablePage, 'version': $scope.pageVersion, 'chapter': $scope.selected, 'lesson': lesson}),
	            success: function(data) {
	            	window.location.href = window.location.href + "admin/edit.php";
	            }
	        });
	    });
	}

});

